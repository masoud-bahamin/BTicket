import { cookies } from "next/headers";
import Swal from "sweetalert2";
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
  const token = myCookies.get("user-token")?.value;

  if (!token) {
    Swal.fire({
      icon: "warning",
      text: "plaese sign in",
    });

    return;
  }

  connectToDb();
  const email = verifyToken(token);
  const user: UserType | null = await users
    .findOne({ email })
    .populate("tickets")
    .lean();
  if (!user) return;
  return user;
};
