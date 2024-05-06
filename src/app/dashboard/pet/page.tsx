"use client";

import React, { Fragment } from "react";
import { Button, Space, Table, TableProps, Tag } from "antd";
import IPet from "./interfaces/IPet";
import {
  CameraOutlined,
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getPets } from "./scripts";
import styles from "./Pet.module.css";
import CreatePetModal from "./modals/createPet";
import DeletePetModal from "./modals/deletePet";
import UpdatePetModal from "./modals/updatePet";

export default function PetManagement() {
  const [petData, setPetData] = React.useState<IPet[]>([]);
  const [selectedPet, setSelectedPet] = React.useState<IPet | undefined>(
    undefined
  );
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  React.useEffect(() => {
    let e = async () => {
      let data = await getPets();
      setPetData(data);
    };
    e();
  }, []);

  const columns: TableProps<IPet>["columns"] = [
    {
      title: "Khách hàng",
      dataIndex: "owner",
      key: "owner",
      render: (owner) =>
        owner ? (
          <a href={`/dashboard/customer/${owner._id}`}>
            {owner.fullname || "Khách hàng chưa đặt tên"}
          </a>
        ) : (
          <p>Thú hoang</p>
        ),
    },
    {
      title: "Tên thú cưng",
      dataIndex: "name",
      key: "name",
      render: (text) => (text ? text : "Bé chưa có tên"),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "service",
      key: "service",
      render: (service) => <Tag>{service ? service.name : "Không"}</Tag>,
    },
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      render: (room) =>
        room ? (
          <a href={`/dashboard/room/${room._id}`}>{room.name}</a>
        ) : (
          <p>{"Không sử dụng"}</p>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Fragment>
          {record.room ? (
            <Button>
              <CameraOutlined /> Xem
            </Button>
          ) : (
            <></>
          )}
          <Button
            onClick={() => {
              setSelectedPet(record);
              setShowUpdateModal(true);
            }}
          >
            <FormOutlined /> Chỉnh sửa
          </Button>
          <Button
            danger
            onClick={() => {
              setSelectedPet(record);
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
        <span className={styles.headingTitle}>Danh sách thú cưng</span>
        <Button type="primary" onClick={(e: any) => setShowCreateModal(true)}>
          <PlusOutlined /> Thêm thú cưng
        </Button>
      </div>
      <CreatePetModal
        open={showCreateModal}
        onCancel={(e: any) => setShowCreateModal(false)}
      />
      <DeletePetModal
        open={showDeleteModal}
        onCancel={(e: any) => setShowDeleteModal(false)}
        selectedPet={selectedPet}
      />
      <UpdatePetModal
        open={showUpdateModal}
        onCancel={(e: any) => setShowUpdateModal(false)}
        selectedPet={selectedPet}
      />
      <Table columns={columns} dataSource={petData} />
    </>
  );
}
