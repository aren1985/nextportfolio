"use client";

import React from "react";
import { useState } from "react";

export default function Page() {
  const [pasvalue, setPasvalue] = useState<any>();
  const [value, setValue] = useState<any>();
  const [text, setText] = useState<React.JSX.Element>();

  const error = <p className="text-red-500">wrong email or password</p>;
  const success = <p className="text-green-500">success</p>;

  const send = () => {
    if (!value || !pasvalue) {
      setText(error);
    } else {
      setText(success);
    }

    setValue("");
    setPasvalue("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-[450px]">
      <div className="absolute rounded   w-1/3 h-[300px] top-[120px] border-4 border-blue-800 flex justify-center items-center">
        <div>
          <form
            action="post"
            className=" flex flex-col gap-5 top-[20px] "
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="email"
              value={value}
              className="bg-white px-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="password"
              value={pasvalue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasvalue(e.target.value)
              }
              className="bg-white px-2"
            />
            <div className="text-white text-sm">{text}</div>
            <button
              onClick={send}
              className="text-blue-500 border-2 font-bold  border-blue-900 border-spacing-2"
            >
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
