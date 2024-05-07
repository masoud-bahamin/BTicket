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

async function SearchBus({ params }: { params: { slug: string[] } }) {
  const busTickets: BusTicketType[] = await buses
    .find({ from: params.slug[0], to: params.slug[1] }, "-__v")
    .populate("reserved")
    .lean();

  return (
    <div className="bg-main-bg">
      <div className="bg-body-text">
        <SearchSection from={params.slug[0]} to={params.slug[1]} />
      </div>
      <div className="container py-12">
        {busTickets.map((ticket) => (
          <BusTicket key={ticket._id} {...ticket} />
        ))}
      </div>
    </div>
  );
}

export default SearchBus;
