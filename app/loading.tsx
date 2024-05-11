import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image width={200} height={200} alt="bus" src={"/img/loading-bus.gif"} />
    </div>
  );
}

export default Loading;
