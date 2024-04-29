import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Category, { Categories } from "./models/Category";
import throwException from "../error/thrower";

export async function getCategories(): Promise<Categories[]> {
  try {
    dbConnect();
    const result: any[] = await Category.find({});
    let categories: Categories[] = result.map((doc) => {
      const category = JSON.parse(JSON.stringify(doc));
      return category;
    });

    return categories;
  } catch (err: any) {
    throw err;
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
