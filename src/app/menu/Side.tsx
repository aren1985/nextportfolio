"use client";

import Link from "next/link";

interface Closik {
  setOpen: any;
}

export default function Side({ setOpen }: Closik) {
  return (
    <div>
      <div className="shadsid peer-checked:translate-x-0 fixed mr-0 inset-0 w-52 bg-black  translate-x-[-100] duration-500 z-50">
        <div
          className="h-8 w-8 text-center text-2xl absolute -right-3 mt-4 border-2  border-yellow-700 rounded-full border-spacing-4"
          onClick={() => setOpen(false)}
        >
          X
        </div>
        <div
          onClick={() => setOpen(false)}
          className="text-yellow-700 font-bold  flex flex-col mt-24 justify-center items-center gap-5 text-xl"
        >
          <Link href={"/"} className="hover:bg-yellow-300 w-[100%] text-center">
            Home
          </Link>
          <Link
            href={"/about"}
            className="hover:bg-yellow-300 w-[100%] text-center"
          >
            About
          </Link>
          <Link
            href={"/logup"}
            className="hover:bg-yellow-300 w-[100%]  text-center"
          >
            Register
          </Link>
          <Link
            href={"/login"}
            className="hover:bg-yellow-300 w-[100%] text-center"
          >
            LogIn
          </Link>
          <Link
            href={"/contact"}
            className="hover:bg-yellow-300 w-[100%] text-center"
          >
            Contacts
          </Link>
          <Link
            href={"/help"}
            className="hover:bg-yellow-300 w-[100%] text-center"
          >
            Help
          </Link>
          <button className="border-4 mt-[50px] border-blue-700 text-blue-600 hover:border-yellow-300 w-[80%] text-center">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
