import React from "react";

export default function Vitrin() {
  return (
    <div className="flex  w-full relative gap-24  mt-[180px] 2xl:mt-[260px] justify-center items-center font-bold ">
      <div className="w-26 hover:scale-105 duration-500 ">
        <img
          src="/vit/earringvit2.jpeg"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 text-center mt-6 ">earrings</h4>
      </div>

      <div className="w-26 hover:scale-105 duration-500">
        <img
          src="/images/ring11.webp"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 mt-6 text-center">rings</h4>
      </div>

      <div className="w-26 hover:scale-105 duration-500">
        <img
          src="/vit/braceletvit1.jpeg"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 mt-6 text-center">bracelets</h4>
      </div>

      <div className="w-26 hover:scale-105 duration-500">
        <img
          src="/vit/necklacevit3.jpeg"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 mt-6 text-center">necklaces</h4>
      </div>

      <div className="w-26 hover:scale-105 duration-500">
        <img
          src="/whiteringimages/whitering1.jpeg"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 mt-6 text-center">whitegolds</h4>
      </div>

      <div className="w-26 hover:scale-105 duration-500">
        <img
          src="/vit/watchvit1.jpeg"
          alt="gold"
          className=" h-14 w-14 2xl:h-18 2xl:w-18"
        />
        <h4 className="text-yellow-600 mt-6 text-center ">watches</h4>
      </div>
    </div>
  );
}
