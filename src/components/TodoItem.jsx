import "./TodoItem.css";

const TodoItem = ({ content, emoji }) => {
  return (
    <div className="TodoItem">
      <div className="img_section">{emoji}</div>
      <div className="title_section">{content}</div>
      <div className="date_section">{new Date().toDateString()}</div>
      <div className="checkbox_section">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default TodoItem;
