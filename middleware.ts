import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  try {
    const myCookis = cookies();
    if (myCookis.get("user-token")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/signup", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/signup", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/verify-email"],
};
