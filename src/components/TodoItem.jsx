import "./TodoItem.css";
import React, { useState } from "react";

const TodoItem = ({ content, isDone }) => {
  const [check, setCheck] = useState(isDone);

  return (
    <div className={check ? "TodoItem done" : "TodoItem"}>
      <input
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
        type="checkbox"
      />
      <div className="text_section">{content}</div>
    </div>
  );
};

export default TodoItem;
