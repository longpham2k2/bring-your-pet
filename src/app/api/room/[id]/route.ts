import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Room, { Rooms } from "../models/Room";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";

export async function PATCH(req: NextRequest): Promise<any> {
  const roomId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(roomId);
  try {
    await dbConnect();
    const room: Rooms | null = await Room.findById(roomId).exec();
    if (!room) {
      return throwException("Room not found", 400);
    }
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name")?.toString();
    const type = formData.get("type")?.toString();
    const cameraId = formData.get("cameraId")?.toString();
    const isOccupied = formData.get("isOccupied");
    room.name = name || room.name;
    room.type = type || room.type;
    room.cameraId = cameraId || room.cameraId;
    room.isOccupied =
      typeof isOccupied !== "undefined" ? !!isOccupied : room.isOccupied;
    await room.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}

export async function DELETE(req: NextRequest): Promise<any> {
  const roomId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(roomId);
  try {
    await dbConnect();
    await Room.findByIdAndDelete(roomId).exec();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
