import BreadCrumb from "@/components/Modules/BreadCrumb";
import CheckboxFilterSection from "@/components/Modules/CheckBoxFilterSection";
import PriceRangeSlider from "@/components/Modules/PriceRangeSlider";
import SearchSection from "@/components/Modules/SearchSection";

import FlightsTicketCard from "@/components/Templates/Flights/FlightsTicketCard";

export default async function page() {
  return (
    <div>
      <BreadCrumb title="Flight search result" />
      <div className="bg-body-text">
        <SearchSection from="Type" to="Type" />
      </div>
      <div className="container py-20 overflow-hidden">
        <div className="text-center">
          <h3 className="text-center font-bold font-Poetsen-One w-fit mx-auto text-4xl pb-5 border-b border-b-primary mb-10">
            42 flights found
          </h3>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 xl:gap-8">
          {/* aside */}
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 min-w-80 mx-auto h-fit">
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Filter by price
              </h4>
              <PriceRangeSlider min={200} max={800}/>
              <button className="text-primary font-medium">Apply</button>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Number of stops
              </h4>
              <div>
                <CheckboxFilterSection text="1 stop" count={16} />
                <CheckboxFilterSection text="2 stop" count={10} />
                <CheckboxFilterSection text="3 stop" count={7} />
                <CheckboxFilterSection text="Non-stop" count={11} />
              </div>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Flight class</h4>
              <div>
                <CheckboxFilterSection text="Economy" count={25} />
                <CheckboxFilterSection text="Business" count={8} />
              </div>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Airlines</h4>
              <div>
                <CheckboxFilterSection text="Quatar Airways" count={5} />
                <CheckboxFilterSection text="Fly Amirates" count={8} />
                <CheckboxFilterSection text="Novo Air" count={18} />
                <CheckboxFilterSection text="Air Asia" count={14} />
                <CheckboxFilterSection text="Singapore Airlines" count={4} />
              </div>
            </div>
          </div>
          {/* aside */}
          {/* main */}
          <div className="w-full flex flex-col gap-5 xl:gap-8">
            <FlightsTicketCard />
            <FlightsTicketCard />

            <FlightsTicketCard />
            <FlightsTicketCard />
            <FlightsTicketCard />
            <FlightsTicketCard />
          </div>
          {/* main */}
        </div>
      </div>{" "}
    </div>
  );
}
