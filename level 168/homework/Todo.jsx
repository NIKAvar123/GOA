import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JS" },
  ]);

  const totalTodos = todos.length; // derived state

  return (
    <div>
      <h3>დავალებების რაოდენობა: {totalTodos}</h3>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}

export default TodoList;
