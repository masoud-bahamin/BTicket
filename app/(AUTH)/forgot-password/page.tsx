"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Forgot() {
  const [email, setEmail] = useState("");

  const router = useRouter();
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    console.log(res);
    if (res.status === 200) {
      const data = await res.json();
      Swal.fire({
        titleText: "Your email send successfully",
        text: "Go to reset-password Page",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        showCancelButton: true,
      }).then((res) => {
        setEmail("");
        if (res.isConfirmed) {
          router.push(`/reset-password/${data.link}`);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "please try again",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-96 py-20 bg-white text-teal-900">
      <div className="border p-6 rounded-lg min-w-96">
        <h1 className="mb-6 text-2xl font-semibold">Forgot Password</h1>
        <form className="mb-10" onSubmit={sendEmail} action="">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please Type Your Email..."
            className="border p-2 w-full rounded-lg mb-6"
            type="text"
            name=""
            id=""
          />
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg hover:bg-secondary py-2 "
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
