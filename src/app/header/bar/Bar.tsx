import React from "react";
import Link from "next/link";
import Menu from "@/app/menu/Menu";

export default function Bar() {
  return (
    <div className="shad cursor-pointer z-50  fixed w-screen h-16 lolo text-yellow-600 font-bold  flex items-center justify-between">
      <div>
        <Menu />
      </div>
      <div className="flex justify-center items-center gap-10 pr-[50px] text-xl">
        <h2 className="pr-[400px] text-3xl">JEWELRY WORLD</h2>
        <Link href={"/"} className="hover:text-yellow-300 focus:text-blue-900">
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:text-yellow-300 focus:text-blue-900"
        >
          About
        </Link>
        <Link
          href={"/logup"}
          className="hover:text-yellow-300 focus:text-blue-900"
        >
          Register
        </Link>
        <Link
          href={"/login"}
          className="hover:text-yellow-300 focus:text-blue-900"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
