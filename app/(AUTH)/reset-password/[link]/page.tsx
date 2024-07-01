"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Reset({ params }: { params: { link: string } }) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { link } = params;
  const router = useRouter();
  const ressetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== rePassword || password.length < 5) {
      Swal.fire({
        icon: "error",
        text: "please insert correct password",
      });
      return false;
    }
    if (loading) return false;
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/reset-password/${link}`, {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.status === 200) {
        router.push("/signin");
        Swal.fire({
          titleText: "Your password changed successfully",
          icon: "success",
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
        text: "catch error, please try again",
      });
      console.log(error);
    }

    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-96 py-20 bg-white text-teal-900">
      <div className="border p-6 rounded-lg min-w-96 max-w-[500px]">
        <h1 className="mb-6 text-2xl font-semibold">Reset Password</h1>

        <form onSubmit={ressetPassword} action="">
          <div className="flex items-center border rounded-lg mb-4 px-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please Type Your New Password..."
              className=" p-2 w-full "
              type={showPassword ? "text" : "password"}
              name=""
              id="passwordId"
            />
            {!showPassword ? (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center border rounded-lg mb-6 px-2">
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Please Confirm Your New Password..."
              className=" p-2 w-full"
              type={showPassword ? "text" : "password"}
              name=""
              id="repasswordId"
            />
            {!showPassword ? (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg hover:bg-secondary py-2 "
          >
            {loading ? "LOADING..." : "SAVE"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
