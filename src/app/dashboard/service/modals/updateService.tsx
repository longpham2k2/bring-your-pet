"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { updateService } from "../scripts";
import IService from "../interfaces/IService";

export default function UpdateServiceModal(
  props: ModalProps & { selectedService: IService | undefined }
) {
  const { title, onOk, onCancel, selectedService, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedService) return;
      let inputValues = values;
      let selectValues = {
      };
      let formValues = { ...inputValues, ...selectValues };

      await updateService(selectedService._id, formValues);
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
      title="Chỉnh sửa dịch vụ"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedService}>
        <Form.Item
          label={"Tên"}
          name={"name"}
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
