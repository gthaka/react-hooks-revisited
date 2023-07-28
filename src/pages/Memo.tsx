import { useState, useMemo, FC } from "react";

// Define an interface for itemList
interface ItemListProps {
  listOfItems: number[];
}

interface Item {
  value: number;
  itemProp1: number;
  itemProp2: number;
}

// Expensive functions for demonstration
const expensiveFunction = (input: number): number => {
  console.log("Running expensiveFunction...");
  return Math.random() * input;
};

const anotherPriceyFunction = (input: number): number => {
  console.log("Running anotherPriceyFunction...");
  return Math.random() * input;
};

// Child component
const ItemList: FC<ItemListProps> = ({ listOfItems }) => {
  console.log("Running ItemList Component");

  // useMemo will only recompute the memorized value when listOfItems change
  const items: Item[] = useMemo(
    () =>
      listOfItems.map((item) => ({
        value: item,
        itemProp1: expensiveFunction(item),
        itemProp2: anotherPriceyFunction(item),
      })),
    [listOfItems]
  );

  return (
    <>
      <h2>Items List:</h2>
      <ul>
        {items.map((item: Item, index: number) => (
          <li
            key={index}
          >{`Item: ${item.value}, Prop1: ${item.itemProp1}, Prop2: ${item.itemProp2}`}</li>
        ))}
      </ul>
    </>
  );
};

// Parent Component
const Memo: FC = () => {
  // For demonstration, generating the random array each time the state updates
  const [listOfItems, setListOfItems] = useState<number[]>(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 40))
  );

  return (
    <>
      <h1>useMemo Hook</h1>
      <div className="card">
        <button
          onClick={() =>
            setListOfItems((listOfItems) => [...listOfItems, Math.random()])
          }
        >
          Add Item
        </button>
        <ItemList listOfItems={listOfItems} />
      </div>
    </>
  );
};

export default Memo;
