import React from "react";
import AllProducts from "../allproducts/AllProducts";

interface Cart {
  add: any;
}

export default function AllThings({ add }: Cart) {
  return (
    <div>
      <AllProducts add={add} />
    </div>
  );
}
