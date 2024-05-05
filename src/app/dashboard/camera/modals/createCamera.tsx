"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { createCamera } from "../scripts";

export default function CreateCameraModal(props: ModalProps) {
  const { title, onOk, onCancel, ...rest } = props;
  const [type, setType] = React.useState<string>("droidcam");
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(async (values: any) => {
    let inputValues = values;
    let selectValues = {
      type,
    };
    let formValues = { ...inputValues, ...selectValues };
    
    await createCamera(formValues);
    location.reload();
  }, [type]);

  const handleCancel = React.useCallback(
    (e: any) => {
      if (onCancel && typeof onCancel == "function") onCancel(e);
      form.resetFields();
    },
    [form, onCancel]
  );

  return (
    <Modal
      title="Thêm camera mới"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label={"Tên"}
          name={"name"}
          rules={[{ required: true, message: "Please input camera name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Loại"} name={"type"}>
          <Select
            onChange={(newType) => setType(newType)}
            defaultValue={"droidcam"}
          >
            <Select.Option value="droidcam">Droidcam</Select.Option>
            <Select.Option value="video">Video</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={"Đường dẫn"}
          name={"address"}
          rules={[{ required: true, message: "Please input camera address!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
