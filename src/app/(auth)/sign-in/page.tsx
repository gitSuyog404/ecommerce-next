import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const SignInPage = () => {
  return (
    <>
      <div className="h-screen w-full mt-[3rem] flex  gap-[3rem] max-lg:gap-[1rem]">
        <div className="relative w-[600px] max-sm:hidden   h-[600px]">
          <Image
            src="/side-img.png"
            alt="side image for signup page"
            fill
            sizes="(max-width: 640px) 0px, 600px "
            className="object-contain object-left"
            priority={true}
          />
        </div>
        <div className="mt-[7rem] mx-[8rem] max-sm:mx-[1.8rem] max-sm:ml-[3.7rem] max-sm:mt-[2rem] max-lg:mt-[7.1rem] max-lg:mx-[1rem] max-xl:mx-[1.8rem] max-xl:mt-[4rem]  ">
          <div className="flex flex-col gap-3 mb-[1.5rem] max-lg:mb-[0.5rem]">
            <h1 className="text-[2.3rem] max-lg:text-[1.8rem] font-semibold text-nowrap ">
              Log in to Exclusive
            </h1>
            <p className=" font-semibold">Enter your details below</p>
          </div>

          <div>
            <form className="flex flex-col gap-3 mb-6 max-lg:mb-3 ">
              <input
                type="text"
                placeholder="Email"
                className=" outline-none border-b-2 border-gray-300 w-full py-2"
              />

              <input
                type="password"
                placeholder="Password"
                className=" outline-none border-b-2 border-gray-300 w-full py-2 mb-5 max-lg:mb-1"
              />

              <button className="bg-red-600 text-white px-3 py-3 rounded-sm transition-transform duration-200 hover:scale-105 ease-in-out mb-2 max-lg:mb-[0.5px] max-xl:mb-1">
                Sign In
              </button>

              <button className="  flex items-center justify-center border px-3 py-3 rounded-sm transition-transform duration-200 hover:scale-105 ease-in-out max-xl:mb-1 max-lg:mb-[0.5px] mb-2">
                Sign in with Google <FcGoogle className="size-5" />
              </button>

              <button className=" bg-black flex items-center justify-center text-white px-3 py-3 rounded-sm transition-transform duration-200 hover:scale-105 ease-in-out">
                Sign in with Github <FaGithub className="size-5" />
              </button>
            </form>
            <div className="flex items-center justify-center">
              <p>
                Don't have an account?{" "}
                <span>
                  <Link
                    href="/sign-up"
                    className="underline hover:text-gray-400"
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
