import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Category, { Categories } from "../models/Category";
import throwException from "@/app/api/error/thrower";

export async function getCategory(
  categoryKey?: string
): Promise<Categories | null> {
  try {
    dbConnect();
    const categories: any[] = await Category.aggregate([
      categoryKey
        ? {
            $match: {
              key: categoryKey,
            },
          }
        : {
            $match: {},
          },
    ]);
    let result: Categories[] = categories.map((doc) => {
      const category = JSON.parse(JSON.stringify(doc));
      return category;
    });
    
    if (result.length > 0) return result[0];
    else return null;
  } catch (err: any) {
    console.log(err);
    return null;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  const categoryKey = req.nextUrl.pathname.split("/").at(-1) || "undefined";
  try {
    const categories = await getCategory(categoryKey);

    return Response.json(categories);
  } catch (err: any) {
    throwException(err.message);
  }
}
