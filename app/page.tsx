import Futures from "@/components/Modules/Futures";
import MainSearch from "@/components/Modules/MainSearch";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[url(/img/baner.jpg)] bg-cover bg-bottom">
        <div className=" bg-[#e85a4f334] pt-8 pb-16">
          <div className="container">
            <MainSearch />
            <div className="grid lg:grid-cols-2 gap-10 lg:py-20">
              <div></div>
              <div className="text-white mt-10 max-w-[500px]">
                <div className=" rounded-md bg-[#e85a4f80]  p-8">
                  <h3 className="text-3xl md:text-5xl md:leading-[70px] font-bold mb-5">
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
        <h3 className="font-bold text-heading-text text-2xl mt-5 py-8 text-center">
          Pay the way you want
        </h3>
        <Futures />
        <h3 className="font-bold text-heading-text text-xl md:text-2xl py-8 text-center">
          Access Exclusive Features On The Wego App. Download Today!
        </h3>
        <h3 className="font-bold text-heading-text text-lg md:text-xl mb-8 text-center">
          More than 10 useful and engaging features available only for app
          users.
        </h3>
      </div>
    </div>
  );
}
