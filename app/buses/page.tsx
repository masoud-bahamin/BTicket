import BusTicket from "@/components/Modules/BusTicket";
import SearchSection from "@/components/Modules/SearchSection";

import { buses } from "@/models/bus";
import React from "react";

export interface BusTicketType {
  _id: string;
  price: number;
  title: string;
  time: string;
  seatType: string;
  from: string;
  to: string;
  createdAt: Date;
  reserved?: {
    seat: number;
  };
}

async function Bus() {
  const busTickets: BusTicketType[] = await buses
    .find({}, "-__v")
    .populate("reserved")
    .lean();

  return (
    <div className="bg-main-bg">
      <div className="bg-body-text">{/* <SearchSection /> */}</div>
      <div className="container py-12">
        {busTickets.map((ticket) => (
          <BusTicket key={ticket._id} {...ticket} />
        ))}
      </div>
    </div>
  );
}

export default Bus;