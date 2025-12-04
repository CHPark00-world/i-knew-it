import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/mockTodo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }; // get 요청

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (content) => {
    fetch("http://localhost:3000/mockTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content,
        createdDate: new Date().toISOString().split("T")[0],
        isDone: false,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.log(err));
  }; //post 요청

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <Header todos={todos} />
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default App;
