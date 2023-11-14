"use client";

import { FiMenu } from "react-icons/fi";
import Side from "./Side";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-yellow-600 hover:text-yellow-300 ml-5 ">
      <FiMenu size={30} onClick={() => setOpen(true)} />
      {open && <Side setOpen={setOpen} />}
    </div>
  );
}
