"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function MainSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const router = useRouter();

  const serachSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (from.length < 2 || to.length < 2) {
      Swal.fire({
        icon: "error",
        text: "please select a valid city",
      });
      return;
    }
    router.push(`/search/${from || "location"}/${to || "location"}`);
  };
  return (
    <div className="mx-auto px-5 pt-5 rounded-lg bg-main-bg">
      <div className="w-full flex gap-4">
        <Link
          href={"/"}
          className="flex items-center gap-1 font-medium px-4 py-1 rounded-lg bg-secondary text-white w-fit cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M17.5 19V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 19V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M7 16H8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 16H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 8L2 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 8L22 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 5L19.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4.5 13L19.5 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 13V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Bus
        </Link>
        <Link
          href={"/flights"}
          className="flex items-center gap-1 font-medium px-4 py-1 rounded-lg border border-secondary hover:text-primary cursor-pointer w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M2 20H18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.82496 12.1661C3.54996 11.9661 3.29996 11.7161 2.99998 10.8411C2.91861 10.6241 2.61108 9.53619 2.34998 8.54109C2.12972 7.7017 1.93347 6.93555 2.02497 6.74109C2.09998 6.54109 2.19997 6.39109 2.52497 6.19109C2.72496 6.06802 3.74996 5.81609 3.94996 5.76609C4.14996 5.71609 4.42496 5.69109 4.64996 5.76609C5.07496 5.84109 5.94996 7.11609 6.17496 7.26609C6.27495 7.36609 6.59996 7.657 6.97496 7.69109C7.24997 7.71609 7.52496 7.64109 7.82497 7.51609C8.09996 7.40151 13.525 4.76609 14.025 4.54109C18.1 2.84109 21.06 5.63609 21.51 6.23609C21.975 6.81609 22.075 6.99109 21.95 7.49109C21.7884 8.01609 21.35 8.11609 21.1 8.19109C20.8499 8.26609 17.4 9.19109 16.05 9.56609C15.7551 9.6621 15.6111 9.85492 15.575 9.89109C15.4 10.1411 14.605 11.8411 14.38 12.2161C14.225 12.6161 13.8 13.1161 13.25 13.3161C12.675 13.5161 11.675 13.7411 11.45 13.8161C11.225 13.8911 10.7 14.0411 10.525 13.9911C10.3 13.9411 10.085 13.7161 10.185 13.3661C10.285 13.0161 10.475 12.0411 10.5 11.8911C10.525 11.7411 10.775 11.1161 10.5 11.0911C10.45 11.0161 9.92496 11.2411 9.14996 11.4161C8.57419 11.5782 7.9712 11.7386 7.54996 11.8411C5.92496 12.3161 5.0449 12.4411 4.84996 12.4411C4.47496 12.4411 4.19996 12.3911 3.82496 12.1661Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          Flights
        </Link>
        <Link
          href={"/cars"}
          className="flex items-center gap-1 font-medium px-4 py-1 rounded-lg border border-secondary hover:text-primary cursor-pointer w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M2.98052 13.2888C2.25918 14.591 2.05755 16.2028 2.00119 17.0021C1.98176 17.2775 2.20345 17.5 2.47992 17.5H3.98173M2.98052 13.2888C2.98052 10.144 3.89594 6.34904 5.72678 4.71122C5.88815 4.56686 6.10124 4.5 6.31787 4.5H11.1118C11.6911 4.5 12.2694 4.6171 12.7553 4.93222C13.9539 5.70953 15.7652 7.27971 17.3038 9.68934C17.4311 9.88859 17.6211 10.0398 17.8435 10.1204C18.7292 10.4415 19.7153 10.887 20.3463 11.1839C20.7723 11.3844 21.1116 11.7341 21.273 12.176C21.7174 13.393 21.9682 14.7508 22 16.9994C22.0038 17.2755 21.7793 17.5 21.5028 17.5H20.001M2.98052 13.2888C3.34135 12.6373 3.83222 12.0634 4.5 11.7073M15.9962 17.5H7.98654"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 17.5C8 18.6046 7.10457 19.5 6 19.5C4.89543 19.5 4 18.6046 4 17.5C4 16.3954 4.89543 15.5 6 15.5C7.10457 15.5 8 16.3954 8 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M20 17.5C20 18.6046 19.1046 19.5 18 19.5C16.8954 19.5 16 18.6046 16 17.5C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17.5 10C14.5 9 11 8.5 7 9C7 7 8 5 8.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11H9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cars
        </Link>
        <Link
          href={"/stays"}
          className="flex items-center gap-1 font-medium px-4 py-1 rounded-lg border border-secondary hover:text-primary cursor-pointer w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M2 10L7 4M7 4L12.4142 9.41421C12.7032 9.70324 12.8478 9.84776 13.0315 9.92388C13.2153 10 13.4197 10 13.8284 10H22L18.1994 5.43926C17.6096 4.73152 17.3147 4.37764 16.9116 4.18882C16.5084 4 16.0478 4 15.1265 4H7Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 8V20H3V8.85714"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 20H21V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7.5V4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00801 12L6.99902 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 20V16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 14L17 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Stays
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-1 font-medium px-4 py-1 ml-auto text-primary cursor-pointer w-fit"
        >
          One Way
        </Link>
      </div>
      <form
        onSubmit={serachSubmit}
        className="py-5 pr-5 rounded-lg bg-main-bg flex justify-between flex-wrap md:flex-nowrap gap-x-2 gap-y-5 w-fit text-sm md:text-base"
      >
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
          <div className="px-4 py-2 rounded-lg w-64 sm:w-48 bg-light-bg">
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
          <div className="border rounded-full border-body-text p-1.5 md:p-2.5 bg-white sm:z-10 -ml-4 -mr-4 cursor-pointer">
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
          <div className="px-4 py-2 rounded-lg w-64 sm:w-48 bg-light-bg">
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
            <label className="ml-1 text-sm" htmlFor="date">
              Today
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="date" id="date11" />
            <label className="ml-1 text-sm" htmlFor="date11">
              Tomarow
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="z-10 px-4 py-2 rounded-lg bg-primary hover:bg-secondary text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default MainSearch;
