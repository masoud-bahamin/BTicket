import { cookies } from "next/headers";
import { connectToDb } from "./connectToDb";
import { verifyToken } from "./jwt";
import { users } from "@/models/user";

export interface UserType {
  email: string;
  tickets: { seat: string[]; _id: string }[];
  isVerifyEmail: boolean;
  _id: string;
  verifyEmailCode: number;
  verifyEmailTime: number;
}

export const getUserInfo = async () => {
  const myCookies = cookies();
  const token = myCookies.get("user-token");

  if (!token?.value) {
    return null;
  }

  connectToDb();
  const email = verifyToken(token.value);
  if (!email) {
    return null;
  }
  const user: UserType | null = await users
    .findOne({ email })
    .populate("tickets")
    .lean();
  if (!user) return null;
  return user;
};
