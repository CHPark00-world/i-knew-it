import Header from "./components/Header";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(4);
  const inputRef = useRef("");

  useEffect(() => {
    fetch("http://localhost:3000/mockTodo")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

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
