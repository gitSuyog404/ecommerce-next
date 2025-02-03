import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className=" py-10 px-[4rem]  bg-black text-white flex justify-center gap-[6rem] max-sm:flex-col max-sm:px-[2rem] max-sm:gap-[3rem] max-sm:py-4 max-lg:gap-[1.7rem] max-xl:gap-[2rem] ">
        <div className=" flex flex-col gap-3">
          <h1>Exclusive</h1>
          <h2>Subscribe</h2>
          <p className="text-sm">Get 10% off your first order</p>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-black rounded-sm   px-3 py-2 border border-white  focus:border-white   focus:outline-none"
            />

            <button>
              <div className="relative right-10 h-5 w-5   ">
                <Image
                  src="/send.png"
                  alt="send icon"
                  fill
                  sizes="24px"
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1>Support</h1>
          <p className="max-w-[180px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-3 md:hidden lg:flex ">
          <h1>Account</h1>
          <Link href="">My Account</Link>
          <Link href="" className="text-nowrap">
            Login / Register
          </Link>
          <Link href="">Cart</Link>
          <Link href="">WishList</Link>
          <Link href="">Shop</Link>
        </div>

        <div className="flex flex-col gap-3 ">
          <h1 className="">Quick Link</h1>
          <Link href="" className="text-nowrap">
            Privacy Policy
          </Link>
          <Link href="">Terms Of Use</Link>
          <Link href="">FAQ</Link>
          <Link href="">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h1>Download App</h1>
          <p className="text-gray-300 ">Save $3 with App New User Only</p>
          <div className="flex  gap-2">
            <div className="relative w-[80px] h-[90px]">
              <Image src="/qrcode.png" alt="qr code img" fill sizes="80px" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative w-[120px] h-[40px]">
                <Image
                  src="/google-play.png"
                  alt="play store img"
                  fill
                  sizes="120px"
                />
              </div>

              <div className="relative w-[120px] h-[40px]">
                <Image
                  src="/app-store.png"
                  alt="play store img"
                  fill
                  sizes="120px"
                />
              </div>
            </div>
          </div>

          <div className=" mt-3 flex  gap-[2.1rem]">
            <Link href="">
              <FaFacebookF className="size-5 transition-transform duration-200 hover:scale-110 ease-in-out hover:fill-blue-500" />
            </Link>

            <Link href="">
              <FaTwitter className="size-5 transition-transform duration-200 hover:scale-110 ease-in-out hover:fill-blue-500" />
            </Link>

            <Link href="">
              <FaInstagram className="size-5 transition-transform duration-200 hover:scale-110 ease-in-out hover:fill-pink-600" />
            </Link>

            <Link href="">
              <RiLinkedinLine className="size-5 transition-transform duration-200 hover:scale-110 ease-in-out hover:fill-blue-500" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
