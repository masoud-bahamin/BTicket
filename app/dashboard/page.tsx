import Sidebar from "@/components/Templates/Dashboard/Sidebar";
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
    <div className="fixed z-30 top-0 flex h-screen w-full overflow-x-hidden">
      {/* aside */}
      <Sidebar />
      {/* main */}
      <div className=" w-full bg-main-bg overflow-y-scroll">
        {/* header */}
        <header className="bg-white sticky top-0 py-4 px-8 flex-col-reverse flex md:flex-row flex-wrap justify-between gap-y-2 md:items-center">
          <div>
            <p className="hidden md:block font-semibold">Dashboard</p>
            <p className="text-sm">Home / Dashboard</p>
          </div>
          <div className="min-w-80">
            <div className="hidden md:flex gap-3 bg-light-bg py-3 px-6 items-center rounded-lg">
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
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:p-8">
          <div className="md:w-2/3 bg-white p-8 rounded-lg md:min-h-[400px] overflow-x-scroll md:overflow-x-hidden">
            <div className="flex justify-between mb-6">
              <span className=" font-bold text-2xl">Tickets</span>
              <span>
                <label>Search: </label>
                <input className="p-1 border rounded-lg" type="text" />
              </span>
            </div>
            <table className="min-w-[450px] w-full">
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
          <div className="w-full md:w-1/3 bg-white p-8 rounded-lg min-h-[400px]">
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
