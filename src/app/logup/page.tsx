"use client";

import React from "react";
import { useState } from "react";

export default function Logup<FC>() {
  const [email, setEmail] = useState<string | number>("");
  const [password, setPassword] = useState<any>();
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [card, setCard] = useState<number | string>();
  const [error, setError] = useState<React.JSX.Element>();

  const err = <p className="text-red-500">please fill in all the lines</p>;
  const succsess = <p className="text-green-500">success</p>;
  const confirm = () => {
    if (!name || !lastname || !email || !password || !card) {
      setError(err);
    } else {
      setError(succsess);
    }
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setCard("");
  };
  return (
    <div className="flex flex-col justify-center items-center pb-[600px]">
      <div className="absolute   w-1/3 h-[400px] top-[150px] border-4 border-blue-900 flex justify-center items-center">
        <form
          action="post"
          className=" flex flex-col gap-5 top-[20px]"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
        >
          <input
            className="bg-white px-1 "
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <input
            className="bg-white  px-1"
            type="text"
            name="lastName"
            placeholder="lastName"
            value={lastname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastname(e.target.value)
            }
          />
          <input
            className="bg-white  px-1"
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            className="bg-white  px-1"
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <input
            className="bg-white px-1"
            type="text"
            name="card"
            placeholder="card"
            value={card}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCard(e.target.value)
            }
          />
          <div className="text-white">{error}</div>
          <button
            onClick={confirm}
            className="text-blue-500   border-2 font-bold border-blue-900"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
}
