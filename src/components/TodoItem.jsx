import "./TodoItem.css";
import React from "react";

const TodoItem = ({ id, content, isDone, onUpdate, onDelete }) => {
  return (
    <div className={isDone ? "TodoItem done" : "TodoItem"}>
      <input checked={isDone} onChange={() => onUpdate(id)} type="checkbox" />
      <div className="text_section">{content}</div>
      <div onClick={() => onDelete(id)} className="delete_section">
        ❌
      </div>
    </div>
  );
};

export default TodoItem;
