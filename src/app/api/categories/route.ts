import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Category, { Categories } from "./models/Category";
import throwException from "../error/thrower";

export async function getCategories(): Promise<Categories[]> {
  try {
    await dbConnect();
    const categories: any[] = await Category.find();
    let result: Categories[] = categories.map((doc) => {
      const category = JSON.parse(JSON.stringify(doc));
      return category;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    return [];
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const categories = await getCategories();

    return Response.json([...categories]);
  } catch (err: any) {
    throwException(err.message);
  }
}
