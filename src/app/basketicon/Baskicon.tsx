import React from "react";
import { SlBasket } from "react-icons/sl";

interface Open {
  open: any;
  cart: any;
}

export default function Baskicon({ open, cart }: Open) {
  return (
    <div
      className="cursor-pointer  p-5 top-[100px] z-10   duration-500 fixed "
      onClick={open}
    >
      <div className="absolute md:ml-[1000px] lg:ml-[1050px] 2xl:ml-[1270px] xl:ml-[1100px] text-yellow-600 ">
        <SlBasket size={64} />
        <span className="absolute top-6 text-white left-9 text-sm">
          {cart.length}
        </span>
      </div>
    </div>
  );
}
