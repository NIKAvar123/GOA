import { useCounter } from "./useCounter";

function CounterA() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h3>Counter A: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function CounterB() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h3>Counter B: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}