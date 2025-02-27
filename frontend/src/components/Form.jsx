import { useState } from "react";

export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
    async function postData() {
      fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: input,
          completed: false,
        }),
      })
        .then((res) => res.json())
        .then(() => console.log("Todo created successfully"))
        .catch((error) => console.error(error));
    }
    postData();
  };
  return (
    <div>
      <form
        action={"http://localhost:8000"}
        method="POST"
        onSubmit={handleSubmit}
      >
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
