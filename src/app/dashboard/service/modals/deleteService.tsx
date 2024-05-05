"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { deleteService } from "../scripts";
import IService from "../interfaces/IService";

export default function DeleteServiceModal(
  props: ModalProps & { selectedService: IService | undefined }
) {
  const { title, onOk, onCancel, selectedService, ...rest } = props;
  const [type, setType] = React.useState<string>("droidcam");
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedService) {
        return;
      }
      await deleteService(selectedService._id);
      location.reload();
    },
    [selectedService]
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
      title="Xóa bỏ dịch vụ"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedService}>
        <Form.Item label={"Tên"} name={"name"}>
          <Input readOnly />
        </Form.Item>
      </Form>
    </Modal>
  );
}
