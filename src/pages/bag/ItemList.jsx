import BagItem from "./BagItem";

export default function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
          <BagItem key={item.name} item={item} />
        ))}
    </div>
  )
}