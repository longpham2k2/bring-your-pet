"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { updateCamera } from "../scripts";
import ICamera from "../interfaces/ICamera";

export default function UpdateCameraModal(
  props: ModalProps & { selectedCamera: ICamera | undefined }
) {
  const { title, onOk, onCancel, selectedCamera, ...rest } = props;
  const [type, setType] = React.useState<string>("droidcam");
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedCamera) return;
      let inputValues = values;
      let selectValues = {
        type,
      };
      let formValues = { ...inputValues, ...selectValues };

      await updateCamera(selectedCamera._id, formValues);
      location.reload();
    },
    [selectedCamera, type]
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
      title="Chỉnh sửa camera"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedCamera}>
        <Form.Item
          label={"Tên"}
          name={"name"}
          rules={[{ required: true, message: "Please input camera name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Loại"} name={"type"}>
          <Select onChange={(newType) => setType(newType)}>
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
