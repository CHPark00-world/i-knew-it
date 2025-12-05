import React from "react";
import useTodos from "./hooks/useTodos";
import "./App.css";
import Header from "./components/header";
import TodoList from "./components/TodoList";

const App = () => {
  const { todos, addTodo, onUpdate, onDelete, onAllDelete } = useTodos();

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <Header onAllDelete={onAllDelete} todos={todos} />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        addTodo={addTodo}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default App;
