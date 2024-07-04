"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar({ email }: { email: boolean }) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className=" lg:w-[70%] flex items-center  md:text-main-text">
      <button
        onClick={() => setIsShowMenu((p) => !p)}
        className="md:hidden text-main-text"
      >
        {isShowMenu ? (
          <>
            <span className=" sr-only">mobile menu buttom</span>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </>
        ) : (
          <>
            <span className=" sr-only">mobile menu buttom</span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </>
        )}
      </button>
      <div
        onClick={() => setIsShowMenu(false)}
        className={` ${
          isShowMenu ? "left-0" : "-left-[1000px]"
        } z-50 min-w-full absolute top-16 p-6 md:p-0 bg-white md:bg-transparent md:static flex flex-col h-80 md:h-fit md:flex-row justify-between md:items-center transition-all duration-500`}
      >
        <nav className="flex flex-col md:flex-row gap-4 md:gap-0">
          <Link
            href={"/buses"}
            className="flex gap-2 items-center py-2 md:px-8 border-gray-300 rounded-full hover:border-main-text hover:text-primary"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M256 0c134.4 0 224 35.2 224 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H160v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V80c0-44.8 89.6-80 224-80zM96 160v96c0 17.7 14.3 32 32 32h112V128H128c-17.7 0-32 14.3-32 32zm176 128h112c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H272v160zM112 400c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM352 80c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16z" />
            </svg>
            <span className="font-semibold">Bus</span>
          </Link>
          <Link
            href={"/flights"}
            className="flex gap-2 items-center py-2 md:px-8 border-gray-300 rounded-full hover:border-main-text hover:text-primary"
          >
            <svg
              viewBox="0 0 1002.777 1000"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M268 970l124-400H212L100 670H0l80-170L0 330h100l112 100h180L268 30h100l224 400h274l36 4c24 2.667 39.333 6.333 46 11 6.667 4.667 18.667 11.667 36 21s22.667 20.667 16 34c0 21.333-12.667 37.667-38 49-25.333 11.333-50 17.667-74 19l-38 2H592L368 970H268" />
            </svg>
            <span className="font-semibold">Flight</span>
          </Link>
          <Link
            href={"/cars"}
            className="flex gap-2 items-center py-2 md:px-8 border-gray-300 rounded-full hover:border-main-text hover:text-primary"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM3 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM2.906 5.189l.956-1.913A.5.5 0 014.309 3h7.382a.5.5 0 01.447.276l.956 1.913a.51.51 0 01-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 01-.497-.731z"
              />
            </svg>
            <span className="font-semibold">Car</span>
          </Link>
          <Link
            href={"/stays"}
            className="flex gap-2 items-center py-2 md:px-8 border-gray-300 rounded-full hover:border-main-text hover:text-primary"
          >
            <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.79.093a.5.5 0 00-.58 0l-7 5A.5.5 0 000 5.5v9a.5.5 0 00.5.5H2V8h5v7h7.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.21-.407L14 4.528V2h-1v1.814L7.79.094zM11 12V8h1v4h-1z"
                clipRule="evenodd"
              />
              <path fill="currentColor" d="M6 15v-3H5v-1h1V9H3v6h3z" />
            </svg>
            <span className="font-semibold">Stay</span>
          </Link>
        </nav>
        <div className="flex justify-between md:justify-normal items-center gap-4 divide-x-2 divide-body-text">
          {email ? (
            <p>
              <Link
                title="Dashboard"
                className="pr-3 hover:text-primary flex items-center "
                href={"/dashboard"}
              >
                <Image
                  src={"/img/profile.jpeg"}
                  width={35}
                  height={35}
                  alt="profil"
                  className="rounded-full"
                />
              </Link>{" "}
            </p>
          ) : (
            <Link
              title="sign in"
              className="pr-3 hover:text-primary"
              href={"/signin"}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.4em"
                width="1.4em"
              >
                <defs>
                  <style />
                </defs>
                <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" />
              </svg>
              {/* Sign In */}
            </Link>
          )}
          <Link
            title="contact"
            className="pl-4 hover:text-primary"
            href={"/contact"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              color="currentColor"
              fill={"none"}
            >
              <path
                d="M13 3C17.4183 3 21 6.58172 21 11M13.5 6.5C15.7091 6.5 17.5 8.29086 17.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
