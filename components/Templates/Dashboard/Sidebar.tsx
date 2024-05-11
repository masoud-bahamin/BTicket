import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="w-72 lg:w-[350px] absolute lg:static z-30 h-screen bg-main-text text-white">
      <Link href={"/"} className="flex gap-3 px-6 py-6 mb-6">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          quality={100}
          src="/img/bu.jpg"
          alt=""
        />
        <h2 className="font-bold text-2xl font-Poetsen-Onem">B Ticket</h2>
      </Link>
      <div>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
          >
            <path d="M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4zm2-1a1 1 0 00-1 1v10.566l3.723-2.482a.5.5 0 01.554 0L11 14.566V4a1 1 0 00-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z" />
          </svg>{" "}
          <span>Bookmarks</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
          >
            <path d="M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-5 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
          </svg>
          <span>Calendar</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2" />
          </svg>
          <span>Tickets</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
          >
            <path d="M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4zm2-1a1 1 0 00-1 1v10.566l3.723-2.482a.5.5 0 01.554 0L11 14.566V4a1 1 0 00-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z" />
          </svg>{" "}
          <span>Bookmarks</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
          >
            <path d="M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-5 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
          </svg>
          <span>Calendar</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-body-text"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2" />
          </svg>
          <span>Tickets</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
