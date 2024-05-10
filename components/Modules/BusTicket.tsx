import { BusTicketType } from "@/app/buses/page";
import Link from "next/link";
import React from "react";

function BusTicket({
  time,
  title,
  seatType,
  reserved,
  price,
  from,
  to,
  _id,
}: BusTicketType) {
  return (
    <>
      <div className="bg-white flex flex-wrap gap-5 justify-between shadow-md p-5 rounded-t-lg border-b">
        <div>
          <img
            className="w-24 md:w-32"
            width={150}
            src="https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/4889-sm.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="flex gap-1 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
            </svg>
            <span className="font-semibold">{time}</span>
          </p>
          <p>(4 Hour 30 Min)</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
            </svg>
            <span className="font-semibold">{seatType}</span>
          </div>
          <p>
            {from} - {to}
          </p>
        </div>
        <p className="font-semibold">{price} $</p>
        <Link
          href={`/buses/${_id}`}
          className="px-4 py-1.5 h-fit rounded-lg bg-primary text-white hover:bg-secondary"
        >
          Select
        </Link>
      </div>
      <div className="bg-white flex justify-between items-center shadow-md px-5 py-2 rounded-b-lg mb-5">
        <button className="px-4 py-1.5 text-xs h-fit rounded-lg bg-body-text text-main-text hover:bg-secondary">
          New Ticket
        </button>
        <Link
          href={`/buses/${_id}`}
          className="font-semibold text-xs flex items-center gap-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
          </svg>
          more
        </Link>
      </div>
    </>
  );
}

export default BusTicket;
