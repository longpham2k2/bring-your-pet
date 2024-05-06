"use client";

import { DatePicker, Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { deletePet } from "../scripts";
import IPet from "../interfaces/IPet";
import { formatDateToDayMonthYear } from "@/app/utils/dateFormatter";

export default function DeletePetModal(
  props: ModalProps & { selectedPet: IPet | undefined }
) {
  const { title, onOk, onCancel, selectedPet, ...rest } = props;
  const [form] = Form.useForm();

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedPet) {
        return;
      }
      await deletePet(selectedPet._id);
      location.reload();
    },
    [selectedPet]
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
      title="Xóa bỏ thú cưng"
      onOk={form.submit}
      onCancel={handleCancel}
      {...rest}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={selectedPet}>
        <Form.Item label={"Tên"} name={"name"}>
          <Input readOnly />
        </Form.Item>
        <Form.Item label={"Khách hàng"}>
          <Input
            readOnly
            value={`${selectedPet?.owner?.phone} - ${selectedPet?.owner?.fullname}`}
          />
        </Form.Item>
        <Form.Item label={"Dịch vụ"}>
          <Input readOnly value={`${selectedPet?.service?.name}`} />
        </Form.Item>
        <Form.Item label={"Phòng"}>
          <Input
            readOnly
            value={
              selectedPet?.room
                ? `${selectedPet?.room?.name} - ${selectedPet?.room?.type}`
                : `Không sử dụng`
            }
          />
        </Form.Item>
        <Form.Item label={"Ngày bắt đầu"}>
          <Input
            readOnly
            value={
              selectedPet?.checkInAt
                ? `${formatDateToDayMonthYear(
                    new Date(selectedPet?.checkInAt)
                  )}`
                : `Không xác định`
            }
          />
        </Form.Item>
        <Form.Item label={"Ngày kết thúc"}>
          <Input
            readOnly
            value={
              selectedPet?.checkOutAt
                ? `${formatDateToDayMonthYear(
                    new Date(selectedPet?.checkOutAt)
                  )}`
                : `Không xác định`
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
