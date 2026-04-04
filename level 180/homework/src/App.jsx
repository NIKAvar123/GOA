import React from 'react'
import { useCounter } from './custom/useCounter';
import { useInput } from './custom/useInput';
import { useDarkMode } from './custom/useDarkMode';
import { useLocalStorage } from './custom/useLocalStorage';

export default function App() {
  const { count, increment, decrement } = useCounter(0);
  const { value, onChange } = useInput("");
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input type="text" value={value} onChange={onChange} />
      <br />
      <button onClick={toggleTheme}>Toggle Theme (Current: {theme})</button>

    </div>
  )
}
