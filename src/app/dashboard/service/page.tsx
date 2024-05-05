"use client";

import React, { Fragment } from "react";
import { Button, Table, TableProps, Tag } from "antd";
import IService from "./interfaces/IService";
import {
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getServices } from "./scripts";
import styles from "./Service.module.css";
import CreateServiceModal from "./modals/createService";
import DeleteServiceModal from "./modals/deleteService";
import UpdateServiceModal from "./modals/updateService";

export default function ServiceManagement() {
  const [serviceData, setServiceData] = React.useState<IService[]>([]);
  const [selectedService, setSelectedService] = React.useState<
    IService | undefined
  >(undefined);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  React.useEffect(() => {
    let e = async () => {
      let data = await getServices();
      setServiceData(data);
    };
    e();
  }, []);

  const columns: TableProps<IService>["columns"] = [
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "Dịch vụ chưa đặt tên"),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
        <Button
          onClick={() => {
            setSelectedService(record);
            setShowUpdateModal(true);
          }}
        >
          <FormOutlined /> Chỉnh sửa
        </Button>
        <Button
          danger
          onClick={() => {
            setSelectedService(record);
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
        <span className={styles.headingTitle}>Danh sách dịch vụ</span>
        <Button type="primary"  onClick={(e: any) => setShowCreateModal(true)}>
          <PlusOutlined /> Thêm dịch vụ
        </Button>
      </div>
      <CreateServiceModal
        open={showCreateModal}
        onCancel={(e: any) => setShowCreateModal(false)}
      />
      <DeleteServiceModal
        open={showDeleteModal}
        onCancel={(e: any) => setShowDeleteModal(false)}
        selectedService={selectedService}
      />
      <UpdateServiceModal
        open={showUpdateModal}
        onCancel={(e: any) => setShowUpdateModal(false)}
        selectedService={selectedService}
      />
      <Table rowKey={"_id"} columns={columns} dataSource={serviceData} />
    </>
  );
}
