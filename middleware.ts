import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const myCookies = cookies();
    if (myCookies.get("user-token")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/signup", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/signup", req.url));
  }
}

export const config = {
  matcher: "/dashboard",
};
