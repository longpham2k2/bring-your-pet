import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "@/app/api/user/models/User";
import throwException from "../error/thrower";
import { createUser } from "@/app/api/user/route";
const bcrypt = require("bcrypt");

export async function getCustomers(): Promise<Users[]> {
  try {
    await dbConnect();
    const users: any[] = await User.aggregate([
      {
        $match: {
          role: "customer",
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          role: 1,
          fullname: 1,
          avatar: 1,
          phone: 1,
        },
      },
    ]);
    let result: Users[] = users.map((doc) => {
      const category = JSON.parse(JSON.stringify(doc));
      return category;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const customers = await getCustomers();

    return Response.json([...customers]);
  } catch (err: any) {
    return throwException(err.message);
  }
}

export async function POST(req: NextRequest): Promise<any> {
  try {
    await dbConnect();
    const formData = await req.formData();
    console.log(formData);
    const username = formData.get("username");
    if (!username) {
      return throwException("Username is required", 400);
    }
    const password = formData.get("password");
    if (!password) {
      return throwException("Password is required", 400);
    }
    const hashedPassword = await bcrypt.hash(password.toString(), 8);
    const newUser: Users = new User({
      username: username,
      password: hashedPassword,
      role: "customer",
    });
    
    const avatar = formData.get("avatar")?.toString();
    newUser.avatar = avatar || newUser.avatar;
    const fullname = formData.get("fullname")?.toString();
    newUser.fullname = fullname || newUser.fullname;
    const phone = formData.get("phone")?.toString();
    newUser.phone = phone || newUser.phone;
    await newUser.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
