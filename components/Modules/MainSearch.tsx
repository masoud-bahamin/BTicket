"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function MainSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search/${from || "location"}/${to || "location"}`);
      }}
      className="mx-auto p-5 rounded-lg bg-main-bg flex flex-wrap lg:flex-nowrap gap-5 w-fit text-sm md:text-base"
    >
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
        <div className="px-4 py-2 rounded-lg min-w-72 bg-light-bg">
          <label className="block text-sm" htmlFor="">
            From
          </label>
          <input
            className=" bg-transparent py-1 font-semibold outline-none text-heading-text placeholder:text-heading-text placeholder:font-semibold"
            placeholder="Ankara"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="border rounded-full border-body-text p-1.5 md:p-2.5 bg-white md:z-10 -ml-4 -mr-4 cursor-pointer">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            className="z-10"
          >
            <path
              fillRule="evenodd"
              d="M1 11.5a.5.5 0 00.5.5h11.793l-3.147 3.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 11H1.5a.5.5 0 00-.5.5zm14-7a.5.5 0 01-.5.5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H14.5a.5.5 0 01.5.5z"
            />
          </svg>
        </div>
        <div className="px-4 py-2 rounded-lg min-w-72 bg-light-bg">
          <label className="block text-sm" htmlFor="">
            To
          </label>
          <input
            className=" bg-transparent py-1 font-semibold outline-none text-heading-text placeholder:text-heading-text placeholder:font-semibold"
            placeholder="Istanbul"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-light-bg px-4 max-w-56 py-2 rounded-lg">
        <p className="text-sm">Depart</p>
        <p className="font-semibold line-clamp-1">Thu, 16 May, Sat</p>
      </div>
      <div className="px-4 py-2 rounded-lg flex flex-col justify-center gap-2">
        <div className="flex items-center">
          <input type="radio" name="date" id="date" />
          <label className="ml-1 text-sm" htmlFor="">
            Today
          </label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="date" id="date" />
          <label className="ml-1 text-sm" htmlFor="">
            Tomarow
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-primary text-white"
      >
        Search
      </button>
    </form>
  );
}

export default MainSearch;
