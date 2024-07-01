import MainSearch from "@/components/Modules/MainSearch";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="absolute top-0 right-0 bg-[url(/img/bg1.png)] bg-no-repeat -z-50 w-80 h-96 xl:w-[700px] xl:h-[670px]"></div>
      <div className="container py-10 flex flex-col-reverse sm:flex-row">
        <div className="max-w-[550px]">
          <p className="text-primary font-bold text-xl mb-6 font-Poetsen-One">
            Best Destinations around the world
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-Dosis md:leading-[55px] lg:leading-[80px] mb-6">
            Travel, enjoy <br /> and live a new and full life
          </h2>
          <p className="font-medium leading-8 mb-6">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <MainSearch />
        </div>
        <div className="relative">
          <Image
            className="w-80 sm:w-auto h-auto"
            src={"/img/T1.png"}
            alt="Bticket"
            width={765}
            height={764}
          />
          <div className="absolute top-8 sm:top-5 xl:top-28 left-8 sm:left-5 xl:left-28 bg-[url(/img/bus1.png)] z-20 bg-no-repeat w-12 xl:w-20 h-7 xl:h-20 -rotate-[10deg] bg-contain"></div>
          <div className="absolute top-4 sm:top-0 xl:top-10 right-0 xl:right-8 bg-[url(/img/bus1.png)] z-20 bg-no-repeat w-12 xl:w-20 h-8 xl:h-20 -rotate-[5deg] bg-contain"></div>
        </div>
      </div>
    </div>
  );
}
