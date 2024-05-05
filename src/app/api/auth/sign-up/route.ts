import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import throwException from "@/app/api/error/thrower";
import User, { Users } from "../models/User";
import dbConnect from "@/app/mongoose/dbConnect";
const bcrypt = require('bcrypt');

interface LoginRequestBody {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
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
    const SECRET = process.env.JWT_SECRET;
    if (!SECRET) {
      return throwException();
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log("hashed")
    const newUser: Users = new User({
      username: username,
      password: hashedPassword,
      role: 'customer'
    })
    console.log("created")
    console.log(newUser)
    await newUser.save();
    const token = jwt.sign({ username }, SECRET, {
      expiresIn: "1h",
    });

    return Response.json({ token });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
