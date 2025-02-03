"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-between  items-center mt-8 mb-4 mx-[6rem] max-sm:mx-[2rem] max-xl:mx-[3rem] max-lg:mx-[2rem] gap-5">
        <div>
          <Link href="/" className="font-semibold text-3xl">
            Exclusive
          </Link>
        </div>

        <div className="hidden lg:flex gap-8 font-semibold text-lg">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "border-b-2 border-gray-300" : ""
            }pb-1`}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "border-b-2 border-gray-300" : ""
            }pb-1`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "border-b-2 border-gray-300" : ""
            }pb-1`}
          >
            About
          </Link>
          <Link
            href="/sign-up"
            className={`${
              pathname === "/sign-up" ? "border-b-2 border-gray-300" : ""
            }pb-1 text-nowrap`}
          >
            Sign Up
          </Link>
        </div>

        <div className="flex gap-2">
          <div className=" hidden md:flex  items-center max-lg:mr-[6rem] ">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-6 py-2 rounded-sm bg-[#F5F5F5] outline-none"
            />
            <IoSearchOutline className="relative right-6  size-5 transition-transform duration-200 hover:scale-110 cursor-pointer ease-in-out    " />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="">
              <IoIosHeartEmpty className="size-6 transition-transform duration-200 hover:scale-110 ease-in-out" />
            </Link>

            <Link href="">
              <IoCartOutline className="size-6 transition-transform duration-200 hover:scale-110 ease-in-out" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col ml-8  gap-4 font-semibold text-lg pb-4">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "border-b-2 border-gray-300 w-[5.5rem]" : ""
            } pb-1`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "border-b-2 border-gray-300 w-[5.5rem]"
                : ""
            } pb-1`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "border-b-2 border-gray-300 w-[5.5rem]"
                : ""
            } pb-1`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/sign-up"
            className={`${
              pathname === "/sign-up"
                ? "border-b-2 border-gray-300 w-[5.5rem]"
                : ""
            } pb-1 text-nowrap`}
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>

          <div className="flex max-lg:flex-col gap-2">
            <div className="flex   items-center ">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-6 py-2 rounded-sm bg-[#F5F5F5] outline-none"
              />
              <IoSearchOutline className="relative right-6  size-5 transition-transform duration-200 hover:scale-110 cursor-pointer ease-in-out    " />
            </div>

            <div className="flex items-center  gap-3">
              <Link href="">
                <IoIosHeartEmpty className="size-6 transition-transform duration-200 hover:scale-110 ease-in-out" />
              </Link>

              <Link href="">
                <IoCartOutline className="size-6 transition-transform duration-200 hover:scale-110 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-gray-300 w-full"></div>
    </>
  );
};

export default Navbar;
