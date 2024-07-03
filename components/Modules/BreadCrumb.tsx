import React from "react";

export default function BreadCrumb({ title }: { title: string }) {
  return (
    <div className="bg-[url(/img/baner.jpg)] text-white bg-cover bg-center">
      <div className="bg-[rgba(0,0,0,.6)]">
        <div className="container h-96 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold font-Poetsen-One mb-5">{title}</h2>
          <div className="font-semibold flex gap-2">
            <span>HOME</span>
            <span>{">"}</span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
