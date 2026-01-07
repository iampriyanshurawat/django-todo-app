import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import TodoList from "./components/ToDoList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("access")
  );

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />

      <Route
        path="/"
        element={
          isAuthenticated ? <TodoList /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}

export default App;
