import { buses } from "@/models/bus";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, time, seatType, price, from, to } = await req.json();
    connectToDb();

    const newBus = await buses.create({
      title,
      time,
      seatType,
      price,
      from,
      to,
    });
    return NextResponse.json({ result: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    connectToDb();
    const busTickets = await buses.find({}).populate("reserved").lean();
    return NextResponse.json({ result: true, busTickets }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
