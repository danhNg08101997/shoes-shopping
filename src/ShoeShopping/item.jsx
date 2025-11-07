export default function Item(props) {
    const {shoes, onGetShoesFromItemPropToItem} = props;

    const handleAddToCart = () => {
        onGetShoesFromItemPropToItem(shoes);
    };

    return (
        <div className="border border-gray-400 p-8 w-fit">
            <img className="w-full p-8" src={shoes.image} alt=""/>
            <h3 className="text-zinc-950 mb-4">{shoes.name}</h3>
            <p className="text-zinc-500">{shoes.price}</p>
            <button className="border border-gray-400 rounded-xl py-2 px-8 bg-gray-600 text-amber-50" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
}
