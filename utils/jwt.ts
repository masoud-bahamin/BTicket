import { sign, verify } from "jsonwebtoken";

const privateKay = process.env.SECRET_KEY_TOKEN!;

export function generateToken(email: string) {
  const token = sign(email, privateKay);
  return token;
}

export function verifyToken(token: string) {
  const email = verify(token, privateKay);
  return email;
}
