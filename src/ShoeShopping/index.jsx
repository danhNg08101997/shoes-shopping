import List from "./list";
import Cart from "./cart";
import { useState } from "react";
import data from "./data.json";

export default function ShoeStore() {
  const [listShoes, setListShoes] = useState(data);
  const [carts, setCarts] = useState([]);

  const onGetShoesFromItem = (shoes) => {
    console.log(shoes);
  };

  return (
    <div>
      <List listShoes={listShoes} onGetShoesFromItemProp={onGetShoesFromItem} />
      <Cart />
    </div>
  );
}
