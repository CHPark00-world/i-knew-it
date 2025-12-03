import { useState } from "react";
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

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content);

  const onChangeText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onClickFunc = () => {
    setTodo(
      todo.map((item) => {
        return item.id === id ? { ...item, content: text } : item;
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="TodoItem">
      <input
        className="checkbox_section"
        type="checkbox"
        onChange={() => onClickChange(id)}
        checked={isDone}
      />
      {isEditing ? (
        <input
          value={text}
          onChange={onChangeText}
          className="title_section"
          placeholder="내용을 입력하세요."
        />
      ) : (
        <div className="title_section">{content}</div>
      )}

      <div className="date_section">{createdDate}</div>
      {isEditing ? (
        <>
          <div onClick={onClickFunc}>✔️</div>
          <div
            onClick={() => {
              setText(content);
              setIsEditing(false);
            }}
          >
            ❌
          </div>
        </>
      ) : (
        <div
          onClick={() => {
            setIsEditing(true);
            setText("");
          }}
          className="update_section"
        >
          수정
        </div>
      )}

      <button onClick={() => onDelete(id)} className="btn_section">
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
