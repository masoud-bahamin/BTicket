import { users } from "@/models/user";
import { getUserInfo } from "@/utils/authUser";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const date = new Date();
    const time = date.getTime();
    connectToDb();
    const { verifyEmailCode, verifyEmailTime, email } = await getUserInfo();
    if (verifyEmailCode === body.verifyEmailCode && verifyEmailTime >= time) {
      const user = await users.findOneAndUpdate(
        { email },
        { isVerifyEmail: true },
        { new: true }
      );
      return NextResponse.json({ result: true }, { status: 200 });
    } else {
      return NextResponse.json({ result: false }, { status: 408 });
    }
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
