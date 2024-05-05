import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "../models/User";

export async function updateUser(
  userId: string,
  newUser: {
    username?: string;
    password?: string;
    role?: "customer" | "staff";
    fullname?: string;
    phone?: string;
    avatar?: string;
  }
) {
  try {
    await dbConnect();
    const user: Users | null = await User.findById(userId).exec();
    if (!user) {
      throw new Error("User not found");
    }
    user.username = newUser.username || user.username;
    user.password = newUser.password || user.password;
    user.role = newUser.role || user.role;
    user.fullname = newUser.fullname || user.fullname;
    user.phone = newUser.phone || user.phone;
    user.avatar = newUser.avatar || user.avatar;
    return user.save();
  } catch (e: any) {
    throw e;
  }
}

export async function deleteUser(
  userId: string,
) {
  try {
    await dbConnect();
    await User.findByIdAndDelete(userId).exec();

    return true;
  } catch (e: any) {
    throw e;
  }
}
