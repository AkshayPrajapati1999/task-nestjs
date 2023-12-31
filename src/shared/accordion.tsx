"use client";

import Image from "next/image";

import { useState } from "react";

export default function Accordion() {
  const [expandedItem, setExpandedItem] = useState(0);

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 0 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(0)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 0 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 0 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 1 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(1)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 1 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 1 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 2 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(2)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 2 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 2 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 3 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(3)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 3 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 3 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 4 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(4)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 4 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 4 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className=" rounded p-2 pb-2 ">
          <div className="relative h-[45px]">
            <Image
              className={`absolute w-full h-full inset-0 ${
                expandedItem === 5 ? "" : "hidden"
              }`}
              height="120"
              width="100"
              alt="avtar"
              src="/banner.png"
            />

            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                Lorem ipsum dolor sit amet
              </p>
              <div>
                <button
                  className="w-full text-left text-white font-semibold focus:outline-none"
                  onClick={() => toggleItem(5)}
                >
                  <Image
                    height="20"
                    width="20"
                    alt="avtar"
                    src={expandedItem === 5 ? "minus.svg" : "plus.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1237px] px-5 ">
            <p
              className={`${
                expandedItem === 5 ? "" : "hidden"
              } flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
