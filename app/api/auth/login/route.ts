import { users } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { comparePassword } from "@/utils/hashPassword";
import { generateToken } from "@/utils/jwt";
import { registerValidation } from "@/validations/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const validatinBody = registerValidation({ email, password });
    if (validatinBody !== true)
      return NextResponse.json(
        { result: false, validatinBody },
        { status: 400 }
      );

    connectToDb();
    const user = await users.findOne({ email });

    if (!user)
      return NextResponse.json(
        { result: false, message: "your email is incorrect" },
        { status: 404 }
      );
    const isCorrectPass = await comparePassword(password, user.password);

    if (!isCorrectPass)
      return NextResponse.json(
        { result: false, message: "your email or password is incorrect" },
        { status: 401 }
      );
    const token = generateToken(email);

    const myCookies = cookies();
    myCookies.set("user-token", token, {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ result: true, token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
