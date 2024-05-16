"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import Image from "next/image";

export default function ReviewSlider() {
  return (
    <>
      <Swiper
        scrollbar={{}}
        modules={[Scrollbar]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <div className="flex gap-4 mb-6">
            <Image
              className="rounded-full"
              src="/img/profile.jpeg"
              width={50}
              height={50}
              alt=""
            />
            <div>
              <p className="font-semibold text-lg">Masoud Bahamin</p>
              <p className="text-body-text">UX / UI Designer</p>
            </div>
          </div>
          <p className="text-lg leading-8 pb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia
            eos temporibus reprehenderit ut asperiores deleniti id dolorem totam
            illo! Neque itaque aliquam, ab ea perspiciatis eum expedita nulla
            quis?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 mb-6">
            <Image
              className="rounded-full"
              src="/img/profile.jpeg"
              width={50}
              height={50}
              alt=""
            />
            <div>
              <p className="font-semibold text-lg">David Jons</p>
              <p className="text-body-text">UX / UI Designer</p>
            </div>
          </div>
          <p className="text-lg leading-8 pb-12">
            amet consectetur adipisicing elit. Hic quia eos temporibus
            reprehenderit ut asperiores deleniti id dolorem totam illo! Neque
            itaque aliquam, ab ea perspiciatis eum expedita nulla
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 mb-6">
            <Image
              className="rounded-full"
              src="/img/profile.jpeg"
              width={50}
              height={50}
              alt=""
            />
            <div>
              <p className="font-semibold text-lg">Mike Berrat</p>
              <p className="text-body-text">UX / UI Designer</p>
            </div>
          </div>
          <p className="text-lg leading-8 pb-12">
            Hic quia eos temporibus reprehenderit ut asperiores deleniti id
            dolorem totam illo! Neque itaque aliquam, ab ea perspiciatis eum
            expedita nulla
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 mb-6">
            <Image
              className="rounded-full"
              src="/img/profile.jpeg"
              width={50}
              height={50}
              alt=""
            />
            <div>
              <p className="font-semibold text-lg">Rayan Divs</p>
              <p className="text-body-text">UX / UI Designer</p>
            </div>
          </div>
          <p className="text-lg leading-8 pb-12">
            sit amet consectetur adipisicing elit. Hic quia eos temporibus
            reprehenderit ut asperiores deleniti id dolorem totam illo! Neque
            itaque aliquam, ab ea perspiciatis eum expedita nulla quis?
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
