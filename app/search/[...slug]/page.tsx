import BusTicket from "@/components/Modules/BusTicket";
import SearchSection from "@/components/Modules/SearchSection";

import { buses } from "@/models/bus";
import { connectToDb } from "@/utils/connectToDb";
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
  connectToDb();
  const [from, to] = params.slug;

  const busTickets: BusTicketType[] = await buses
    .find({ from: from.toLowerCase(), to: to.toLowerCase() }, "-__v")
    .populate("reserved")
    .lean();

  return (
    <div className="bg-main-bg">
      <div className="bg-body-text">
        <SearchSection from={params.slug[0]} to={params.slug[1]} />
      </div>
      <div className="container py-12">
        {busTickets.length ? (
          <>
            {busTickets.map((ticket) => (
              <BusTicket key={ticket._id} {...ticket} />
            ))}
          </>
        ) : (
          <div>
            <p className="text-center text-2xl bg-primary text-white p-3 rounded-lg">
              There is No Ticket please Try Again
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBus;
