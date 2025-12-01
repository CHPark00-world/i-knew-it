import "./TodoItem.css";

const TodoItem = ({
  id,
  content,
  isDone,
  createdDate,
  setTodo,
  todo,
  onDelete,
}) => {
  const onClickChange = (e) => {
    setTodo(
      todo.map((item) => {
        return item.id === e ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  return (
    <div className="TodoItem">
      <input
        className="checkbox_section"
        type="checkbox"
        onChange={() => onClickChange(id)}
        checked={isDone}
      />
      <div className="title_section">{content}</div>
      <div className="date_section">{createdDate}</div>
      <button onClick={() => onDelete(id)} className="btn_section">
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
