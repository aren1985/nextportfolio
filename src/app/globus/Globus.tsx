import React from "react";

export default function Globus() {
  return (
    <div className="text-white h-[700px] left-[50px] mt-[240px] w-[300px]  flex flex-col  gap-5 items-center">
      <div>
        <img src="/vit/globus.jpg" alt="globus" className="h-62 w-62 " />
      </div>
      <p className="mt-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 text-3xl font-bold ">
        JEWELRY WORLD
      </p>
      <p className="text-blue-500 text-3xl font-bold mt-8 font-serif">
        Order from anywhere in the world and we will deliver
      </p>
    </div>
  );
}
