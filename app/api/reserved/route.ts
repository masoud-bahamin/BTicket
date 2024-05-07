import { connectToDb } from "@/utils/connectToDb";
import { reserved } from "@/models/reserved";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { seat, userId, busId } = await req.json();
    connectToDb();
    const reservedTicket = await reserved.create({
      seat,
      userId,
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
