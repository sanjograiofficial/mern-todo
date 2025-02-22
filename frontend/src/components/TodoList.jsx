import TodoItems from "./TodoItem";
function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
    <h1>Todo Lists:</h1>
      <ul className="todo-list">
        {todos.length === 0 && "No todos"}
        {todos.map((todo) => {
          return (
            
            <TodoItems
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
