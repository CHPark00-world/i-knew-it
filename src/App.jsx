import Header from "./components/Header";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState, useRef } from "react";
import Footer from "./components/Footer";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "일기 쓰기",
    createdDate: new Date("2025-05-13").toDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "과제 하기",
    createdDate: new Date("2024-01-12").toDateString(),
  },
  {
    id: 3,
    isDone: true,
    content: "밥 먹기",
    createdDate: new Date().toDateString(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(4);
  const inputRef = useRef("");

  let count = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].isDone) {
      count++;
    }
  }

  const onCreate = () => {
    const inputValue = inputRef.current.value.trim();

    if (!inputValue) {
      return;
    } else if (inputValue.length < 4) {
      alert("4글자 이상 입력해야 합니다 !");
      return;
    }
    const newItem = {
      id: idRef.current,
      createdDate: new Date().toDateString(),
      content: inputValue,
    };

    setTodo([...todo, newItem]);
    idRef.current++;
    inputRef.current.value = "";
  };

  const onDelete = (id) => {
    setTodo(todo.filter((it) => it.id !== id));
  };

  return (
    <div>
      <Header inputRef={inputRef} onCreate={onCreate} />
      <div className="todo-list">
        {todo.map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            todo={todo}
            setTodo={setTodo}
            onDelete={onDelete}
          />
        ))}
      </div>
      <Footer count={count} />
    </div>
  );
}

export default App;
