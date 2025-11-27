import Header from "./components/Header";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 1,
    emoji: "🖋️",
    content: "일기 쓰기",
    createdDate: new Date().toDateString(),
  },
  {
    id: 2,
    emoji: "🏫",
    content: "과제 하기",
    createdDate: new Date().toDateString(),
  },
  {
    id: 3,
    emoji: "🍚",
    content: "밥 먹기",
    createdDate: new Date().toDateString(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = () => {
    const newItem = {
      id: idRef.current,
      createdDate: new Date().toDateString(),
    };

    setTodo([...todo, newItem]);
    idRef.current++;
  };

  return (
    <div>
      <Header onCreate={onCreate} />
      {todo.map((it) => (
        <TodoItem key={it.id} content={it.content} emoji={it.emoji} />
      ))}
    </div>
  );
}

export default App;
