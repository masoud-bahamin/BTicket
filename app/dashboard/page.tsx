import { reserved } from "@/models/reserved";
import { getUserInfo } from "@/utils/authUser";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface TicketType {
  seat: {}[];
  _id: string;
  createdAt: Date;
  busId: {
    title: string;
    price: number;
  };
}

async function Dashboard() {
  const user = await getUserInfo();
  const tickets: TicketType[] = await reserved
    .find({ userId: user?._id })
    .populate("busId")
    .lean();

  return (
    <div className="fixed top-0 flex min-h-screen w-full">
      {/* aside */}
      <div className="w-[350px] bg-main-text text-white">
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
      {/* main */}
      <div className=" w-full bg-main-bg">
        {/* header */}
        <header className="bg-white py-4 px-8 flex justify-between items-center">
          <div>
            <p className="font-semibold">Dashboard</p>
            <p className="text-sm">Home / Dashboard</p>
          </div>
          <div className="min-w-80">
            <div className="flex gap-3 bg-light-bg py-3 px-6 items-center rounded-lg">
              <svg fill="none" viewBox="0 0 15 15" height="1.2em" width="1.2em">
                <path
                  stroke="currentColor"
                  d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
                />
              </svg>
              <input
                className="w-full bg-transparent border-none outline-none"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-light-bg rounded-full">
              <Image
                src={"/img/profile.jpeg"}
                width={50}
                height={50}
                alt="profil"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold text-sm">{user?.email}</p>
              <p className=" opacity-60">
                {user?.isVerifyEmail ? "verified" : "unverified"}
              </p>
            </div>
          </div>
        </header>
        <div className="flex gap-8 p-8">
          <div className="w-2/3 bg-white p-8 rounded-lg min-h-[400px]">
            <div className="flex justify-between mb-6">
              <span className=" font-bold text-2xl">Tickets</span>
              <span>
                <label>Search: </label>
                <input className="p-1 border rounded-lg" type="text" />
              </span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left font-bold border-b border-dashed">
                  <th className="pb-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="pb-2">Title</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Date</th>
                  <th className="pb-2 text-center">Seats</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td className="font-semibold py-2 w-10">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="font-semibold py-2 flex items-center gap-2">
                      <div className="rounded">
                        <Image
                          src={"/img/b1.png"}
                          alt="brand"
                          width={40}
                          height={40}
                        />
                      </div>
                      {ticket.busId.title}
                    </td>
                    <td>{ticket.busId.price} $</td>
                    <td>{ticket.createdAt.toDateString().slice(0, 30)}</td>
                    <td className="text-center pb-3 flex gap-3 justify-center text-xs">
                      {ticket.seat?.map((i: any) => (
                        <span key={i} className="flex">
                          {i}
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                          >
                            <path d="M7 18S4 10 4 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m5-1c-1 0-4 2.5-4 2.5-.3.2-.2.5 0 .8 0 0 1 1.8 3 1.8h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-5z" />
                          </svg>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-1/3 bg-white p-8 rounded-lg min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <span className=" font-bold text-2xl">Notifications</span>
              <span className="text-2xl">...</span>
            </div>
            <div>
              <div className="flex gap-2 items-center cursor-pointer mb-3 pb-3 border-b border-dashed">
                <div className="size-10 bg-teal-200 rounded-lg"></div>
                <div>
                  <p className="font-semibold">New daily offer added</p>
                  <p className="text-sm opacity-60">New user...</p>
                </div>
              </div>
              <div className="flex gap-2 items-center cursor-pointer mb-3 pb-3 border-b border-dashed">
                <div className="size-10 bg-teal-200 rounded-lg"></div>
                <div>
                  <p className="font-semibold">New daily offer added</p>
                  <p className="text-sm opacity-60">New user...</p>
                </div>
              </div>
              <div className="flex gap-2 items-center cursor-pointer mb-3 pb-3 border-b border-dashed">
                <div className="size-10 bg-teal-200 rounded-lg"></div>
                <div>
                  <p className="font-semibold">New daily offer added</p>
                  <p className="text-sm opacity-60">New user...</p>
                </div>
              </div>
              <div className="flex gap-2 items-center cursor-pointer mb-3 pb-3 border-b border-dashed">
                <div className="size-10 bg-teal-200 rounded-lg"></div>
                <div>
                  <p className="font-semibold">New daily offer added</p>
                  <p className="text-sm opacity-60">New user...</p>
                </div>
              </div>
              <div className="flex gap-2 items-center cursor-pointer mb-3 pb-3 border-b border-dashed">
                <div className="size-10 bg-teal-200 rounded-lg"></div>
                <div>
                  <p className="font-semibold">New daily offer added</p>
                  <p className="text-sm opacity-60">New user...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
