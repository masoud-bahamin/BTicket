import Image from "next/image";
import React from "react";

export default function FlightsTicketCard() {
  return (
    <div className="rounded-lg border flex flex-wrap md:flex-nowrap justify-between gap-5 w-full">
      <div className="flex flex-col md:flex-row text-center w-full items-center justify-between gap-5 md-gap-x-12 xl:gap-20 p-5">
        <div>
          <Image src={"/img/b1.png"} alt="" width={120} height={100} />
        </div>
        <div>
          <p className="text-body-text font-semibold">From</p>
          <h3 className="text-xl lg:text-2xl font-semibold leading-10 text-main-text font-Poetsen-One">
            New York
          </h3>
          <p className="text-xs text-body-text">JFK - John F. Kennedy In</p>
        </div>
        <div>
          <div className="bg-light-bg rounded-full p-2 w-fit text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#e85a4f"}
              fill={"none"}
            >
              <path
                d="M14 12L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-bold my-1">Non-stop</p>
          <p className="text-xs text-body-text">01h 05minute</p>
        </div>
        <div>
          <p className="text-body-text font-semibold">To</p>
          <h3 className="text-xl lg:text-2xl font-semibold leading-10 text-main-text font-Poetsen-One">
            London
          </h3>
          <p className="text-xs text-body-text">LCY, London city airport</p>
        </div>
      </div>
      <div className="w-full md:w-fit bg-light-bg p-5 md:rounded-r-lg">
        <p className="font-semibold text-xl text-body-text line-through">
          $9,560
        </p>
        <p className="text-2xl font-bold leading-10 flex gap-1">
          $7,560
          <span className="text-xs text-primary">*20% OFF</span>
        </p>
        <button className="px-8 py-2 rounded-lg bg-primary text-white my-3">
          Book now
        </button>
        <p className="text-sm font-semibold mb-3">
          *Discount applicable on some conditions
        </p>
        <button className="font-semibold flex items-end gap-2">
          Show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={16}
            height={16}
            fill={"none"}
          >
            <path
              d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
