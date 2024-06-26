import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [arendel, setArendel] = useState(""); // Initializing with an empty string
  const [adel, setAdel] = useState(""); // Initializing with an empty string

  const handleAddTodo = () => {
    onAddTodo({
      name: arendel,
      dueDate: adel
    });
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={arendel}
            onChange={(e) => setArendel(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={adel}
            onChange={(e) => setAdel(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
