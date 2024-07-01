"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading || email.length < 5) return false;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.status === 200) {
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
          text: data.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "catch error ,please try again",
      });
      console.log(error);
    }
    setLoading(false);
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
            type="email"
            name=""
            id=""
          />
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg hover:bg-secondary py-2 "
          >
            {loading ? "LOADING..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
