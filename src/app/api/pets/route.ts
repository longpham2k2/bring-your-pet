import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Pet, { Pets } from "./models/Pet";
import throwException from "../error/thrower";

export async function getPets(): Promise<Pets[]> {
  try {
    await dbConnect();
    const pets: any[] = await Pet.aggregate([
      { $addFields: { userFK: { $toObjectId: "$ownerId" } } },
      {
        $lookup: {
          from: "users",
          localField: "userFK",
          foreignField: "_id",
          as: "owner",
        },
      },
      { $unwind: "$owner" },
      { $addFields: { serviceFK: { $toObjectId: "$serviceId" } } },
      {
        $lookup: {
          from: "services",
          localField: "serviceFK",
          foreignField: "_id",
          as: "service",
        },
      },
      { $unwind: "$service" },
      {
        $addFields: {
          roomFK: {
            $cond: {
              if: { $eq: ["$roomId", null] },
              then: null,
              else: { $toObjectId: "$roomId" },
            },
          },
        },
      },
      {
        $lookup: {
          from: "rooms",
          localField: "roomFK",
          foreignField: "_id",
          as: "room",
        },
      },
      { $unwind: { path: "$room", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 1,
          avatar: 1,
          name: 1,
          owner: {
            _id: 1,
            fullname: 1,
            phone: 1,
            avatar: 1,
          },
          service: {
            _id: 1,
            name: 1,
            key: 1,
          },
          roomId: 1,
          room: {
            $cond: {
              if: { $eq: ["$roomFK", null] },
              then: null,
              else: "$room",
            },
          },
          checkInAt: 1,
          checkOutAt: 1,
        },
      },
    ]);
    let result: Pets[] = pets.map((doc) => {
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
    const pets = await getPets();

    return Response.json([...pets]);
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
    const ownerId = formData.get("ownerId");
    if (!ownerId) {
      return throwException("ownerId is required", 400);
    }
    const serviceId = formData.get("serviceId");
    if (!serviceId) {
      return throwException("serviceId is required", 400);
    }
    const roomId = formData.get("roomId");
    const checkInAt = formData.get("checkInAt");
    if (!checkInAt) {
      return throwException("checkInAt is required", 400);
    }
    const checkOutAt = formData.get("checkOutAt");
    const newPet: Pets = new Pet({
      name: name,
      ownerId: ownerId,
      serviceId: serviceId,
      roomId: roomId ? roomId : null,
      checkInAt: checkInAt,
      checkOutAt: checkOutAt ? checkOutAt : null,
    });
    await newPet.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
