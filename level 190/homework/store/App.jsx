// App.jsx
import { useState } from "react";

import { useThemeStore } from "./stores/themeStore";
import { useTodoStore } from "./stores/todoStore";
import { useUserStore } from "./stores/userStore";

export default function App() {
  const { theme, toggleTheme } = useThemeStore();

  const { user, login, logout } = useUserStore();

  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(name, email);
    setName("");
    setEmail("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 20,
        background: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#111" : "#fff",
      }}
    >
      {/* 🌗 Theme */}
      <button onClick={toggleTheme}>
        Switch Theme ({theme})
      </button>

      {/* 👤 USER */}
      <div style={{ marginTop: 20 }}>
        {user ? (
          <>
            <h3>
              Welcome {user.name} ({user.email})
            </h3>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <h3>Login</h3>

            <input
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        )}
      </div>

      {/* 📝 TODO */}
      <div style={{ marginTop: 30 }}>
        <h3>Todo List</h3>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            addTodo(text);
            setText("");
          }}
        >
          Add
        </button>

        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <span
                onClick={() => toggleTodo(t.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: t.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {t.text}
              </span>

              <button onClick={() => removeTodo(t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}