import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="img_section">🖋️</div>
      <div className="title_section">일기 쓰기</div>
      <div className="date_section">{new Date().toDateString()}</div>
      <div className="checkbox_section">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default TodoItem;
