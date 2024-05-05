"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { createCamera, deleteCamera } from "../scripts";
import ICamera from "../interfaces/ICamera";

export default function DeleteCameraModal(
  props: ModalProps & { selectedCamera: ICamera | undefined }
) {
  const { title, onOk, onCancel, selectedCamera, ...rest } = props;
  const [type, setType] = React.useState<string>("droidcam");
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedCamera) {
        return;
      }
      await deleteCamera(selectedCamera._id);
      location.reload();
    },
    [selectedCamera]
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
      <Form form={form} onFinish={handleSubmit} initialValues={selectedCamera}>
        <Form.Item label={"Tên"} name={"name"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label={"Loại"} name={"type"}>
          <Select
            onChange={(newType) => setType(newType)}
            defaultValue={"droidcam"}
            disabled
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
          <Input readOnly />
        </Form.Item>
      </Form>
    </Modal>
  );
}
