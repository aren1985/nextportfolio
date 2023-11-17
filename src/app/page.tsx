"use client";

import Globmenu from "./main/globmenu/Globmenu";
import AllThings from "./alllists/AllThings";
import Baskicon from "@/app/basketicon/Baskicon";
import BasketPage from "./basket/BasketPage";
import Carousel from "./carousel/Carousel";
import Globus from "./globus/Globus";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any>([]);
  const [show, setShow] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);

  const close = () => {
    setShow(false);
  };

  const open = () => {
    setShow((prev) => !prev);
  };

  const add = (prod: any) => {
    let isPresent: boolean = false;
    cart.forEach((pro: any) => {
      if (prod.id === pro.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, prod]);
  };

  return (
    <main className="flex flex-col justify-center items-center ">
      {warning && (
        <div className="left-[43%] top-[200px]  rounded  p-3 font-bold bg-yellow-500 text-blue-700 fixed z-50 ">
          The gold is chosen already
        </div>
      )}
      <div>
        <div className="h-[200px] ">
          <Carousel />
        </div>
        <div>
          <Baskicon open={open} cart={cart} />
        </div>

        {show && <BasketPage close={close} cart={cart} setCart={setCart} />}

        <Globmenu />

        <h3 className="text-blue-600 2xl:text-5xl 2xl:-ml-24 xujuj absolute mt-10 font-bold ">
          Search and choose your jewelry from our elegant jewelry list
        </h3>

        <div className="flex gap-10">
          <AllThings add={add} />
          <Globus />
        </div>
      </div>
    </main>
  );
}
