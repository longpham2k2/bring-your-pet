import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Camera, { Cameras } from "./models/Camera";
import throwException from "../error/thrower";
import { getCategories } from "../categories/route";

export async function getCameras(): Promise<Cameras[]> {
  try {
    await dbConnect();
    const cameras: any[] = await Camera.find();
    let result: Cameras[] = cameras.map((doc) => {
      const camera = JSON.parse(JSON.stringify(doc));
      return camera;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    return [];
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const cameras = await getCameras();

    return Response.json([...cameras]);
  } catch (err: any) {
    throwException(err.message);
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
    const address = formData.get("address");
    if (!address) {
      return throwException("Camera Address is required", 400);
    }
    const key = formData.get("key");
    if (!key) {
      return throwException("Camera Key is required", 400);
    }
    const newRoom: Cameras = new Camera({
      name: name,
      type: type,
      address: address,
      key: key,
    });
    await newRoom.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
