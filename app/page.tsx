import Futures from "@/components/Modules/Futures";
import MainSearch from "@/components/Modules/MainSearch";

export default function Home() {
  return (
    <div className="bg-white">
      <div className=" bg-primary text-white pt-8 pb-16 text-3xl -mb-12">
        <h3 className="container">Discover the real value of travel</h3>
      </div>
      <div className="container pb-20">
        <MainSearch />
        <h3 className="font-bold text-heading-text text-2xl mt-5 py-8 text-center">
          Pay the way you want
        </h3>
        <Futures />
        <h3 className="font-bold text-heading-text text-2xl py-8 text-center">
          Access Exclusive Features On The Wego App. Download Today!
        </h3>
        <h3 className="font-bold text-heading-text text-xl mb-8 text-center">
          More than 10 useful and engaging features available only for app
          users.
        </h3>
      </div>
    </div>
  );
}
