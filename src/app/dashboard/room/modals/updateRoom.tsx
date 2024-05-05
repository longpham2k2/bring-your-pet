"use client";

import { Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { updateRoom } from "../scripts";
import ICamera from "../../camera/interfaces/ICamera";
import { getCameras } from "@/app/dashboard/camera/scripts";
import IRoom from "../interfaces/IRoom";

export default function UpdateRoomModal(
  props: ModalProps & { selectedRoom: IRoom | undefined }
) {
  const { title, onOk, onCancel, selectedRoom, ...rest } = props;
  const [type, setType] = React.useState<string>(selectedRoom?.type || "single");
  const [cameraId, setCameraId] = React.useState<string>();
  const [form] = Form.useForm();
  const [cameraData, setCameraData] = React.useState<ICamera[]>([]);

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedRoom) {
        return;
      }
      if (!cameraId) {
        alert("Hãy chọn camera!");
        return;
      }

      let inputValues = values;
      let selectValues = {
        type,
        cameraId,
      };
      let formValues = { ...inputValues, ...selectValues };

      console.log(formValues);
      await updateRoom(selectedRoom._id, formValues);
      // location.reload();
    },
    [cameraId, selectedRoom, type]
  );

  const handleCancel = React.useCallback(
    (e: any) => {
      if (onCancel && typeof onCancel == "function") onCancel(e);
      form.resetFields();
    },
    [form, onCancel]
  );

  React.useEffect(() => {
    let e = async () => {
      let data = await getCameras();
      setCameraData(data);
    };
    e();
  }, []);

  return (
    <Modal
      title="Thêm phòng mới"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={selectedRoom}
      >
        <Form.Item
          label={"Tên"}
          name={"name"}
          rules={[{ required: true, message: "Please input camera name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Loại"} name={"type"}>
          <Select onChange={(newType) => setType(newType)}>
            <Select.Option value="single">Single</Select.Option>
            <Select.Option value="double">Double</Select.Option>
            <Select.Option value="penthouse">Penthouse</Select.Option>
            <Select.Option value="villa">Villa</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={"Camera"} name={"cameraId"}>
          <Select onChange={(newCameraId) => setCameraId(newCameraId)}>
            {cameraData.map((camera, index) => (
              <Select.Option key={index} value={camera._id}>
                {camera.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
