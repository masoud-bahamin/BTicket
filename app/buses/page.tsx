import BreadCrumb from "@/components/Modules/BreadCrumb";
import BusTicket from "@/components/Modules/BusTicket";
import CheckboxFilterSection from "@/components/Modules/CheckBoxFilterSection";
import PriceRangeSlider from "@/components/Modules/PriceRangeSlider";
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

  const minPrice = busTickets.reduce((prev, curr) => {
    return prev < curr.price ? prev : curr.price;
  }, 999999999);
  const maxPrice = busTickets.reduce((prev, curr) => {
    return prev > curr.price ? prev : curr.price;
  }, 0);

  return (
    <div className="bg-main-bg">
      <BreadCrumb title="Bus search results" />
      <div className="bg-body-text">
        <SearchSection from="Type" to="Type" />
      </div>
      <div className="container py-12">
        <div className="text-center">
          <h3 className="text-center font-bold font-Poetsen-One w-fit mx-auto text-4xl pb-5 border-b border-b-primary mb-10">
            {busTickets.length || 25} buses found
          </h3>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 xl:gap-8">
          {/* aside */}
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 min-w-80 mx-auto h-fit">
            <div className="min-w-80 bg-white p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Filter by price
              </h4>
              <PriceRangeSlider min={minPrice} max={maxPrice} />
              <button className="text-primary font-medium">Apply</button>
            </div>
            <div className="min-w-80 bg-white p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Number of stops
              </h4>
              <div>
                <CheckboxFilterSection text="All" count={busTickets.length} />
                <CheckboxFilterSection text="2+2" count={21} />
                <CheckboxFilterSection text="2+1" count={15} />
                <CheckboxFilterSection text="VIP" count={6} />
              </div>
            </div>
            <div className="min-w-80 bg-white p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Bus class</h4>
              <div>
                <CheckboxFilterSection text="Economy" count={18} />
                <CheckboxFilterSection text="Business" count={9} />
              </div>
            </div>
            <div className="min-w-80 bg-white p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Componies</h4>
              <div>
                <CheckboxFilterSection text="Quatar Airways" count={5} />
                <CheckboxFilterSection text="Fly Amirates" count={8} />
                <CheckboxFilterSection text="Novo Air" count={18} />
                <CheckboxFilterSection text="Air Asia" count={14} />
                <CheckboxFilterSection text="Singapore Airlines" count={4} />
              </div>
            </div>

            {/* aside */}
          </div>
          <div className="w-full">
            {busTickets.reverse().map((ticket) => (
              <BusTicket key={ticket._id} {...ticket} />
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Bus;
