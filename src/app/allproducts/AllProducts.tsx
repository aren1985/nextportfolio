import React from "react";
import List from "../list/List";

interface Cart {
  add: any;
}

export default function AllProducts({ add }: Cart) {
  return (
    <div>
      <List add={add} />
    </div>
  );
}
