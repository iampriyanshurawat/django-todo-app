import api from "../api/axios";

function TodoItem({ todo, todos, setTodos }) {
  const toggle = () => {
    api.patch(`todos/${todo.id}/`, { completed: !todo.completed })
      .then(res => {
        setTodos(todos.map(t => t.id === todo.id ? res.data : t));
      });
  };

  const remove = () => {
    api.delete(`todos/${todo.id}/`)
      .then(() => setTodos(todos.filter(t => t.id !== todo.id)));
  };

  return (
    <div className={`card ${todo.completed ? "done" : ""}`}>
      <div>
        <input type="checkbox" checked={todo.completed} onChange={toggle} />
        <h3>{todo.title}</h3>
      </div>

      <p>{todo.description}</p>

      <div className="meta">
        {todo.due_date && <span>📅 {todo.due_date}</span>}
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
