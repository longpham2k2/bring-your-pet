"use client";

import { DatePicker, Form, Input, Modal, ModalProps, Select } from "antd";
import React from "react";
import { updatePet } from "../scripts";
import IPet from "../interfaces/IPet";
import ICustomer from "@/app/dashboard/customer/interfaces/ICustomer";
import IRoom from "@/app/dashboard/room/interfaces/IRoom";
import IService from "@/app/dashboard/service/interfaces/IService";
import { getCustomers } from "@/app/dashboard/customer/scripts";
import { getServices } from "@/app/dashboard/service/scripts";
import { getRooms } from "@/app/dashboard/room/scripts";

export default function UpdatePetModal(
  props: ModalProps & { selectedPet: IPet | undefined }
) {
  const { title, onOk, onCancel, selectedPet, ...rest } = props;
  const [ownerId, setOwnerId] = React.useState<string>();
  const [serviceId, setServiceId] = React.useState<string>();
  const [roomId, setRoomId] = React.useState<string>();
  const [form] = Form.useForm();
  const [customerData, setCustomerData] = React.useState<ICustomer[]>([]);
  const [serviceData, setServiceData] = React.useState<IService[]>([]);
  const [roomData, setRoomData] = React.useState<IRoom[]>([]);

  const handleSubmit = React.useCallback(
    async (values: any) => {
      if (!selectedPet) {
        return;
      }
      if (!ownerId) {
        alert("Hãy chọn khách hàng!");
        return;
      }
      if (!serviceId) {
        alert("Hãy chọn dịch vụ!");
        return;
      }

      let inputValues = values;
      let selectValues = {
        ownerId,
        serviceId,
        roomId,
      };
      let checkInAt = inputValues.checkInAt;
      if (checkInAt) {
        checkInAt = new Date(checkInAt).toISOString();
      }
      let checkOutAt = inputValues.checkOutAt;
      if (checkOutAt) {
        checkOutAt = new Date(checkOutAt).toISOString();
      }
      let formValues = {
        ...inputValues,
        ...selectValues,
        checkInAt,
        checkOutAt,
      };

      console.log(formValues);
      await updatePet(selectedPet._id, formValues);
      location.reload();
    },
    [ownerId, roomId, selectedPet, serviceId]
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
      let custData = await getCustomers();
      setCustomerData(custData);
      let servData = await getServices();
      setServiceData(servData);
      let roomData = await getRooms();
      setRoomData(roomData);
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
        initialValues={{
          name: selectedPet?.name,
        }}
      >
        <Form.Item
          label={"Tên thú cưng"}
          name={"name"}
          rules={[{ required: true, message: "Please input camera name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Khách hàng"} name={"ownerId"}>
          <Select onChange={(newOwnerId) => setOwnerId(newOwnerId)}>
            {customerData.map((customer, index) => (
              <Select.Option key={index} value={customer._id}>
                {`${customer.phone || ""} - ${customer.fullname || ""}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={"Dịch vụ"} name={"serviceId"}>
          <Select onChange={(newServiceId) => setServiceId(newServiceId)}>
            {serviceData.map((service, index) => (
              <Select.Option key={index} value={service._id}>
                {service.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={"Phòng"} name={"roomId"}>
          <Select onChange={(newRoomId) => setRoomId(newRoomId)}>
            <Select.Option key={-1} value={null}>
              {`Không sử dụng`}
            </Select.Option>
            {roomData.map((room, index) => (
              <Select.Option key={index} value={room._id}>
                {`${room.name} - ${room.type}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={"Ngày bắt đầu"}
          name={"checkInAt"}
          rules={[{ required: true, message: "Hãy nhập thời gian!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={"Ngày kết thúc"}
          name={"checkOutAt"}
          rules={[{ required: true, message: "Hãy nhập thời gian!" }]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
}
