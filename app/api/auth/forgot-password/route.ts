import { users } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email }: { email: string } = body;
    if (!email || email.length < 5 || email.length > 40) {
      return NextResponse.json({ result: false }, { status: 400 });
    }
    connectToDb();
    const link = crypto.randomUUID();
    const date = new Date();
    const time = date.getTime() + 90000;
    const user = await users.findOneAndUpdate(
      { email },
      { forgotPasswordTime: time, forgotPasswordLink: link },
      { new: true }
    );
    // send link to email
    if (user) {
      return NextResponse.json({ result: true, link }, { status: 200 });
    } else {
      return NextResponse.json({ result: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
