"use client";

import React, { useState } from "react";
import Search from "../search/Search";

interface Products {
  id: number;
  image: any;
  qnty: number;
  category: string;
  price: number;
}

interface Add {
  add: any;
}

export default function List({ add }: Add) {
  const [search, setSearch] = useState<string>("");
  const [product, setProduct] = useState<Products[]>([
    {
      id: 1,
      image: "/images/ring2.jpg",
      qnty: 1,
      category: "Ring",
      price: 8000,
    },
    {
      id: 2,
      image: "/necklaceimages/necklace1.jpeg",
      qnty: 1,
      category: "Necklace",
      price: 24000,
    },
    {
      id: 3,
      image: "/whiteringimages/whitering7.jpeg",
      qnty: 1,
      category: "Whitegold",
      price: 12000,
    },
    {
      id: 4,
      image: "/watchimages/watch2.jpg",
      qnty: 1,
      category: "Watch",
      price: 31000,
    },
    {
      id: 5,
      image: "/earringimages/earring1.jpeg",
      qnty: 1,
      category: "Earring",
      price: 9200,
    },
    {
      id: 6,
      image: "/braceletimages/bracelet1.jpeg",
      qnty: 1,
      category: "Bracelet",
      price: 27000,
    },
    {
      id: 7,
      image: "/images/ring6.webp",
      qnty: 1,
      category: "Ring",
      price: 12000,
    },
    {
      id: 8,
      image: "/necklaceimages/necklace4.jpeg",
      qnty: 1,
      category: "Necklace",
      price: 44000,
    },
    {
      id: 9,
      image: "/whiteringimages/whitering8.jpeg",
      qnty: 1,
      category: "Whitegold",
      price: 26000,
    },
    {
      id: 10,
      image: "/watchimages/watch5.webp",
      qnty: 1,
      category: "Watch",
      price: 50000,
    },
    {
      id: 11,
      image: "/earringimages/earring10.jpeg",
      qnty: 1,
      category: "Earring",
      price: 20300,
    },
    {
      id: 12,
      image: "/braceletimages/bracelet2.jpeg",
      qnty: 1,
      category: "Bracelet",
      price: 19200,
    },
    {
      id: 13,
      image: "/images/ring10.png",
      qnty: 1,
      category: "Ring",
      price: 30150,
    },
    {
      id: 14,
      image: "/necklaceimages/necklace6.jpeg",
      qnty: 1,
      category: "Necklace",
      price: 88000,
    },
    {
      id: 15,
      image: "/whiteringimages/whitering6.jpeg",
      qnty: 1,
      category: "Whitegold",
      price: 7700,
    },
    {
      id: 16,
      image: "/watchimages/watch1.jpg",
      qnty: 1,
      category: "Watch",
      price: 33200,
    },
    {
      id: 17,
      image: "/earringimages/earring2.jpeg",
      qnty: 1,
      category: "Earring",
      price: 16000,
    },
    {
      id: 18,
      image: "/braceletimages/bracelet6.jpeg",
      qnty: 1,
      category: "Bracelet",
      price: 39100,
    },
    {
      id: 19,
      image: "/images/ring3.webp",
      qnty: 1,
      category: "Ring",
      price: 35000,
    },
    {
      id: 20,
      image: "/necklaceimages/necklace5.jpeg",
      qnty: 1,
      category: "Necklace",
      price: 28450,
    },
    {
      id: 21,
      image: "/whiteringimages/whitering4.jpeg",
      qnty: 1,
      category: "Whitegold",
      price: 36500,
    },
    {
      id: 22,
      image: "/watchimages/watch4.webp",
      qnty: 1,
      category: "Watch",
      price: 6300,
    },
    {
      id: 23,
      image: "/earringimages/earring9.jpeg",
      qnty: 1,
      category: "Earring",
      price: 9999,
    },
    {
      id: 24,
      image: "/braceletimages/bracelet3.jpeg",
      qnty: 1,
      category: "Ring",
      price: 8000,
    },
  ]);

  const minus = (id: number) => {
    const updateproduct = [...product];
    const index = updateproduct.findIndex((prodo) => prodo.id === id);
    if (updateproduct[index].qnty > 1) {
      --updateproduct[index].qnty;
    }
    setProduct(updateproduct);
  };

  const plus = (id: number) => {
    const updateproduct = [...product];
    const index = updateproduct.findIndex((prodo) => prodo.id === id);
    if (updateproduct[index].qnty < 5) {
      ++updateproduct[index].qnty;
    }
    setProduct(updateproduct);
  };

  return (
    <div>
      <Search search={search} setSearch={setSearch} />;
      <div className="font-bold   mt-[60px] flex flex-wrap gap-24 w-[850px]">
        {product
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.category.toLowerCase().includes(search);
          })
          .map((prod: any) => {
            return (
              <div key={prod.id} className="conte ">
                <div className="flex gap-2 absolute font-bold bg-blue-950 flex-col w-full h-full justify-center items-center text-yellow-500">
                  <p className="bg-blue-950">{prod.category}</p>
                  <div className="flex gap-2 bg-blue-950">
                    <button onClick={() => minus(prod.id)}>-</button>
                    <span className="bg-blue-950">{prod.qnty}</span>
                    <button onClick={() => plus(prod.id)}>+</button>
                  </div>
                  <span className="bg-blue-950">{prod.price}$</span>
                  <button
                    className="border-2 border-blue-600  w-[70%]"
                    onClick={() => add(prod)}
                  >
                    ADD
                  </button>
                </div>
                <div className="covo text-center">
                  <img src={prod.image} alt="er" className="h-full w-full" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
