import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (title) => {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, cpmpleted: false },
      ];
    });
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
