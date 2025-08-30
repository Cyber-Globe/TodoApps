import React from "react";
import Forms from "./component/Form";
import Items from "./component/Items";

export default function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Forms onAddItems={handleAddItems} />
      <Items items={items} />
    </div>
  );
}
