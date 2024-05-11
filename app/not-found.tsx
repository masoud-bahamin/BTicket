import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center h-[90vh]">
      <div
        className="bg-main-bg absolute top-0 left-0 size-40 md:size-96"
        style={{ clipPath: "circle(50% at 2% 0)" }}
      ></div>
      <div
        className="bg-primary absolute top-0 right-0 size-40 md:size-96"
        style={{
          clipPath: "ellipse(43% 29% at 76% 15%)",
        }}
      ></div>
      <div
        className="bg-body-text absolute right-0 bottom-0 size-40 md:size-96"
        style={{ clipPath: "ellipse(45% 47% at 68% 100%)" }}
      ></div>
      <div
        className="bg-main-bg absolute top-5 right-0 size-20 md:size-80"
        style={{ clipPath: "circle(24.3% at 50% 50%)" }}
      ></div>
      <div
        className="bg-main-bg absolute left-10 bottom-8 size-10 md:size-40"
        style={{ clipPath: "circle(24.3% at 50% 50%)" }}
      ></div>
      <div
        className="bg-secondary absolute left-2 bottom-20 size-16 md:size-32"
        style={{ clipPath: "circle(24.3% at 50% 50%)" }}
      ></div>
      <div className="bg-light-bg p-16 sm:p-24 rounded-full">
        <p className="text-6xl md:text-8xl font-bold mb-8 text-primary">404</p>
        <p className="text-2xl font-semibold mb-4">Page not found</p>
        <p className="mb-10">Page not found</p>
        <Link
          href={"/"}
          className="py-2.5 px-12 border border-primary hover:border-black"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
