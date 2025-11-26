import "./Header.css";

function Header({ onCreate }) {
  return (
    <div className="Header">
      <h1>To-do</h1>
      <button onClick={onCreate}>+To-do</button>
    </div>
  );
}

export default Header;
