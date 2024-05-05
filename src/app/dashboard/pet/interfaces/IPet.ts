export default interface IPet {
  _id: string;
  name: string;
  avatar: string;
  owner: {
    _id: string;
    avatar: string;
    fullname: string;
    phone: string;
  };
  service: {
    _id: string;
    name: string;
    key: string;
  };
  room: {
    _id: string;
    name: string;
    type: string;
    cameraKey: string;
    isOccupied: boolean;
  } | null;
  checkInAt: string;
  checkOutAt: string;
}
