"use client";

import React from "react";
import { Button, Space, Table, TableProps, Tag } from "antd";
import ICustomer from "./interfaces/ICustomer";
import { DeleteOutlined, FormOutlined, PlusOutlined } from "@ant-design/icons";
import { getCustomers } from "./scripts";
import styles from "./Customer.module.css";

export default function CustomerManagement() {
  const [customerData, setCustomerData] = React.useState<ICustomer[]>([]);
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
        <Space size="middle">
          <Button>
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button danger>
            <DeleteOutlined /> Xóa bỏ
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className={styles.heading}>
        <span className={styles.headingTitle}>Danh sách khách hàng</span>
        <Button type="primary">
          <PlusOutlined /> Thêm khách hàng
        </Button>
      </div>
      <Table columns={columns} dataSource={customerData} />
    </>
  );
}
