"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } bg-black text-white flex items-center justify-center p-1 max-sm:hidden`}
      >
        <div className="flex items-center justify-center gap-2 flex-1 ">
          <h1>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <Link href="" className="underline">
            ShopNow
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <select className="bg-black text-white  rounded-md p-2 focus:outline items-end  ">
            <option value="english" className="">
              English
            </option>
          </select>
          <button onClick={handleClose}>
            <IoClose className="size-5 transition-transform duration-200 ease-in-out hover:scale-110" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
