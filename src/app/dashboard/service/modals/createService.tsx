"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { createService } from "../scripts";

export default function CreateServiceModal(props: ModalProps) {
  const { title, onOk, onCancel, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(async (values: any) => {
    let inputValues = values;
    let selectValues = {};
    let formValues = { ...inputValues, ...selectValues };

    await createService(formValues);
    location.reload();
  }, []);

  const handleCancel = React.useCallback(
    (e: any) => {
      if (onCancel && typeof onCancel == "function") onCancel(e);
      form.resetFields();
    },
    [form, onCancel]
  );

  return (
    <Modal
      title="Thêm dịch vụ mới"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit}>
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
