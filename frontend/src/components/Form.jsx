import { useState } from "react";

export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-text" className="item-text">Add a new todo:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="todo-text"
          id="todo-text"
        />
        <button type="submit" className="submit-btn">Add</button>
      </form>
    </div>
  );
}
