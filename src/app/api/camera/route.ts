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
      const Camera = JSON.parse(JSON.stringify(doc));
      return Camera;
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
