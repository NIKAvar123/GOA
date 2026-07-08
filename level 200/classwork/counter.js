import useCounterStore from "./store";



function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;