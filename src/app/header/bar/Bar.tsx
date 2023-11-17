import React from "react";
import Link from "next/link";
import Menu from "@/app/menu/Menu";

export default function Bar() {
  return (
    <div className="shad cursor-pointer z-50  fixed w-screen h-16 2xl:h-20 lolo text-yellow-600 font-bold  flex items-center justify-between">
      <div className="flex">
        <Menu />
        <div>
          <h2 className="pl-20 text-3xl 2xl:text-4xl">JEWELRY WORLD</h2>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 pr-[50px] text-xl">
        <Link
          href={"/"}
          className="hover:text-yellow-300 focus:text-blue-900 2xl:text-2xl"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:text-yellow-300 focus:text-blue-900 2xl:text-2xl"
        >
          About
        </Link>
        <Link
          href={"/logup"}
          className="hover:text-yellow-300 2xl:text-2xl focus:text-blue-900"
        >
          Register
        </Link>
        <Link
          href={"/login"}
          className="hover:text-yellow-300 2xl:text-2xl focus:text-blue-900"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
