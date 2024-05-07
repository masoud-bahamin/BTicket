import { hash, compare } from "bcryptjs";

const salt = Number(process.env.SECRET_KEY_HASH)!;

export async function hashPassword(pass: string) {
  const hashed = await hash(pass, salt);
  return hashed;
}
export async function comparePassword(pass: string, hashed: string) {
  const isCorrect = await compare(pass, hashed);
  return isCorrect;
}
