import BreadCrumb from "@/components/Modules/BreadCrumb";
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

export const metadata = {
  title: "bus tickets",
  description: "its bus ticket description",
};

async function Bus() {
  connectToDb();
  const busTickets: BusTicketType[] = await buses
    .find({})
    .populate("reserved")
    .lean();

  return (
    <div className="bg-main-bg">
      <BreadCrumb title="Bus search results" />
      <div className="bg-body-text">
        <SearchSection from="Type" to="Type" />
      </div>
      <div className="container py-12">
        {busTickets.map((ticket) => (
          <BusTicket key={ticket._id} {...ticket} />
        ))}
      </div>
    </div>
  );
}

export default Bus;
