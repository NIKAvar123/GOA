import { useReducer, useState } from "react";


const initialState = {
  count: 0,
  todos: []
};


function reducer(state, action) {
  switch (action.type) {

    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "INCREMENT_BY":
      return { ...state, count: state.count + action.payload };

    case "RESET":
      return { ...state, count: 0 };

    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return state;
  }
}


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 useReducer App</h1>


      <section>
        <h2>Counter: {state.count}</h2>

        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 10 })}>
          +10
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </section>

      <hr />


      <section>
        <h2>TODO List</h2>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task"
        />
        <button
          onClick={() => {
            if (text.trim()) {
              dispatch({ type: "ADD_TODO", payload: text });
              setText("");
            }
          }}
        >
          Add
        </button>

        <ul>
          {state.todos.map(todo => (
            <li
              key={todo.id}
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "DELETE_TODO", payload: todo.id });
                }}
                style={{ marginLeft: 10 }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
