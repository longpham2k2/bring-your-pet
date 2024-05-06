import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Pet, { Pets } from "../models/Pet";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";

export async function PATCH(req: NextRequest): Promise<any> {
  const petId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(petId);
  try {
    await dbConnect();
    const pet: Pets | null = await Pet.findById(petId).exec();
    if (!pet) {
      return throwException("pet not found", 400);
    }
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name")?.toString();
    const ownerId = formData.get("ownerId")?.toString();
    const serviceId = formData.get("serviceId")?.toString();
    const roomId = formData.get("roomId")?.toString();
    const checkInAt = formData.get("checkInAt")?.toString();
    const checkOutAt = formData.get("checkOutAt")?.toString();
    pet.name = name || pet.name;
    pet.ownerId = ownerId || pet.ownerId;
    pet.serviceId = serviceId || pet.serviceId;
    pet.roomId = roomId || pet.roomId;
    pet.checkInAt = checkInAt || pet.checkInAt;
    pet.checkOutAt = checkOutAt || pet.checkOutAt;
    await pet.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}

export async function DELETE(req: NextRequest): Promise<any> {
  const petId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(petId);
  try {
    await dbConnect();
    await Pet.findByIdAndDelete(petId).exec();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
