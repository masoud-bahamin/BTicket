"use client";

import { useEffect } from "react";

function CreateTicket() {
  const createTicket = async () => {
    const res = await fetch("/api/bus/ticket", {
      method: "POST",
      body: JSON.stringify({
        title: "VIP BUS",
        time: "21:00",
        seatType: "2+1",
        price: 680,
        from: "ankara",
        to: "izmir",
      }),
    });
    console.log(res);
  };
  const reservedTicket = async () => {
    const res = await fetch("/api/reserved", {
      method: "POST",
      body: JSON.stringify({
        seat: 16,
        userId: "663602c1d3ca103d4667d937",
        busId: "66361c8a66cabce3fc1beda5",
      }),
    });
    console.log(res);
  };

  return (
    <div>
      <button className="m-8 border p-3" onClick={createTicket}>
        Create Ticket
      </button>
      <button className="m-8 border p-3" onClick={reservedTicket}>
        reserve Ticket
      </button>
    </div>
  );
}

export default CreateTicket;
