export default interface ICustomer {
  _id: string;
  username: string;
  role: "customer" | "staff";
  fullname?: string;
  phone?: string;
  avatar?: string;
}
