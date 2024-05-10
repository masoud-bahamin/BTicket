"use client";

import React, { useEffect, useState } from "react";

type seatType = {
  id: number;
  seat: number;
  reserved: boolean;
  isSubmited: boolean;
};

function SelectedSeat({ id, userId }: { id: string; userId: string }) {
  const [seats, setSeats] = useState<null | seatType[]>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const makeSeats = (num: number, seatArray: { seat: number[] }[]) => {
    const array = [];
    let newarray: number[] = [];
    seatArray.forEach((item) => {
      newarray = [...newarray, ...item.seat];
    });
    for (let i = 1; i < num; i++) {
      array.push({
        id: i,
        seat: i,
        reserved: newarray.includes(i) ? true : false,
        isSubmited: newarray.includes(i) ? true : false,
      });
    }
    return array;
  };
  const selectHandler = (item: seatType) => {
    if (item.isSubmited) return false;
    if (!seats) return false;
    const newArray = seats?.map((i) => {
      i.id === item.id && (i.reserved = !i.reserved);
      return i;
    });
    setSeats(newArray);

    if (selectedSeats?.includes(item.seat)) {
      const filterArray = selectedSeats.filter((i) => i !== item.seat);
      setSelectedSeats(filterArray);
    } else {
      setSelectedSeats((prev) => [...prev, item.seat]);
    }
  };

  const getTicketInfo = async () => {
    try {
      const res = await fetch(`/api/reserved/${id}`);
      if (res.status === 200) {
        const data = await res.json();
        const arr = makeSeats(28, data.reservedSeats);
        setSeats(arr);
      }
    } catch (error) {
      console.log("catch ticket page");
    }
  };

  const reservedTicket = async (seat: number[]) => {
    const res = await fetch(`/api/reserved`, {
      method: "POST",
      body: JSON.stringify({
        seat,
        userId,
        busId: id,
      }),
    });

    getTicketInfo();
  };

  useEffect(() => {
    getTicketInfo();
  }, []);

  return (
    <div className="container px-0">
      <div className="flex flex-wrap justify-between py-12 rounded-lg gap-5 lg:gap-10 bg-white">
        <div className=" flex flex-wrap p-4 border rounded-t-2xl w-[290px]">
          <div className="w-full flex justify-between">
            <span className={`rounded-md px-4 py-2 border mx-2 text-center`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.4em"
                width="1.4em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
                <path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12 z" />
                <path d="M12 14v7M10 12l-6.75-2M14 12l6.75-2" />
              </svg>
            </span>
            <span
              className={`rounded-md ml-24 bg-ros-300 px-4 py-2 border mx-2 text-center`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.4em"
                width="1.4em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
                <path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12 z" />
                <path d="M12 14v7M10 12l-6.75-2M14 12l6.75-2" />
              </svg>
            </span>
          </div>

          {seats?.map((item, i) => (
            <span
              className={`${(i + 1) % 3 === 0 ? "ml-[88px]" : ""} 
            ${item.reserved ? "bg-green-300 hover:bg-green-300" : ""}
            ${
              item.isSubmited
                ? "bg-green-700 hover:bg-green-700"
                : "cursor-pointer hover:text-body-text "
            }
           px-1 py-2 border mx-1  my-1 text-center w-12 flex justify-center rounded-md text-xs`}
              key={item.id}
              onClick={() => selectHandler(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 32 32"
                className="mr-1"
              >
                <g fill="none">
                  <g
                    fill="currentColor"
                    clipPath="url(#fluentEmojiHighContrastSeat0)"
                  >
                    <path d="M13.178 27H25v1.78c0 .13-.105.22-.206.22H13.898a.265.265 0 0 1-.249-.204L13.178 27Z"></path>
                    <path d="m16.264 16l.271 1h8.253C26.587 17 28 18.469 28 20.228v3.544c0 .433-.086.848-.241 1.229c.155.381.241.797.241 1.229v2.55c0 1.748-1.409 3.22-3.206 3.22H13.898a3.264 3.264 0 0 1-3.15-2.442l-.638-2.43a3.303 3.303 0 0 1-.08-1.285a3.308 3.308 0 0 1-.658-1.247l-1.435-4.687a2.251 2.251 0 0 1-.089-.444L4.116 5.718c-.484-1.743.58-3.51 2.3-3.955l2.464-.651a3.243 3.243 0 0 1 3.188.894c1.348-.124 2.494.833 2.788 2.041l1.066 4.282l.003.01c.21.888-.011 1.763-.59 2.415a2.82 2.82 0 0 1-.396.367l.51 1.879H21.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5.236Zm-5.289 7h.008l.31 1.039l.001.003a1.287 1.287 0 0 0 .308.56c.233.249.56.398.915.398h12.27A1.22 1.22 0 0 0 26 23.772v-3.544A1.22 1.22 0 0 0 24.788 19h-9.796a1.18 1.18 0 0 0-.036-.184L14.19 16H11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.877l-.827-3.043h-.003L11.028 4.34l-.002.001l-.118-.434a1.231 1.231 0 0 0-1.51-.864L6.92 3.7a1.207 1.207 0 0 0-.876 1.489l3.802 14a.248.248 0 0 0 .003.135L10.975 23Zm1.068 2.95a1.3 1.3 0 0 0 .001.67l.638 2.431c.148.56.647.949 1.216.949h10.896C25.46 30 26 29.45 26 28.78v-2.55c0-.187-.04-.364-.114-.523a2.189 2.189 0 0 1-1.098.293H12.517a2.25 2.25 0 0 1-.474-.05Z"></path>
                  </g>
                  <defs>
                    <clipPath id="fluentEmojiHighContrastSeat0">
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              {item.seat}
            </span>
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 text-sm mb-3">
            <div className="bg-green-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 32 32"
                className=""
              >
                <g fill="none">
                  <g
                    fill="currentColor"
                    clipPath="url(#fluentEmojiHighContrastSeat0)"
                  >
                    <path d="M13.178 27H25v1.78c0 .13-.105.22-.206.22H13.898a.265.265 0 0 1-.249-.204L13.178 27Z"></path>
                    <path d="m16.264 16l.271 1h8.253C26.587 17 28 18.469 28 20.228v3.544c0 .433-.086.848-.241 1.229c.155.381.241.797.241 1.229v2.55c0 1.748-1.409 3.22-3.206 3.22H13.898a3.264 3.264 0 0 1-3.15-2.442l-.638-2.43a3.303 3.303 0 0 1-.08-1.285a3.308 3.308 0 0 1-.658-1.247l-1.435-4.687a2.251 2.251 0 0 1-.089-.444L4.116 5.718c-.484-1.743.58-3.51 2.3-3.955l2.464-.651a3.243 3.243 0 0 1 3.188.894c1.348-.124 2.494.833 2.788 2.041l1.066 4.282l.003.01c.21.888-.011 1.763-.59 2.415a2.82 2.82 0 0 1-.396.367l.51 1.879H21.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5.236Zm-5.289 7h.008l.31 1.039l.001.003a1.287 1.287 0 0 0 .308.56c.233.249.56.398.915.398h12.27A1.22 1.22 0 0 0 26 23.772v-3.544A1.22 1.22 0 0 0 24.788 19h-9.796a1.18 1.18 0 0 0-.036-.184L14.19 16H11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.877l-.827-3.043h-.003L11.028 4.34l-.002.001l-.118-.434a1.231 1.231 0 0 0-1.51-.864L6.92 3.7a1.207 1.207 0 0 0-.876 1.489l3.802 14a.248.248 0 0 0 .003.135L10.975 23Zm1.068 2.95a1.3 1.3 0 0 0 .001.67l.638 2.431c.148.56.647.949 1.216.949h10.896C25.46 30 26 29.45 26 28.78v-2.55c0-.187-.04-.364-.114-.523a2.189 2.189 0 0 1-1.098.293H12.517a2.25 2.25 0 0 1-.474-.05Z"></path>
                  </g>
                  <defs>
                    <clipPath id="fluentEmojiHighContrastSeat0">
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            Reserved Seat
          </div>
          <div className="flex items-center gap-1 text-sm mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 32 32"
              className="m-2"
            >
              <g fill="none">
                <g
                  fill="currentColor"
                  clipPath="url(#fluentEmojiHighContrastSeat0)"
                >
                  <path d="M13.178 27H25v1.78c0 .13-.105.22-.206.22H13.898a.265.265 0 0 1-.249-.204L13.178 27Z"></path>
                  <path d="m16.264 16l.271 1h8.253C26.587 17 28 18.469 28 20.228v3.544c0 .433-.086.848-.241 1.229c.155.381.241.797.241 1.229v2.55c0 1.748-1.409 3.22-3.206 3.22H13.898a3.264 3.264 0 0 1-3.15-2.442l-.638-2.43a3.303 3.303 0 0 1-.08-1.285a3.308 3.308 0 0 1-.658-1.247l-1.435-4.687a2.251 2.251 0 0 1-.089-.444L4.116 5.718c-.484-1.743.58-3.51 2.3-3.955l2.464-.651a3.243 3.243 0 0 1 3.188.894c1.348-.124 2.494.833 2.788 2.041l1.066 4.282l.003.01c.21.888-.011 1.763-.59 2.415a2.82 2.82 0 0 1-.396.367l.51 1.879H21.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5.236Zm-5.289 7h.008l.31 1.039l.001.003a1.287 1.287 0 0 0 .308.56c.233.249.56.398.915.398h12.27A1.22 1.22 0 0 0 26 23.772v-3.544A1.22 1.22 0 0 0 24.788 19h-9.796a1.18 1.18 0 0 0-.036-.184L14.19 16H11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.877l-.827-3.043h-.003L11.028 4.34l-.002.001l-.118-.434a1.231 1.231 0 0 0-1.51-.864L6.92 3.7a1.207 1.207 0 0 0-.876 1.489l3.802 14a.248.248 0 0 0 .003.135L10.975 23Zm1.068 2.95a1.3 1.3 0 0 0 .001.67l.638 2.431c.148.56.647.949 1.216.949h10.896C25.46 30 26 29.45 26 28.78v-2.55c0-.187-.04-.364-.114-.523a2.189 2.189 0 0 1-1.098.293H12.517a2.25 2.25 0 0 1-.474-.05Z"></path>
                </g>
                <defs>
                  <clipPath id="fluentEmojiHighContrastSeat0">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                  </clipPath>
                </defs>
              </g>
            </svg>
            Free Seat
          </div>
          <div className="flex items-center gap-1 text-sm mb-12 ">
            <div className="bg-green-300 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 32 32"
                className=""
              >
                <g fill="none">
                  <g
                    fill="currentColor"
                    clipPath="url(#fluentEmojiHighContrastSeat0)"
                  >
                    <path d="M13.178 27H25v1.78c0 .13-.105.22-.206.22H13.898a.265.265 0 0 1-.249-.204L13.178 27Z"></path>
                    <path d="m16.264 16l.271 1h8.253C26.587 17 28 18.469 28 20.228v3.544c0 .433-.086.848-.241 1.229c.155.381.241.797.241 1.229v2.55c0 1.748-1.409 3.22-3.206 3.22H13.898a3.264 3.264 0 0 1-3.15-2.442l-.638-2.43a3.303 3.303 0 0 1-.08-1.285a3.308 3.308 0 0 1-.658-1.247l-1.435-4.687a2.251 2.251 0 0 1-.089-.444L4.116 5.718c-.484-1.743.58-3.51 2.3-3.955l2.464-.651a3.243 3.243 0 0 1 3.188.894c1.348-.124 2.494.833 2.788 2.041l1.066 4.282l.003.01c.21.888-.011 1.763-.59 2.415a2.82 2.82 0 0 1-.396.367l.51 1.879H21.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5.236Zm-5.289 7h.008l.31 1.039l.001.003a1.287 1.287 0 0 0 .308.56c.233.249.56.398.915.398h12.27A1.22 1.22 0 0 0 26 23.772v-3.544A1.22 1.22 0 0 0 24.788 19h-9.796a1.18 1.18 0 0 0-.036-.184L14.19 16H11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.877l-.827-3.043h-.003L11.028 4.34l-.002.001l-.118-.434a1.231 1.231 0 0 0-1.51-.864L6.92 3.7a1.207 1.207 0 0 0-.876 1.489l3.802 14a.248.248 0 0 0 .003.135L10.975 23Zm1.068 2.95a1.3 1.3 0 0 0 .001.67l.638 2.431c.148.56.647.949 1.216.949h10.896C25.46 30 26 29.45 26 28.78v-2.55c0-.187-.04-.364-.114-.523a2.189 2.189 0 0 1-1.098.293H12.517a2.25 2.25 0 0 1-.474-.05Z"></path>
                  </g>
                  <defs>
                    <clipPath id="fluentEmojiHighContrastSeat0">
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            Selected Seat
          </div>
        </div>
        <div className="w-full lg:w-[35%] border p-4">
          <div className="flex flex-wrap gap-1 mb-10 font-medium">
            Selected Seats :
            {seats?.map((i) => {
              return !i.isSubmited && i.reserved ? (
                <span
                  key={i.id}
                  className="p-3 border rounded-lg mx-1 bg-green-300"
                >
                  {i.seat}
                </span>
              ) : null;
            })}
          </div>
          <div className=" mb-8 font-semibold">Total Fee: 360 $</div>
          <div className="flex flex-wrap w-full">
            <button
              className="mt-8 bg-body-text hover:bg-main-text text-white py-1.5 px-10 rounded-lg"
              onClick={() => {
                getTicketInfo();
              }}
            >
              new
            </button>
            <button
              onClick={() => reservedTicket(selectedSeats)}
              className="mt-8 bg-primary hover:bg-secondary text-white py-1.5 px-10 rounded-lg ml-auto"
            >
              Save And Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedSeat;
