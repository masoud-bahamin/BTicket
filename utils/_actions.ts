"use server";

import { messageFormValidation } from "@/validations/server";
import { connectToDb } from "./connectToDb";
import { Messages } from "@/models/message";

export async function MessageFormAction(state: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const message = formData.get("message");
    const validation = await messageFormValidation({ email, message });
    console.log(email, message);

    if (validation === true) {
      connectToDb();
      Messages.create({ email, message });
      return { status: "success", errors: null };
    } else {
      return { status: "error", errors: validation };
    }
  } catch (error) {
    console.log(error);
  }
}
