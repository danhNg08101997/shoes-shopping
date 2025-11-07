import List from "./list";
import Cart from "./cart";
import {useState} from "react";
import data from "./data.json";

export default function ShoeStore() {
    const [listShoes, setListShoes] = useState(data);
    const [carts, setCarts] = useState([]);

    const onGetShoesFromItem = (shoes) => {
        const productAddToCart = {
            id: shoes.id,
            name: shoes.name,
            image: shoes.image,
            price: shoes.price,
            description: shoes.description,
            quanlity: 1,
        };

        const newCarts = [...carts];

        newCarts.push(productAddToCart);
        setCarts(newCarts);
    };

    const onUpdateQtyCarts = (shoes) => {}

    return (
        <div className="w-full">
            <h1 className="text-center font-bold text-5xl text-stone-700 mb-8">Shoes shop</h1>
            <List listShoes={listShoes} onGetShoesFromItemProp={onGetShoesFromItem}/>
            <Cart className="w-full" carts={carts} onUpdateQtyCartsProp={onUpdateQtyCarts}/>
        </div>
    );
}
