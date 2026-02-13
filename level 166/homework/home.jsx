import { createContext, useReducer, useEffect } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all", // all | completed | active
  loading: false,
  error: null,
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload.text.trim()) {
        return { ...state, error: "Todo cannot be empty!" };
      }

      return {
        ...state,
        loading: true,
        error: null,
      };

    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload
            ? { ...t, completed: !t.completed }
            : t
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id
            ? { ...t, text: action.payload.text }
            : t
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
