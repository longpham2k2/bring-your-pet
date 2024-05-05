import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import throwException from "@/app/api/error/thrower";
import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "../models/User";
const bcrypt = require('bcrypt');

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
    const users: Users[] = await User.find({username}).exec();
    if (!users || users.length < 1) {
      return throwException("User not found", 401);
    }
    const user = users[0];
    console.log(user);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // Generate JWT token
      const token = jwt.sign({ username: user.username, role: user.role }, SECRET, {
        expiresIn: "1h",
      });
  
      return Response.json({ token });
    } else {
      return throwException("Invalid credentials", 401);
    }
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
