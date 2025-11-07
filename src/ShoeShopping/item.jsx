export default function Item(props) {
  const { shoes, onGetShoesFromItemPropToItem } = props;

  const handleAddToCart = () => {
    onGetShoesFromItemPropToItem(shoes);
  };

  return (
    <div>
      {shoes.id} - {shoes.name}
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}
