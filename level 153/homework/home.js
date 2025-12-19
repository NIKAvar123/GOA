import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Counter</h2>
      <p className="text-2xl mb-4">{count}</p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
}

function HelloText() {
  const [text, setText] = useState("Hello");

  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Hello Text</h2>
      <p className="mb-4">{text}</p>
      <button
        onClick={() => setText("Hello React")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Text
      </button>
    </div>
  );
}

