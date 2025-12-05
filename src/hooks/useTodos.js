import { useState, useEffect } from "react";

const url = "http://localhost:3000/mockTodo";
const handleError = (err) => {
  console.log(err);
};

function useTodos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch(handleError);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (content) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content,
        createdDate: new Date().toISOString().split("T")[0],
        isDone: false,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchTodos();
      })
      .catch(handleError);
  };

  const onUpdate = (id) => {
    const targetTodo = todos.find((todo) => todo.id === id);

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isDone: !targetTodo.isDone,
      }),
    })
      .then(() => fetchTodos())
      .catch(handleError);
  };

  const onDelete = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchTodos())
      .catch(handleError);
  };

  const onAllDelete = () => {
    todos.forEach((todo) => {
      fetch(`${url}/${todo.id}`, {
        method: "DELETE",
      }).catch(handleError);
    });

    setTimeout(() => {
      fetchTodos();
    }, 500);
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    onUpdate,
    onDelete,
    onAllDelete,
  };
}

export default useTodos;
