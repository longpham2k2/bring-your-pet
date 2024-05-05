"use client";

import React, { Fragment } from "react";
import { Button, Table, TableProps, Tag } from "antd";
import ICamera from "./interfaces/ICamera";
import {
  CameraOutlined,
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getCameras } from "./scripts";
import styles from "./Camera.module.css";

export default function CameraManagement() {
  const [cameraData, setCameraData] = React.useState<ICamera[]>([]);
  React.useEffect(() => {
    let e = async () => {
      let data = await getCameras();
      setCameraData(data);
    };
    e();
  }, []);

  const columns: TableProps<ICamera>["columns"] = [
    {
      title: "Mã camera",
      dataIndex: "key",
      key: "key",
      render: (text) => (text ? text : "N/A"),
    },
    {
      title: "Tên camera",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "Camera không tên"),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          {record.key ? (
            <Button href={`/api/camera/${record.key}`}>
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
      <Table columns={columns} dataSource={cameraData} />
    </>
  );
}
