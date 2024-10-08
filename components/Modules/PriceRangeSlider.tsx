"use client";

import React, { useEffect, useState } from "react";

export default function PriceRangeSlider({
  min,
  max,
}: {
  min: number;
  max: number;
}) {
  const [firstInput, setFirstInput] = useState(min || 0);
  const [secondInput, setSecondInput] = useState(max || 14000);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(260); // max 260

  useEffect(() => {
    if (firstInput <= max && firstInput >= min) {
      let d = max - min;
      let vahed = 260 / d;
      setFirst(vahed * (firstInput - min));
    }

    if (secondInput <= max && secondInput >= min) {
      let d = max - min;
      let vahed = 260 / d;
      setSecond(vahed * (secondInput - min));
    }

    if (firstInput > secondInput) {
      setFirst(0);
      setSecond(260);
    }
  }, [firstInput, secondInput, min, max]);

  return (
    <>
      <div>
        <input
          min={min}
          max={max}
          onChange={(e) => {
            setFirstInput(e.target.valueAsNumber);
          }}
          className="border rounded-lg p-1 mr-1"
          type="number"
          name="num1"
          value={firstInput}
        />
        -
        <input
          min={min}
          max={max}
          onChange={(e) => {
            setSecondInput(e.target.valueAsNumber);
          }}
          className="border rounded-lg p-1 ml-1"
          type="number"
          name="num2"
          value={secondInput}
        />
      </div>
      <div className="flex w-64 m-auto items-center h-32 justify-center">
        <div className="py-1 relative min-w-full">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 rounded-full bg-teal-600 w-0"
              style={{ width: `${second - first}px`, left: first }}
            />
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
              unselectable="on"
              // onselectstart="return false;"
              style={{ left: first }}
            >
              <div className="relative -mt-2 w-1">
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  style={{ marginLeft: "-25px" }}
                >
                  <div className="relative shadow-md">
                    <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      $ {firstInput}
                    </div>
                    <svg
                      className="absolute text-black w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
              unselectable="on"
              // onselectstart="return false;"
              style={{ left: second }}
            >
              <div className="relative -mt-2 w-1">
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  style={{ marginLeft: "-25px" }}
                >
                  <div className="relative shadow-md">
                    <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      $ {secondInput}
                    </div>
                    <svg
                      className="absolute text-black w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
              $ {min || 0}
            </div>
            <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
              $ {max || 14000}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
