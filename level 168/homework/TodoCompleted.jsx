import { useState } from "react";

function TodoCompleted() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Practice JS", completed: false },
    { id: 3, text: "Build Project", completed: true },
  ]);

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <h3>შესრულებული დავალებები: {completedCount}</h3>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text} - {todo.completed ? "✔" : "❌"}
        </p>
      ))}
    </div>
  );
}

export default TodoCompleted;
