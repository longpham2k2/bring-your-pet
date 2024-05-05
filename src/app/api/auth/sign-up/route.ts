import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import throwException from "@/app/api/error/thrower";
import { createUser } from "@/app/api/user/route";
const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  try {
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
    const hashedPassword = await bcrypt.hash(password.toString(), 8);
    const newUser = await createUser(username.toString(), hashedPassword);
    const token = jwt.sign(
      { username: newUser.username, role: newUser.role },
      SECRET,
      {
        expiresIn: "1h",
      }
    );

    return Response.json({ token });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
