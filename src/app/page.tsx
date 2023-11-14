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
    <main>
      {warning && (
        <div className="  rounded left-[43%] p-3 font-bold bg-yellow-500 text-blue-700 fixed mt-[120px] z-50 text-center">
          The gold is chosen already
        </div>
      )}
      <div>
        <div className="relative -top-[100px] h-[250px] ">
          <Carousel />
        </div>
        <Baskicon open={open} cart={cart} />

        {show && <BasketPage close={close} cart={cart} setCart={setCart} />}

        <Globmenu />
        <h3 className="text-blue-600 absolute xujuj pt-10 left-[50px] font-bold ">
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
