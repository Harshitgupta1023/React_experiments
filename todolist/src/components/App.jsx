import React, { useState } from "react";

function App() {
  const [newtext, setNewText] = useState("");
  const [listitem, setListItem] = useState([]);
  function change(event) {
    const value = event.target.value;
    setNewText(value);
  }

  function addinlist() {
    setListItem((prev) => {
      return [...prev, newtext];
    });
    setNewText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={change} type="text" value={newtext} />
        <button onClick={addinlist}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listitem.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
