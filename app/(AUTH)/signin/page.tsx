"use client";

import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Signin() {
  const [type, setType] = useState("password");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (loading) return false;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });

      if (res.status === 200) {
        router.push("/dashboard");
        Swal.fire({
          icon: "success",
          text: "your login was successfull",
        });
      } else {
        const data = await res.json();
        Swal.fire({
          icon: "error",
          title: "Try again",
          text: data.message || "",
        });
      }
    } catch (error) {
      console.log("error in form login catch ");
      Swal.fire({
        icon: "error",
        title: "Try again",
        text: "catch error",
      });
    }

    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className=" bg-gradient-to-t from-main-text to-body-text rounded-lg p-10 sm:p-20 text-white">
        <h2 className="text-center text-3xl mb-6">SIGN IN</h2>
        <Formik
          onSubmit={(values) => loginUser(values)}
          initialValues={{ email: "", password: "" }}
        >
          <Form action="">
            <div className="flex items-center mb-6">
              <div className="-mr-8 z-10 bg-white p-5 text-gray-800 flex justify-center items-center rounded-full">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
              </div>
              <Field
                name="email"
                className="p-3 px-10 bg-gray-500 text-white z-0 rounded-full"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center mb-10">
              <Field
                name="password"
                className="p-3 pr-20 bg-gray-500 text-white z-0 rounded-full"
                type={type}
                placeholder="Password"
              />
              <div
                onClick={() =>
                  setType((t) => (t === "password" ? "text" : "password"))
                }
                className="-ml-8 z-10 bg-white p-5 text-gray-800 flex justify-center items-center rounded-full"
              >
                {type === "password" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 24v-4m5-5V8a5 5 0 0 0-10 0v7M6 27V17a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </g>
                  </svg>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-white text-gray-800 rounded-full p-3 w-full font-semibold mb-10 hover:bg-gray-200"
            >
              {loading ? "SUBMITING..." : "SIGN IN"}
            </button>
            <div className="flex justify-between">
              <Link
                className="text-xs float-end hover:text-gray-400"
                href={"/signup"}
              >
                Dont have account?
              </Link>
              <Link
                className="text-xs float-end hover:text-gray-400"
                href={"/forgot-password"}
              >
                forgot password
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signin;
