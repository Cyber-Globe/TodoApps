import React from "react";
import logo from "../assets/bin (2).png";

export default function Items({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );

  function Item({ item }) {
    return (
      <li className="item">
        <span>{item.description}</span>
        <img src={logo} width="25px" alt="bin icon" />
      </li>
    );
  }
}
