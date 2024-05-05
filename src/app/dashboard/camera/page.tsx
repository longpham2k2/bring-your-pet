"use client";

import React, { Fragment } from "react";
import { Button, Modal, Table, TableProps, Tag } from "antd";
import ICamera from "./interfaces/ICamera";
import {
  CameraOutlined,
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getCameras } from "./scripts";
import styles from "./Camera.module.css";
import CreateCameraModal from "./modals/createCamera";
import DeleteCameraModal from "./modals/deleteCamera";
import UpdateCameraModal from "./modals/updateCamera";

export default function CameraManagement() {
  const [selectedCamera, setSelectedCamera] = React.useState<
    ICamera | undefined
  >(undefined);
  const [cameraData, setCameraData] = React.useState<ICamera[]>([]);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  React.useEffect(() => {
    let e = async () => {
      let data = await getCameras();
      setCameraData(data);
    };
    e();
  }, []);
  const columns: TableProps<ICamera>["columns"] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "Camera không tên"),
    },
    {
      title: "Loại",
      dataIndex: "type",
      key: "type",
      render: (text) => (text ? text : "Không rõ"),
    },
    {
      title: "Đường dẫn",
      dataIndex: "address",
      key: "address",
      render: (text) => (text ? text : "Không xác định"),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          <Button target="_blank" href={`/api/camera/${record._id}`}>
            <CameraOutlined /> Xem
          </Button>
          <Button
            onClick={() => {
              setSelectedCamera(record);
              setShowUpdateModal(true);
            }}
          >
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button
            danger
            onClick={() => {
              setSelectedCamera(record);
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
      <CreateCameraModal
        open={showCreateModal}
        onCancel={(e: any) => setShowCreateModal(false)}
      />
      <DeleteCameraModal
        open={showDeleteModal}
        onCancel={(e: any) => setShowDeleteModal(false)}
        selectedCamera={selectedCamera}
      />
      <UpdateCameraModal
        open={showUpdateModal}
        onCancel={(e: any) => setShowUpdateModal(false)}
        selectedCamera={selectedCamera}
      />
      <Table rowKey={"_id"} columns={columns} dataSource={cameraData} />
    </>
  );
}
