import { buses } from "@/models/bus";
import { reserved } from "@/models/reserved";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import { Context } from "vm";

export async function GET(req: NextRequest, context: Context) {
  try {
    const { id } = context.params;
    connectToDb();
    const reservedSeats = await reserved.find({ busId: id });
    const ticketInfo = await buses.findOne({ _id: id });
    return NextResponse.json(
      { result: true, reservedSeats, ticketInfo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
