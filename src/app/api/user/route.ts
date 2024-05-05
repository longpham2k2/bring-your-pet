import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "./models/User";

export async function createUser(username: string, password: string) {
  try {
    await dbConnect();
    console.log("hashed");
    const newUser: Users = new User({
      username: username,
      password: password,
      role: "customer",
    });
    console.log("created");
    console.log(newUser);
    return newUser.save();
  } catch (err: any) {
    throw err;
  }
}
