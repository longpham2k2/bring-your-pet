"use client";

import React, { Fragment } from "react";
import { Button, Table, TableProps, Tag } from "antd";
import IRoom from "./interfaces/IRoom";
import {
  CameraOutlined,
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getRooms } from "./scripts";
import styles from "./Room.module.css";

export default function RoomManagement() {
  const [roomData, setRoomData] = React.useState<IRoom[]>([]);
  React.useEffect(() => {
    let e = async () => {
      let data = await getRooms();
      setRoomData(data);
    };
    e();
  }, []);

  const columns: TableProps<IRoom>["columns"] = [
    {
      title: "Tên phòng",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "N/A"),
    },
    {
      title: "Loại phòng",
      dataIndex: "type",
      key: "type",
      render: (text) => (text ? text : "Camera không tên"),
    },
    {
      title: "Tình trạng",
      dataIndex: "isOccupied",
      key: "isOccupied",
      render: (isOccupied) => (isOccupied ? <Tag>{"Đang ở"}</Tag> : <Tag>{"Trống"}</Tag>),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          {record.camera ? (
            <Button href={`/api/camera/${record.camera.key}`}>
              <CameraOutlined /> Xem
            </Button>
          ) : (
            <></>
          )}
          <Button>
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button danger>
            <DeleteOutlined /> Xóa bỏ
          </Button>
        </Fragment>
      ),
    },
  ];
  return (
    <>
      <div className={styles.heading}>
        <span className={styles.headingTitle}>Danh sách camera</span>
        <Button type="primary">
          <PlusOutlined /> Thêm camera
        </Button>
      </div>
      <Table columns={columns} dataSource={roomData} />
    </>
  );
}
