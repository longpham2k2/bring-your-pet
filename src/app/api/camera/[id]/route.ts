import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Camera, { Cameras } from "../models/Camera";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";

export async function getCamera(cameraId: string): Promise<Cameras | null> {
  try {
    await dbConnect();
    const camera: any = await Camera.findById(cameraId).exec();
    let result: Cameras = JSON.parse(JSON.stringify(camera));

    return result;
  } catch (err: any) {
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  const camId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(camId);
  try {
    const camera = await getCamera(camId);
    if (!camera) return throwException("Camera not found", 400);
    if (camera.type == "droidcam") {
      let address = camera.address;
      return await DroidcamStreamResponse(`http://${address}`);
    }

    return throwException("Camera not supported");
  } catch (err: any) {
    console.log(err);
    return throwException(err.message);
  }
}

export async function PATCH(req: NextRequest): Promise<any> {
  const camId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(camId);
  try {
    await dbConnect();
    const camera: Cameras | null = await Camera.findById(camId).exec();
    if (!camera) {
      return throwException("Camera not found", 400);
    }
    const formData = await req.formData();
    console.log(formData);
    const name = formData.get("name")?.toString();
    const type = formData.get("type")?.toString();
    const address = formData.get("address")?.toString();
    camera.name = name || camera.name;
    camera.type = type || camera.type;
    camera.address = address || camera.address;
    await camera.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}

export async function DELETE(req: NextRequest): Promise<any> {
  const camId = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(camId);
  try {
    await dbConnect();
    await Camera.findByIdAndDelete(camId).exec();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
