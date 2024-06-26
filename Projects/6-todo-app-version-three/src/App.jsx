import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  />
      { <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        
      ></TodoItems>
    </center>
  );
}

export default App;
