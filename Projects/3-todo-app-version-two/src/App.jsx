import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddTodo={addTodo} />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
