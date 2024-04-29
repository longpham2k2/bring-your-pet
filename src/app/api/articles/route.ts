import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Article, { Articles } from "./models/Article";
import throwException from "../error/thrower";
import { getCategories } from "../categories/route";

export async function getArticles(
  perpage: number,
  page: number,
  categoryId?: string
): Promise<Articles[]> {
  try {
    dbConnect();
    const articles: any[] = await Article.aggregate([
      { $addFields: { categoriesId: { $toObjectId: "$categoryId" } } },
      {
        $lookup: {
          from: "categories",
          localField: "categoriesId",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          _id: 1,
          title: 1,
          content: 1,
          image: 1,
          category: "$category.name",
        },
      },
    ]);
    let result: Articles[] = articles
      .splice((page - 1) * perpage, perpage)
      .map((doc) => {
        const article = JSON.parse(JSON.stringify(doc));
        return article;
      });

    return result;
  } catch (err: any) {
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  const perpage = parseInt(req.nextUrl.searchParams.get("perpage") || "10");
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
  const categoryId = req.nextUrl.searchParams.get("categoryId") || undefined;
  try {
    const articles = await getArticles(perpage, page, categoryId);

    return Response.json([...articles]);
  } catch (err: any) {
    throwException(err.message);
  }
}
