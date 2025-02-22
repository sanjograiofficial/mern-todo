function TodoItem({ id, title, completed=false, deleteTodo, toggleTodo }) {
  return (
    <div className="list-element">
      <li className="todo-item" key={id}>
        <label className="list-item">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="del-btn" onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    </div>
  );
}
export default TodoItem;
