import TodoItem from "./TodoItem";
import "./TodoList.css";
import React, { useRef } from "react";

const TodoList = ({ todos, addTodo }) => {
  const inputRef = useRef("");

  const inputChange = () => {
    if (inputRef.current.value === "") {
      return;
    } else {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="TodoList">
      <div className="input_section">
        Todo
        <input
          ref={inputRef}
          className="input"
          placeholder="무엇을 하겠습니까?"
        />
        <button onClick={inputChange}>✔️</button>
      </div>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
