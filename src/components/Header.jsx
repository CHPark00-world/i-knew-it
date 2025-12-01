import "./Header.css";

function Header({ onCreate, inputRef }) {
  return (
    <div className="Header">
      <h1>To-do</h1>
      <input ref={inputRef} placeholder="입력하세요." />
      <button onClick={onCreate}>+To-do</button>
    </div>
  );
}

export default Header;
