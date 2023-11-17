"use client";

import React from "react";
import { useState } from "react";

interface Close {
  close: any;
  cart: any;
  setCart: any;
}

export default function BasketPage({ close, cart, setCart }: Close) {
  const [sac, setSac] = useState<boolean>(false);
  const del = (id: number) => {
    const delo = cart.filter((elem: any) => elem.id !== id);
    setCart(delo);
  };

  const plus = (id: number) => {
    const upDatedQnty = [...cart];
    const indo = upDatedQnty.findIndex((q) => q.id === id);
    if (upDatedQnty[indo].qnty < 5) {
      ++upDatedQnty[indo].qnty;
    }
    setCart(upDatedQnty);
  };
  const minus = (id: number) => {
    const upDatedQnty = [...cart];
    const indo = upDatedQnty.findIndex((q) => q.id === id);
    if (upDatedQnty[indo].qnty > 1) {
      --upDatedQnty[indo].qnty;
    }
    setCart(upDatedQnty);
  };

  const buy = () => {
    setCart([]);

    setSac(true);
    setTimeout(() => {
      setSac(false);
    }, 2000);
  };

  let GranttotalPrice: number = 0;
  return (
    <div className="pl-[900px] 2xl:pl-[1000px] fixed z-20 text-white flex flex-col top-6 2xl:top-8">
      <div className="absolute  text-center  mt-10 overflow-auto text-white h-[100vh] w-[350px]  border-2 border-blue-500 ">
        <button
          onClick={close}
          className="text-white h-12 text-lg font-bold border-2 border-blue-900 w-full"
        >
          Close
        </button>
        <div>
          {!cart.length ? (
            <p className="text-white m-16 xl font-bold">basket is empty</p>
          ) : (
            cart.map((car: any) => {
              GranttotalPrice += car.qnty * car.price;
              return (
                <div key={car.id} className="flex flex-col items-center pt-8">
                  <img src={car.image} alt="golo" className="h-24 w-24 " />
                  <div>
                    <p>{car.category}</p>
                    <div>
                      <button className="m-1" onClick={() => minus(car.id)}>
                        -
                      </button>
                      <span>{car.qnty}</span>
                      <button className="m-1" onClick={() => plus(car.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <span>price={car.price}</span>
                  <span>totalprice:{car.price * car.qnty}</span>
                  <button
                    className="m-10 border-2 border-blue-500 rounded font-bold p-1"
                    onClick={() => del(car.id)}
                  >
                    remove
                  </button>
                </div>
              );
            })
          )}
        </div>
        {sac && (
          <div className="text-green-500 text-xl pb-5 font-bold">success</div>
        )}
        granttotalprice|{GranttotalPrice}$
        <div className="mt-5  w-full  h-46">
          <form
            action="post"
            className="flex flex-wrap gap-5 justify-center items-center pb-16"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="fill card"
              className="text-white bg-blue-600"
            />
            <button
              onClick={buy}
              className="w-full h-12 font-bold text-lg border border-blue-900"
            >
              Buy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
