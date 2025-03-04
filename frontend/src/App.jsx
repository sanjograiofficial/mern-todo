import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/todo");
      const data = await response.json();
      setTodos(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const addNewTodo = (title) => {
    async function PostTodos() {
      await fetch("http://localhost:8000/todo", {
        method: "post",
        body: {
          title,
        },
      });
    }
    setTodos(PostTodos);
  };
  const deleteTodo = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };
  const toggleTodo = (id, completed) => {
    setTodos((currentTodo) =>
      currentTodo.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
