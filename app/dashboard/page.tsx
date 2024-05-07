import CreateTicket from "@/components/Templates/Bus/CreateTicket";
import { getUserInfo } from "@/utils/authUser";
import Link from "next/link";
import React from "react";

async function Dashboard() {
  const user = await getUserInfo();
  return (
    <div className="fixed top-0 flex min-h-screen w-full">
      {/* aside */}
      <div className="w-[350px] bg-main-text text-white">
        <div className="px-6 py-6 mb-6">
          <img
            src="https://admin.pixelstrap.net/mofi/assets/images/logo/logo_light.png"
            alt=""
          />
        </div>
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
            <p>Dashboard</p>
            <p>Home / Dashboard</p>
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
            <div className="bg-light-bg rounded-full text-primary p-3">
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1.4em"
                width="1.4em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm">{user.email}</p>
              <p className=" opacity-60">
                {user.isVerifyEmail ? "verified" : "unverified"}
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
                  <th className="pb-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="font-semibold py-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-semibold py-2 flex items-center gap-2">
                    <div className=" size-8 bg-gradient-to-t from-primary to-body-text rounded"></div>
                    VIP BUS
                  </td>
                  <td>430 $</td>
                  <td>12/05/2024</td>
                  <td className="text-center text-2xl pb-3">...</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-semibold py-2 flex items-center gap-2">
                    <div className=" size-8 bg-gradient-to-t from-rose-300 to-body-text rounded"></div>
                    VIP
                  </td>
                  <td>550 $</td>
                  <td>10/05/2024</td>
                  <td className="text-center text-2xl pb-3">...</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-semibold py-2 flex items-center gap-2">
                    <div className=" size-8 bg-gradient-to-t from-primary to-body-text rounded"></div>
                    VIP BUS
                  </td>
                  <td>490 $</td>
                  <td>08/05/2024</td>
                  <td className="text-center text-2xl pb-3">...</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-semibold py-2 flex items-center gap-2">
                    <div className=" size-8 bg-gradient-to-t from-blue-400 to-gray-600 rounded"></div>
                    BUS
                  </td>
                  <td>600 $</td>
                  <td>05/05/2024</td>
                  <td className="text-center text-2xl pb-3">...</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-semibold py-2 flex items-center gap-2">
                    <div className=" size-8 bg-gradient-to-t from-blue-400 to-body-text rounded"></div>
                    VIP BUS
                  </td>
                  <td>440 $</td>
                  <td>03/05/2024</td>
                  <td className="text-center text-2xl pb-3">...</td>
                </tr>
              </tbody>
            </table>
            {/* <CreateTicket /> */}
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
