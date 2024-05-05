export default interface IRoom {
  _id: string;
  name: string;
  type: string;
  camera: {
    _id: string,
    name: string,
    type: string,
    address: string,
    key: string
  } | null;
  isOccupied: boolean;
}
