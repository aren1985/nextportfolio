import React from "react";

export default function page() {
  return (
    <div className=" flex flex-col justify-center items-center font-bold text-yellow-600 text-center w-full h-[600px] top-28">
      <h2 className="text-2xl">My contacts</h2>
      <div className="mt-14 flex flex-col gap-3 justify-center items-center">
        <div className="flex gap-2">
          <img src="/vit/phon.png" alt="log" className="h-8 w-8" />
          <p>+37493230341</p>
        </div>
        <div className="flex gap-2">
          <img src="/vit/wlogo.png" alt="log" className="h-8 w-8" />
          <p>+37493230341</p>
        </div>
        <div className="flex gap-2">
          <img src="/vit/vvlogo.png" alt="log" className="h-8 w-8" />
          <p>+37493230341</p>
        </div>
        <div className="flex gap-2 ">
          <img src="/vit/tg.png" alt="log" className="h-8 w-8" />
          <p>+37493230341</p>
        </div>
        <div className="flex gap-2 ml-[50px]">
          <img src="/vit/em.jpeg" alt="log" className="h-8 w-8" />
          <p>arenh888@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
