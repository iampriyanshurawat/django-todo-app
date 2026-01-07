import { useEffect, useState } from "react";
import api from "../api/axios";
import TodoItem from "./ToDoItem";
import AddTodoModal from "./AddToDoModal";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get("todos/").then(res => setTodos(res.data));
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "today") {
      return todo.due_date === new Date().toISOString().slice(0, 10);
    }
    if (filter === "upcoming") {
      return todo.due_date > new Date().toISOString().slice(0, 10);
    }
    return true;
  });

  return (
    <div className="app">
      <header>
        <h1>Task Manager</h1>
        <button onClick={() => setShowModal(true)}>+ Add Task</button>
      </header>

      <div className="filters">
        {["all", "today", "upcoming", "completed"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="list">
        {filteredTodos.length === 0 && (
          <p className="empty">No tasks found</p>
        )}

        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </div>

      {showModal && (
        <AddTodoModal
          onClose={() => setShowModal(false)}
          setTodos={setTodos}
          todos={todos}
        />
      )}
    </div>
  );
}

export default TodoApp;
