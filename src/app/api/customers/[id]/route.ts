import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "@/app/api/user/models/User";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";
import { updateUser } from "../../user/[id]/route";
const bcrypt = require("bcrypt");

export async function PATCH(req: NextRequest): Promise<any> {
  const customerId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(customerId);
  try {
    const formData = await req.formData();
    console.log(formData);
    const username: any = formData.get("username")?.toString();
    const password: any = formData.get("password")?.toString();
    const role: any = formData.get("role")?.toString();
    const avatar: any = formData.get("avatar")?.toString();
    const fullname: any = formData.get("fullname")?.toString();
    const phone: any = formData.get("phone")?.toString();
    await updateUser(customerId, {
      username,
      password: password
        ? await bcrypt.hash(password.toString(), 8)
        : undefined,
      role,
      avatar,
      fullname,
      phone,
    });

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}

export async function DELETE(req: NextRequest): Promise<any> {
  const customerId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(customerId);
  try {
    await dbConnect();
    await User.findByIdAndDelete(customerId).exec();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
