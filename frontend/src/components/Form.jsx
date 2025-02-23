import { useState } from "react";

export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(input);
    const response = await fetch("http://localhost:8000/todo", {
      method: "post",
    });
    setInput("");
  };
  return (
    <div>
      <form action={"/todo"} method="post" onSubmit={handleSubmit}>
        <label htmlFor="todo-text" className="item-text">
          Add a new todo:
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="todo"
          id="todo-text"
        />
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
}
