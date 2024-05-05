import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Camera, { Cameras } from "../models/Camera";
import throwException from "@/app/api/error/thrower";
import { DroidcamStreamResponse } from "../../stream";

export async function getCamera(cameraKey: string): Promise<Cameras | null> {
  try {
    await dbConnect();
    const cameras: any[] = await Camera.aggregate([
      cameraKey
        ? {
            $match: {
              key: cameraKey,
            },
          }
        : {
            $match: {},
          },
    ]);
    let result: Cameras[] = cameras.map((doc) => {
      const camera = JSON.parse(JSON.stringify(doc));
      return camera;
    });
    
    if (result.length > 0) return result[0];
    else return null;
  } catch (err: any) {
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  const camKey = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  console.log(camKey)
  try {
    const camera = await getCamera(camKey);
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