"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { deleteCustomer } from "../scripts";
import ICustomer from "../interfaces/ICustomer";

export default function DeleteCustomerModal(
  props: ModalProps & { selectedCustomer: ICustomer | undefined }
) {
  const { title, onOk, onCancel, selectedCustomer, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedCustomer) {
        return;
      }
      await deleteCustomer(selectedCustomer._id);
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
      title="Xóa bỏ khách hàng"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedCustomer}>
        <Form.Item label={"Họ Tên"} name={"name"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label={"Số điện thoại"} name={"phone"}>
          <Input readOnly />
        </Form.Item>
      </Form>
    </Modal>
  );
}
