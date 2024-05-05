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
import CreateRoomModal from "./modals/createRoom";
import DeleteRoomModal from "./modals/deleteRoom";
import UpdateRoomModal from "./modals/updateRoom";

export default function RoomManagement() {
  const [roomData, setRoomData] = React.useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = React.useState<
    IRoom | undefined
  >(undefined);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
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
      render: (text) => (text ? text : "Không rõ"),
    },
    {
      title: "Tình trạng",
      dataIndex: "isOccupied",
      key: "isOccupied",
      render: (isOccupied) => (isOccupied ? <Tag>{"Đang ở"}</Tag> : <Tag>{"Trống"}</Tag>),
    },
    {
      title: "Camera",
      dataIndex: "camera",
      key: "camera",
      render: (camera) => (camera ? <Tag>{camera.name}</Tag> : <Tag>{"Không có"}</Tag>),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          {record.camera ? (
            <Button href={`/api/camera/${record.camera._id}`}>
              <CameraOutlined /> Xem
            </Button>
          ) : (
            <></>
          )}
          <Button
            onClick={() => {
              setSelectedRoom(record);
              setShowUpdateModal(true);
            }}
          >
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button
            danger
            onClick={() => {
              setSelectedRoom(record);
              setShowDeleteModal(true);
            }}
          >
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
        <Button type="primary" onClick={(e: any) => setShowCreateModal(true)}>
          <PlusOutlined /> Thêm camera
        </Button>
      </div>
      <CreateRoomModal
        open={showCreateModal}
        onCancel={(e: any) => setShowCreateModal(false)}
      />
      <DeleteRoomModal
        open={showDeleteModal}
        onCancel={(e: any) => setShowDeleteModal(false)}
        selectedRoom={selectedRoom}
      />
      <UpdateRoomModal
        open={showUpdateModal}
        onCancel={(e: any) => setShowUpdateModal(false)}
        selectedRoom={selectedRoom}
      />
      <Table rowKey={"_id"} columns={columns} dataSource={roomData} />
    </>
  );
}
