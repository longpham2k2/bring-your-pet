import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Room, { Rooms } from "./models/Room";
import throwException from "../error/thrower";

export async function getRooms(): Promise<Rooms[]> {
  try {
    await dbConnect();
    const rooms: any[] = await Room.aggregate([
      { $addFields: { cameraFK: { $toObjectId: "$cameraId" } } },
      {
        $lookup: {
          from: "cameras",
          localField: "cameraFK",
          foreignField: "_id",
          as: "camera",
        },
      },
      { $unwind: "$camera" },
      {
        $project: {
          _id: 1,
          name: 1,
          type: 1,
          isOccupied: 1,
          camera: 1,
        },
      },
    ]);
    let result: Rooms[] = rooms.map((doc) => {
      const room = JSON.parse(JSON.stringify(doc));
      return room;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const rooms = await getRooms();

    return Response.json([...rooms]);
  } catch (err: any) {
    return throwException(err.message);
  }
}

export async function POST(req: NextRequest): Promise<any> {
  try {
    await dbConnect();
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name");
    if (!name) {
      return throwException("Name is required", 400);
    }
    const type = formData.get("type");
    if (!type) {
      return throwException("Type is required", 400);
    }
    const cameraId = formData.get("cameraId");
    if (!cameraId) {
      return throwException("Camera ID is required", 400);
    }
    const newRoom: Rooms = new Room({
      name: name,
      type: type,
      cameraId: cameraId,
      isOccupied: false,
    });
    await newRoom.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
