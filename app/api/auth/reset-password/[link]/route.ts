import { users } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { hashPassword } from "@/utils/hashPassword";
import { NextRequest, NextResponse } from "next/server";
import { Context } from "vm";

export async function POST(req: NextRequest, context: Context) {
  try {
    const body = await req.json();
    const { password } = body;
    if (!password || password.length < 3 || password.length > 40) {
      return NextResponse.json(
        { result: false, error: "validation error, password is too short" },
        { status: 400 }
      );
    }
    connectToDb();
    const link = context.params.link;
    const user = await users.findOne({ forgotPasswordLink: link });
    if (!user) {
      return NextResponse.json(
        { result: false, error: "user not found" },
        { status: 401 }
      );
    }
    const date = new Date();
    const time = date.getTime();
    if (user.forgotPasswordTime >= time) {
      const Pass = await hashPassword(password);
      const user = await users.findOneAndUpdate(
        { forgotPasswordLink: link },
        { password: Pass },
        { new: true }
      );
      return NextResponse.json({ result: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { result: false, error: "time expierd" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { result: false, error: "catch error , server error" },
      { status: 500 }
    );
  }
}
