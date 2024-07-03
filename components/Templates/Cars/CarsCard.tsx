import Image from "next/image";
import React from "react";

interface CarType {
  img: string;
  title: string;
  price: number;
  rate: number;
}

export default function CarsCard({ img, title, price, rate }: CarType) {
  return (
    <div className="rounded-lg border flex flex-wrap xl:flex-nowrap justify-between gap-5 w-full">
      <div className="md:rounded-l-lg">
        <Image src={img} alt="" width={550} height={375} />
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap">
        <div className="flex flex-col w-full gap-5 p-5">
          <div>
            <p className="text-body-text font-semibold text-sm">
              West Virginia, United States
            </p>
            <h3 className="text-lg lg:text-xl leading-10 text-main-text font-Poetsen-One mb-1">
              {title}
            </h3>
            <p className="flex items-center gap-1 text-xs text-body-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#9b9b9b"}
                fill={"none"}
              >
                <path
                  d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 9.47776C9.14883 8.54314 10.5209 8 11.9946 8C13.4729 8 14.849 8.54657 16 9.48661M14.1743 12C13.5182 11.5909 12.7779 11.3607 11.9946 11.3607C11.2152 11.3607 10.4784 11.5886 9.82477 11.9938"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 15H12.0064"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              West Virginia
            </p>
          </div>

          <div>
            <p className=" text-blue-light font-semibold">Free cancellation</p>
            <h3 className=" text-main-text font-semibold mb-2">
              Cancel your booking at any time
            </h3>
            <div className="flex gap-1">
              <span className="flex items-center gap-1 border rounded-full py-1.5 px-4 text-xs shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  color={"#9b9b9b"}
                  fill={"none"}
                >
                  <path
                    d="M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 14V20M22 17L16 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                5 Guests
              </span>
              <span className="flex items-center gap-1 border rounded-full py-1.5 px-4 text-xs shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  color={"#9b9b9b"}
                  fill={"none"}
                >
                  <circle
                    cx="12"
                    cy="18"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 15V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Manual
              </span>
              <span className="flex items-center gap-1 border rounded-full py-1.5 px-4 text-xs shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  color={"#9b9b9b"}
                  fill={"none"}
                >
                  <path
                    d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.487 7.00098V8.98M7 10.5014H9.05198M15.0231 10.5014H17.075M15.0231 13.4746H17.075M7 13.4746H9.05198M10.487 15.0202V16.9992M13.5125 15.0202V16.9992M13.5017 7.00098V8.98M10.052 14.9685H14.0231C14.5753 14.9685 15.0231 14.5208 15.0231 13.9685V9.98C15.0231 9.42771 14.5753 8.98 14.0231 8.98H10.052C9.49969 8.98 9.05198 9.42771 9.05198 9.98V13.9685C9.05198 14.5208 9.49969 14.9685 10.052 14.9685Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Honda
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit bg-light-bg p-5 lg:rounded-r-lg">
          <p className="font-semibold text-xl text-blue-light">
            {rate}/5 Excellent
          </p>
          <p className="text-sm mb-2">(3524 reviewes)</p>
          <p className="text-xl text-body-text line-through">$60</p>
          <p className="text-2xl font-bold leading-10 flex gap-1">
            ${price} / Day
            <span className="text-xs text-primary">*20% OFF</span>
          </p>

          <button className=" min-w-40 px-8 py-2 rounded-lg bg-primary text-white my-3">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
