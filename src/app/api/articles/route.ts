import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import Article, { Articles } from "./models/Article";
import throwException from "../error/thrower";
import { getCategories } from "../categories/route";

export async function getArticles(
  perpage: number,
  page: number,
  categoryKey?: string
): Promise<Articles[]> {
  try {
    await dbConnect();
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
      categoryKey
        ? {
            $match: {
              "category.key": categoryKey,
            },
          }
        : {
            $match: {},
          },
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
    console.log(err);
    return [];
  }
}

export async function GET(req: NextRequest): Promise<any> {
  const perpage = parseInt(req.nextUrl.searchParams.get("perpage") || "10");
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
  const categoryKey = req.nextUrl.searchParams.get("category") || undefined;
  try {
    const articles = await getArticles(perpage, page, categoryKey);

    return Response.json([...articles]);
  } catch (err: any) {
    throwException(err.message);
  }
}
