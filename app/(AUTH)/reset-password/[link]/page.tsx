"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Reset({ params }: { params: { link: string } }) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { link } = params;
  const router = useRouter();
  const ressetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== rePassword) {
      Swal.fire({
        icon: "error",
        text: "please insert correct password",
      });
      return false;
    }
    const res = await fetch(`/api/auth/reset-password/${link}`, {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    if (res.status === 200) {
      router.push("/signin");
      Swal.fire({
        titleText: "Your password changed successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "please try again",
      });
    }
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center min-h-96 py-20 bg-white text-teal-900">
      <div className="border p-6 rounded-lg min-w-96 max-w-[500px]">
        <h1 className="mb-6 text-2xl font-semibold">Reset Password</h1>

        <form onSubmit={ressetPassword} action="">
          <label className="text-sm" htmlFor="">
            New Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Please Type Your New Password..."
            className="border p-2 w-full rounded-lg mb-4"
            type="password"
            name=""
            id=""
          />
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Please Confirm Your New Password..."
            className="border p-2 w-full rounded-lg mb-6"
            type="password"
            name=""
            id=""
          />
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg hover:bg-secondary py-2 "
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
