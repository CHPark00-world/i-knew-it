import "./Header.css";
import React from "react";

const Header = ({ todos, onAllDelete }) => {
  const count = todos.filter((item) => item.isDone === true).length;

  return (
    <div className="Header">
      <div onClick={onAllDelete} className="delete_section">
        🗑️
      </div>
      <div className="date_section">{new Date().toLocaleDateString()}</div>
      <div className="count_section">
        {count} / {todos.length}개
      </div>
      <div className="update_section">✍️</div>
    </div>
  );
};

export default Header;
