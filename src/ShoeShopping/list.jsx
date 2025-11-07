import Item from "./item";

export default function List(props) {
  const { listShoes, onGetShoesFromItemProp } = props;
  return (
    <div>
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
