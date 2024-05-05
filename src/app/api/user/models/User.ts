import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  username: string;
  password: string;
  role: "customer" | "staff";
  fullname: string | undefined;
  phone: string | undefined;
  avatar: string | undefined;
}

const UserSchema = new mongoose.Schema<Users>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  fullname: { type: String, required: false },
  phone: { type: String, required: false },
  avatar: { type: String, required: false },
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
