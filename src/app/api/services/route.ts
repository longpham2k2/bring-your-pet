import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Service, { Services } from "./models/Service";
import throwException from "../error/thrower";

export async function getServices(): Promise<Services[]> {
  try {
    await dbConnect();
    const services: any[] = await Service.find();
    let result: Services[] = services.map((doc) => {
      const service = JSON.parse(JSON.stringify(doc));
      return service;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const services = await getServices();

    return Response.json([...services]);
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
    const key = formData.get("key");
    if (!key) {
      return throwException("Key is required", 400);
    }
    const newService: Services = new Service({
      name: name,
      key: key,
    })
    await newService.save();

    return Response.json({ message: "Success" });
  } catch (e: any) {
    return throwException(e.message, 500);
  }
}
