"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { deleteRoom } from "../scripts";
import IRoom from "../interfaces/IRoom";

export default function DeleteRoomModal(
  props: ModalProps & { selectedRoom: IRoom | undefined }
) {
  const { title, onOk, onCancel, selectedRoom, ...rest } = props;
  const [type, setType] = React.useState<string>(selectedRoom?.type || "single");
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedRoom) {
        return;
      }
      await deleteRoom(selectedRoom._id);
      location.reload();
    },
    [selectedRoom]
  );

  const handleCancel = React.useCallback(
    (e: any) => {
      if (onCancel && typeof onCancel == "function") onCancel(e);
      form.resetFields();
    },
    [form, onCancel]
  );

  return (
    <Modal
      title="Xóa bỏ camera"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedRoom}>
        <Form.Item label={"Tên"} name={"name"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label={"Loại"} name={"type"}>
          <Select onChange={(newType) => setType(newType)} disabled>
            <Select.Option value="single">Single</Select.Option>
            <Select.Option value="double">Double</Select.Option>
            <Select.Option value="penthouse">Penthouse</Select.Option>
            <Select.Option value="villa">Villa</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={"Camera"}>
          <Input readOnly value={selectedRoom?.camera?.name} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
