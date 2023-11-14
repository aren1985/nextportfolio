"use client";

import React from "react";

interface Searcho {
  search: string;
  setSearch: any;
}

export default function Search({ search, setSearch }: Searcho) {
  return (
    <div
      className="relative mt-[150px]
    "
    >
      <input
        type="search"
        placeholder="search..."
        className="bg-blue-900  w-[400px] ml-64 rounded h-8 p-2 font-bold text-white"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}
