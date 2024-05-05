"use client";

import React, { Fragment } from "react";
import { Button, Space, Table, TableProps, Tag } from "antd";
import ICustomer from "./interfaces/ICustomer";
import { DeleteOutlined, FormOutlined, PlusOutlined } from "@ant-design/icons";
import { getCustomers } from "./scripts";
import styles from "./Customer.module.css";
import CreateCustomerModal from "./modals/createCustomer";
import DeleteCustomerModal from "./modals/deleteCustomer";
import UpdateCustomerModal from "./modals/updateCustomer";

export default function CustomerManagement() {
  const [customerData, setCustomerData] = React.useState<ICustomer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = React.useState<
    ICustomer | undefined
  >(undefined);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  React.useEffect(() => {
    let e = async () => {
      let data = await getCustomers();
      setCustomerData(data);
    };
    e();
  }, []);

  const columns: TableProps<ICustomer>["columns"] = [
    {
      title: "Họ và Tên",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => (text ? text : "Khách hàng chưa đặt tên"),
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (text) => (text ? text : "Chưa cập nhật"),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          <Button
            onClick={() => {
              setSelectedCustomer(record);
              setShowUpdateModal(true);
            }}
          >
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button
            danger
            onClick={() => {
              setSelectedCustomer(record);
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
        <span className={styles.headingTitle}>Danh sách khách hàng</span>
        <Button type="primary" onClick={(e: any) => setShowCreateModal(true)}>
          <PlusOutlined /> Thêm khách hàng
        </Button>
      </div>
      <CreateCustomerModal
        open={showCreateModal}
        onCancel={(e: any) => setShowCreateModal(false)}
      />
      <DeleteCustomerModal
        open={showDeleteModal}
        onCancel={(e: any) => setShowDeleteModal(false)}
        selectedCustomer={selectedCustomer}
      />
      <UpdateCustomerModal
        open={showUpdateModal}
        onCancel={(e: any) => setShowUpdateModal(false)}
        selectedCustomer={selectedCustomer}
      />
      <Table columns={columns} dataSource={customerData} />
    </>
  );
}
