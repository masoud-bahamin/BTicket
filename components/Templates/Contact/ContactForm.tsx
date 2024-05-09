"use client";

import React, { useEffect } from "react";
import SubmitBtn from "@/components/Templates/Contact/SubmitBtn";
import { MessageFormAction } from "@/utils/_actions";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";
function ContactForm() {
  const [state, formAction] = useFormState(MessageFormAction, {
    status: "idle",
    errors: null,
  });

  useEffect(() => {
    if (state?.status === "success") {
      Swal.fire({
        icon: "success",
        text: "Your meesage send successfully",
      }).then((res) => location.reload());
    }
  }, [state]);

  return (
    <div className="p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6 border-b border-primary pb-2">
        Contact Form
      </h2>
      <form action={formAction}>
        {state?.errors?.map((item) => {
          return item.field === "email" ? (
            <p key={item.message} className="text-rose-400 text-sm mb-1">
              {item.message}
            </p>
          ) : null;
        })}
        <label htmlFor="email">Your Email</label>
        <input
          className=" block p-2 border rounded-lg min-w-96 mb-5"
          type="text"
          placeholder="Email"
          name="email"
        />
        {state?.errors?.map((item) => {
          return item.field === "message" ? (
            <p key={item.message} className="text-rose-400 text-sm mb-1">
              {item.message}
            </p>
          ) : null;
        })}
        <label htmlFor="message">Your Message</label>
        <textarea
          className=" block p-2 border rounded-lg min-w-96 mb-5"
          placeholder="Message"
          name="message"
        />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default ContactForm;
