import React from "react";

export default function AboutPage() {
  return (
    <div className="text-yellow-600 font-bold text-xl 2xl:text-2xl w-full pl-20">
      <div className="mt-32">
        <p className=" text-center text-blue-600">ABOUT SITE AND ABOUT ME</p>
      </div>

      <div className="flex gap-[40px]  justify-center ">
        <div className="w-[400px] ">
          <p className="p-10 text-blue-600 text-center">ABOUT SITE</p>
          <p>
            This site was made by me as portfolio site, I desided dont use any
            packeges or librery components as it is portfolio and I wont to show
            what I can do, site was made with NEXTJS,TYPESCRIPT and TAILWIND CSS
            all components and detailes done with my hands
          </p>
        </div>
        <div className=" w-[400px] ">
          <p className="p-10 text-blue-600 text-center">ABOUT ME</p>
          <p className="text-center">I am frontEnd developer </p>
        </div>
        <div className="w-[400px]">
          <p className="p-10 text-blue-600 text-center">MY SKILLS</p>
          <ul className="text-center m-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>GIT GITHUP</li>
            <li>MATERIAL UI</li>
            <li>SHADCN</li>
            <li>TAILWIND CSS</li>
            <li>REACT</li>
            <li>NEXTJS</li>
            <li>TYPESCRIPT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
