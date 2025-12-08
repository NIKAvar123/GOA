import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Counter</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function HelloGoodbyeToggle() {

  const [flag, setFlag] = useState(true);
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Hello / Goodbye Toggle</h3>
      <p>{flag ? "Hello" : "Goodbye"}</p>
      <button onClick={() => setFlag(!flag)}>
        {flag ? "Switch to Goodbye" : "Switch to Hello"}
      </button>
    </div>
  );
}

function EchoInput() {

  const [text, setText] = useState("");
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Echo Input</h3>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

function NameFilter() {
 
  const [filter, setFilter] = useState("");
  const names = ["Lasha", "Nino", "Giorgi", "Ana", "Otar", "Mariam"];
  const filtered = names.filter((n) =>
    n.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Name Filter</h3>
      <input
        type="text"
        placeholder="Filter names..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filtered.map((n, idx) => (
          <li key={idx}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function NumberListWithRemove() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const remove = (numToRemove) => {
    setNumbers(numbers.filter((n) => n !== numToRemove));
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Number List (remove)</h3>
      <ul>
        {numbers.map((n) => (
          <li key={n}>
            {n} <button onClick={() => remove(n)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (idxToRemove) => {
    setTodos(todos.filter((_, idx) => idx !== idxToRemove));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>To-Do List</h3>
      <input
        type="text"
        placeholder="New task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, idx) => (
          <li key={idx}>
            {t} <button onClick={() => removeTodo(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingList() {

  const [items, setItems] = useState([]);
  const [inputName, setInputName] = useState("");

  const addItem = () => {
    const name = inputName.trim();
    if (!name) return;

    const existing = items.find((item) => item.name === name);
    if (existing) {
      setItems(
        items.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setItems([...items, { name, qty: 1 }]);
    }
    setInputName("");
  };

  const inc = (name) => {
    setItems(
      items.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const dec = (name) => {
    setItems(
      items
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
      <h3>Shopping List</h3>
      <input
        type="text"
        placeholder="Product name..."
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} — qty: {item.qty}{" "}
            <button onClick={() => inc(item.name)}>+</button>{" "}
            <button onClick={() => dec(item.name)}>-</button>{" "}
            <button onClick={() => remove(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React small demos</h1>
      <Counter />
      <HelloGoodbyeToggle />
      <EchoInput />
      <NameFilter />
      <NumberListWithRemove />
      <TodoList />
      <ShoppingList />
    </div>
  );
}
