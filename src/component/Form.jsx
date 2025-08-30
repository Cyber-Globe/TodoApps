import React from "react";

export default function Forms({ onAddItems }) {
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
  }

  return (
    <>
      <h1>Enter Your Items</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={description}
          className="input"
          type="text"
          placeholder="Add Items"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
