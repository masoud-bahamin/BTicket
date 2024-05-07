import { users } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { hashPassword } from "@/utils/hashPassword";
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
    const hashedPass = await hashPassword(password);
    const verifyEmailCode = Math.floor(Math.random() * 9999);
    const date = new Date();
    const verifyEmailTime = date.getTime() + 30 * 60000;
    // send email with number = verifyEmailCode
    connectToDb();
    const user = await users.create({
      email,
      password: hashedPass,
      verifyEmailCode,
      verifyEmailTime,
    });
    const token = generateToken(email);
    const myCookies = cookies();
    myCookies.set("user-token", token, {
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({ result: true, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
