"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { updateCustomer } from "../scripts";
import ICustomer from "../interfaces/ICustomer";

export default function UpdateCustomerModal(
  props: ModalProps & { selectedCustomer: ICustomer | undefined }
) {
  const { title, onOk, onCancel, selectedCustomer, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedCustomer) return;
      let inputValues = values;
      let selectValues = {};
      let formValues = { ...inputValues, ...selectValues };

      await updateCustomer(selectedCustomer._id, formValues);
      location.reload();
    },
    [selectedCustomer]
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
      title="Chỉnh sửa khách hàng"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={selectedCustomer}
      >
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
