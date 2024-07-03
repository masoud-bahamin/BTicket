import BreadCrumb from "@/components/Modules/BreadCrumb";
import CheckboxFilterSection from "@/components/Modules/CheckBoxFilterSection";
import PriceRangeSlider from "@/components/Modules/PriceRangeSlider";
import SearchSection from "@/components/Modules/SearchSection";
import CarsCard from "@/components/Templates/Cars/CarsCard";

export default async function page() {
  return (
    <div>
      <BreadCrumb title="Cars search result" />
      <div className="bg-body-text">
        <SearchSection from="Type" to="Type" />
      </div>
      <div className="container py-20 overflow-hidden">
        <div className="text-center">
          <h3 className="text-center font-bold font-Poetsen-One w-fit mx-auto text-4xl pb-5 border-b border-b-primary mb-10">
            12 Cars found
          </h3>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 xl:gap-8">
          {/* aside */}
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 min-w-80 mx-auto h-fit">
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Filter by price
              </h4>
              <PriceRangeSlider />
              <button className="text-primary font-medium">Apply</button>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">
                Number of Guests
              </h4>
              <div>
                <CheckboxFilterSection text="5 Guest" count={16} />
                <CheckboxFilterSection text="4 Guest" count={13} />
                <CheckboxFilterSection text="3 Guest" count={17} />
                <CheckboxFilterSection text="2 Guest" count={11} />
              </div>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Car class</h4>
              <div>
                <CheckboxFilterSection text="Economy" count={17} />
                <CheckboxFilterSection text="Business" count={12} />
              </div>
            </div>
            <div className="min-w-80 p-5 rounded-lg border xl:mb-8">
              <h4 className="pb-3 mb-2 border-b font-semibold">Companies</h4>
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
            <CarsCard
              title="Honda City 4th G"
              img="/img/car-2.jpg"
              price={49}
              rate={4.9}
            />
            <CarsCard
              title="Honda City Hybrid"
              img="/img/car-3.jpg"
              price={45}
              rate={4.8}
            />
            <CarsCard
              title="Honda Jazz"
              img="/img/car-4.jpg"
              price={39}
              rate={4.6}
            />
            <CarsCard
              title="Audi S5 Sportback"
              img="/img/car-5.jpg"
              price={44}
              rate={4.7}
            />
          </div>
          {/* main */}
        </div>
      </div>{" "}
    </div>
  );
}
