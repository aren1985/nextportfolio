import React from "react";
import { SlBasket } from "react-icons/sl";

interface Open {
  open: any;
  cart: any;
}

export default function Baskicon({ open, cart }: Open) {
  return (
    <div
      className="cursor-pointer  p-5 left-[1150px]  top-[100px] z-10  hover:scale-125 duration-500 fixed bg-transparent"
      onClick={open}
    >
      <div className="relative text-yellow-600">
        <SlBasket size={64} />
        <span className="absolute top-6 text-white left-9 text-sm">
          {cart.length}
        </span>
      </div>
    </div>
  );
}
