"use client";

import React, { Fragment } from "react";
import { Button, Table, TableProps, Tag } from "antd";
import IService from "./interfaces/IService";
import {
  CameraOutlined,
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getServices } from "./scripts";
import styles from "./Service.module.css";

export default function ServiceManagement() {
  const [serviceData, setServiceData] = React.useState<IService[]>([]);
  React.useEffect(() => {
    let e = async () => {
      let data = await getServices();
      setServiceData(data);
    };
    e();
  }, []);

  const columns: TableProps<IService>["columns"] = [
    {
      title: "Mã dịch vụ",
      dataIndex: "key",
      key: "key",
      render: (text) => (text ? text : "Camera không tên"),
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "N/A"),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
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
        <span className={styles.headingTitle}>Danh sách dịch vụ</span>
        <Button type="primary">
          <PlusOutlined /> Thêm dịch vụ
        </Button>
      </div>
      <Table columns={columns} dataSource={serviceData} />
    </>
  );
}
