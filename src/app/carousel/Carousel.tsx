import React from "react";

export default function Carousel() {
  return (
    <div className=" h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="dvoik relative w-[100px] h-[100px]">
        <span className="spo spo1 ">
          <img src="/necklaceimages/necklace2.jpeg" alt="ll" className="nkar" />
        </span>
        <span className="spo spo2">
          <img src="/images/ring13.webp" alt="ll" className="nkar" />
        </span>
        <span className="spo spo3">
          <img src="/images/ring4.jpg" alt="ll" className="nkar" />
        </span>
        <span className="spo spo4">
          <img src="/images/ring8.jpg" alt="ll" className="nkar" />
        </span>
        <span className="spo spo5">
          <img src="/braceletimages/bracelet5.jpeg" alt="ll" className="nkar" />
        </span>
        <span className="spo spo6">
          <img src="/watchimages/watch3.jpg" alt="ll" className="nkar" />
        </span>
        <span className="spo spo7">
          <img
            src="/whiteringimages/whitering12.jpeg"
            alt="ll"
            className="nkar"
          />
        </span>
        <span className="spo spo8">
          <img src="/images/ring1.webp" alt="ll" className="nkar" />
        </span>
      </div>
    </div>
  );
}
