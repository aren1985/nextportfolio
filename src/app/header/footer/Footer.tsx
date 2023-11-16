import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="h-[250px] cursor-pointer text-white font-bold pt-5 mt-10 flex justify-around gap-[50px]  futo w-full  bg-black ">
        <div className="flex flex-col gap-6">
          <p className="hover:underline mt-5 ml-[150px]"> CONTACTS</p>
          <div className="flex gap-5 mt-4">
            <div>
              <p className="flex gap-2 m-2">
                <img src="/vit/phon.png" alt="logo" className="h-5 w-5" />
                +37493230341
              </p>
              <p className="flex gap-2 m-2">
                <img src="/vit/wlogo.png" alt="logo" className="h-5 w-5" />
                +37493230341
              </p>
              <p className="flex gap-2 m-2">
                <img src="/vit/vvlogo.png" alt="logo" className="h-5 w-5" />
                +37493230341
              </p>
            </div>
            <div>
              <p className="flex gap-2 m-2">
                <img src="/vit/tg.png" alt="logo" className="h-5 w-5" />
                +37493230341
              </p>
              <p className="flex gap-2 m-2">
                <img src="/vit/em.jpeg" alt="logo" className="h-5 w-5" />
                arenh888@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <p className="hover:underline ">HELP</p>
          <p className="mt-5">We are ready to help you</p>
          <p>24/7</p>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <p className="hover:underline">ALWAYS</p>
          <p className="mt-5">You can trust us</p>
          <p>Your data is secure </p>
          <p>Your order will find you</p>
        </div>
      </div>
    </footer>
  );
}
