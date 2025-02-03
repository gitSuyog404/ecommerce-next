import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <div className="h-screen w-full mt-[3rem] flex  gap-[3rem] max-lg:gap-[1rem]">
        <div className="relative w-[600px] max-sm:hidden     h-[600px]">
          <Image
            src="/side-img.png"
            alt="side image for signup page"
            fill
            sizes="(max-width: 640px) 0px, 600px "
            className="object-contain object-left"
            priority={true}
          />
        </div>
        <div className="mt-[7rem] mx-[8rem] max-sm:mx-[1.8rem] max-sm:ml-[3.7rem] max-sm:mt-[2rem] max-lg:mx-[1rem] max-xl:mx-[1.8rem]  ">
          <div className="flex flex-col gap-3 mb-[2.5rem] max-lg:mb-[1.8rem]">
            <h1 className="text-[2.3rem] max-lg:text-[1.8rem] font-semibold text-nowrap ">
              Create an Account
            </h1>
            <p className=" font-semibold">Enter your details below</p>
          </div>

          <div>
            <form className="flex flex-col gap-3 pb-8">
              <input
                type="text"
                placeholder="Name"
                className=" outline-none border-b-2 border-gray-300 w-full py-2"
              />

              <input
                type="text"
                placeholder="Email"
                className=" outline-none border-b-2 border-gray-300 w-full py-2"
              />

              <input
                type="password"
                placeholder="Password"
                className=" outline-none border-b-2 border-gray-300 w-full py-2 mb-7"
              />

              <button className="bg-red-600 text-white px-3 py-3 rounded-sm transition-transform duration-200 hover:scale-105 ease-in-out">
                Create Account
              </button>
            </form>
            <div className="flex items-center justify-center">
              <p>
                Already have an account?{" "}
                <span>
                  <Link
                    href="/sign-in"
                    className="underline hover:text-gray-400"
                  >
                    Log in
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

export default SignUpPage;
