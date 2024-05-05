"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { createCustomer } from "../scripts";

export default function CreateCustomerModal(props: ModalProps) {
  const { title, onOk, onCancel, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(async (values: any) => {
    let inputValues = values;
    let selectValues = {};
    let formValues = { ...inputValues, ...selectValues };

    await createCustomer(formValues);
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
      title="Thêm khách hàng mới"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label={"Tên đầy đủ"}
          name={"fullname"}
          rules={[{ required: false, message: "Please input fullname!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Số điện thoại"}
          name={"phone"}
          rules={[{ required: true, message: "Please input phone!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
