import React from "react";
import { SlBasket } from "react-icons/sl";

interface Open {
  open: any;
  cart: any;
}

export default function Baskicon({ open, cart }: Open) {
  return (
    <div
      onClick={open}
      className="cursor-pointer z-10 right-[40px] top-[120px] duration-500 fixed  text-yellow-600"
    >
      <SlBasket size={64} />

      <span className="absolute top-6 text-white left-9 text-sm">
        {cart.length}
      </span>
    </div>
  );
}
