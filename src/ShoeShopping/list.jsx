import Item from "./item";

export default function List(props) {
  const { listShoes, onGetShoesFromItemProp } = props;
  return (
    <div className="grid grid-cols-3 gap-4 w-full p-32">
      {listShoes.map((shoes) => (
        <Item
          key={shoes.id}
          shoes={shoes}
          onGetShoesFromItemPropToItem={onGetShoesFromItemProp}
        />
      ))}
    </div>
  );
}
