import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Service, { Services } from "../models/Service";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";

export async function PATCH(req: NextRequest): Promise<any> {
  const serviceId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(serviceId);
  try {
    await dbConnect();
    const service: Services | null = await Service.findById(serviceId).exec();
    if (!service) {
      return throwException("Service not found", 400);
    }
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name")?.toString();
    service.name = name || service.name;
    await service.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}

export async function DELETE(req: NextRequest): Promise<any> {
  const serviceId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(serviceId);
  try {
    await dbConnect();
    await Service.findByIdAndDelete(serviceId).exec();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
