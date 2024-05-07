"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Swal from "sweetalert2";

function VerifyEmail() {
  const [code, setCode] = useState<number>();
  const router = useRouter();
  const postCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!code) return false;
    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      body: JSON.stringify({ verifyEmailCode: code }),
    });
    console.log(res);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        text: "verify completed",
      });
      router.push("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        text: "code is wrong ,try again",
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="min-w-96 border p-8 rounded-lg">
        <h2 className="mb-6 font-semibold text-2xl text-teal-900">
          Verify Your Email
        </h2>
        <form action="" onSubmit={postCode}>
          <input
            value={code}
            onChange={(e) => setCode(e.target.valueAsNumber)}
            placeholder="type your code..."
            className="border p-2 w-full rounded-lg mb-6"
            type="number"
          />
          <button
            type="submit"
            className="p-2 w-full bg-primary text-white rounded-lg mb-6 hover:bg-secondary"
          >
            Send
          </button>
          <button className="p-2 text-primary rounded-lg hover:text-secondary">
            resend code
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
