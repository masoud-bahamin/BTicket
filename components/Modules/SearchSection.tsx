"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchSection({
  from: fromProps,
  to: toProps,
}: {
  from: string;
  to: string;
}) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search/${from || "location"}/${to || "location"}`);
      }}
      className="mx-auto p-5 rounded-md flex gap-5 w-fit"
    >
      <div className="flex items-center text-white">
        <div className="px-4 py-1 text-sm rounded-md min-w-64 bg-main-text text-white">
          <input
            className=" bg-transparent py-1 font-semibold outline-none text-white placeholder:text-white placeholder:font-semibold"
            placeholder={fromProps}
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="  p-2.5 cursor-pointer">
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path
              fillRule="evenodd"
              d="M1 11.5a.5.5 0 00.5.5h11.793l-3.147 3.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 11H1.5a.5.5 0 00-.5.5zm14-7a.5.5 0 01-.5.5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H14.5a.5.5 0 01.5.5z"
            />
          </svg>
        </div>
        <div className="px-4 py-1 text-sm rounded-md min-w-64 bg-main-text text-white">
          <input
            className=" bg-transparent py-1 font-semibold outline-none text-white placeholder:text-white placeholder:font-semibold"
            placeholder={toProps}
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-main-text text-white px-8 py-1 text-sm rounded-md flex items-center">
        <input
          className="text-white bg-transparent border-none outline-none"
          id="dateInput"
          type="date"
          name="dateInput"
        />
      </div>

      <button
        type="submit"
        className="px-12 rounded-md bg-main-text text-white text-sm font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchSection;
