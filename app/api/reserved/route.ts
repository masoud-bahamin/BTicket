import { connectToDb } from "@/utils/connectToDb";
import { reserved } from "@/models/reserved";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwt";
import { users } from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    const Cookies = cookies()
    const tokenUser = Cookies.get("user-token")
    if(!tokenUser?.value) return  NextResponse.json({ result: false , msg:"unauthorize" }, { status: 401 });
    const email = verifyToken(tokenUser?.value)
    connectToDb();
    const user = await users.findOne({email})
    const { seat,  busId } = await req.json();
    const reservedTicket = await reserved.create({
      seat,
      userId:user.id,
      busId,
    });

    return NextResponse.json({ result: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    connectToDb();
    const reservedTicket = await reserved.find({}).populate("userId").lean();
    return NextResponse.json({ result: true, reservedTicket }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
