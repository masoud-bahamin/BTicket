import Footer from "@/components/Modules/Footer";
import Futures from "@/components/Modules/Futures";
import MainSearch from "@/components/Modules/MainSearch";
import ReviewSlider from "@/components/Templates/Main/ReviewSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[url(/img/baner.jpg)] bg-cover bg-bottom">
        <div className=" bg-[rgba(100,43,40,0.75)] pt-8 pb-16">
          <div className="container md:pt-32">
            <MainSearch />
            <div className="grid lg:grid-cols-2 gap-10 lg:py-20">
              <div></div>
              <div className="text-white mt-10 max-w-[500px]">
                <div className=" rounded-md bg-[#e85a4f80]  p-8">
                  <h3 className="text-3xl md:text-5xl md:leading-[70px] font-medium mb-5 font-Poetsen-One">
                    We Are Best Bus Charter Service In The World
                  </h3>
                  <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                  <div className="mt-6 flex gap-3 md:gap-4 text-sm md:text-base">
                    <button className="py-2.5 px-6 md:px-10 rounded-full bg-primary hover:bg-secondary font-semibold hover:-translate-y-2 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="p-1 rounded-full bg-white text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="2.5em"
                        width="2.5em"
                      >
                        <path
                          fill="currentColor"
                          d="M15 12.33l-6 4.33V8l6 4.33z"
                        />
                      </svg>
                    </button>
                    <button className="font-semibold text-white hover:text-primary">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-20">
        <h3 className="font-medium text-heading-text text-2xl mt-5 py-8 text-center font-Poetsen-One">
          Pay the way you want
        </h3>
        <Futures />
        <h3 className="font-medium text-heading-text text-xl md:text-2xl py-8 text-center font-Poetsen-One">
          Access Exclusive Features On The Wego App. Download Today!
        </h3>
        <h3 className="font-bold text-heading-text text-lg md:text-xl mb-8 text-center">
          More than 10 useful and engaging features available only for app
          users.
        </h3>
        <div className="grid grid-cols-2 gap-10">
          <div className=" bg-[url(/img/b12.jpg)] bg-cover rounded">
            <div className="bg-[rgba(58,58,58,0.36)] p-16 h-[30rem]">
              <h3 className="text-4xl text-white mb-8 font-bold">
                Things To Do On Your Trip
              </h3>
              <button className="bg-white p-3 px-12 rounded-lg hover:bg-main-bg">
                Learn More
              </button>
            </div>
          </div>
          <div className=" bg-[url(/img/b11.jpg)] bg-cover rounded">
            <div className="bg-[rgba(58,58,58,0.36)] p-16 h-[30rem]">
              <h3 className="text-4xl text-white mb-8 font-bold">
                Up to 70% Discount!
              </h3>
              <button className="bg-white p-3 px-12 rounded-lg hover:bg-main-bg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-bg my-12">
        <div className="container py-20 grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              What our customers are saying us?
            </h3>
            <p className="text-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo.
            </p>
            <div className="mt-8 flex gap-32">
              <div>
                <h5 className="text-2xl font-bold">13m+</h5>
                <p className="text-body-text">Happy People</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold">4.88</h5>
                <p className="text-body-text">Overall rating</p>
              </div>
            </div>
          </div>
          <div>
            <ReviewSlider />
          </div>
        </div>
      </div>
      <div className="container my-12">
        <h3 className="text-4xl mb-4 font-Poetsen-One">Recommended</h3>
        <p className="mb-8">Interdum et malesuada fames ac ante ipsum</p>
        <div className="grid grid-cols-4 gap-12">
          <div>
            <div>
              <Image
                className="rounded-md mb-4 h-60"
                src={"/img/b10.jpg"}
                alt="a"
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              The Montclam At Berewary London City
            </h3>
            <p className="mb-4 text-body-text font-medium">
              Westminster Borough, London
            </p>
            <div className="mb-4 flex gap-5 items-center">
              <span className="bg-secondary p-2 px-2.5 rounded text-white">
                4.7
              </span>
              <span className="text-main-text font-medium">Excepitional</span>
              <span className="text-body-text">2169 reviews</span>
            </div>
            <div>
              <span className="font-semibold mr-1 text-black">
                Starting from
              </span>
              <span className="font-medium mr-1 text-primary">$140</span>
            </div>
          </div>
          <div>
            <div>
              <Image
                className="rounded-md mb-4 h-60"
                src={"/img/b13.jpg"}
                alt="a"
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Travel By Bus Around The United States
            </h3>
            <p className="mb-4 text-body-text font-medium">
              Greyhound Akin, Amsterdam
            </p>
            <div className="mb-4 flex gap-5 items-center">
              <span className="bg-secondary p-2 px-2.5 rounded text-white">
                4.9
              </span>
              <span className="text-main-text font-medium">Excepitional</span>
              <span className="text-body-text">1320 reviews</span>
            </div>
            <div>
              <span className="font-semibold mr-1 text-black">
                Starting from
              </span>
              <span className="font-medium mr-1 text-primary">$205</span>
            </div>
          </div>
          <div>
            <div>
              <Image
                className="rounded-md mb-4 h-60"
                src={"/img/b14.jpg"}
                alt="a"
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              The Montclam At Berewary London City
            </h3>
            <p className="mb-4 text-body-text font-medium">
              Westminster Borough, London
            </p>
            <div className="mb-4 flex gap-5 items-center">
              <span className="bg-secondary p-2 px-2.5 rounded text-white">
                4.1
              </span>
              <span className="text-main-text font-medium">Excepitional</span>
              <span className="text-body-text">2452 reviews</span>
            </div>
            <div>
              <span className="font-semibold mr-1 text-black">
                Starting from
              </span>
              <span className="font-medium mr-1 text-primary">$180</span>
            </div>
          </div>
          <div>
            <div>
              <Image
                className="rounded-md mb-4 h-60"
                src={"/img/b15.jpg"}
                alt="a"
                width={500}
                height={500}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Travel By Bus Around The United States
            </h3>
            <p className="mb-4 text-body-text font-medium">
              Greyhound Akin, Amsterdam
            </p>
            <div className="mb-4 flex gap-5 items-center">
              <span className="bg-secondary p-2 px-2.5 rounded text-white">
                4.4
              </span>
              <span className="text-main-text font-medium">Excepitional</span>
              <span className="text-body-text">1230 reviews</span>
            </div>
            <div>
              <span className="font-semibold mr-1 text-black">
                Starting from
              </span>
              <span className="font-medium mr-1 text-primary">$145</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
