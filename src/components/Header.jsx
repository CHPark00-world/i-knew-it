import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="delete_section">🗑️</div>
      <div className="date_section">{new Date().toLocaleDateString()}</div>
      <div className="update_section">✍️</div>
    </div>
  );
};

export default Header;
