import { NextRequest } from "next/server";
import dbConnect from "@/app/mongoose/dbConnect";
import User, { Users } from "@/app/api/auth/models/User";
import throwException from "../error/thrower";

export async function getCustomers(): Promise<Users[]> {
  try {
    await dbConnect();
    const users: any[] = await User.aggregate([
      {
        $match: {
          role: "customer",
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          role: 1,
          fullname: 1,
          avatar: 1,
          phone: 1,
        },
      },
    ]);
    let result: Users[] = users.map((doc) => {
      const category = JSON.parse(JSON.stringify(doc));
      return category;
    });

    return result;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

export async function GET(req: NextRequest): Promise<any> {
  try {
    const customers = await getCustomers();

    return Response.json([...customers]);
  } catch (err: any) {
    return throwException(err.message);
  }
}
