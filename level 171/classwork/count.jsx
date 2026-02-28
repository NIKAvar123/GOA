import { useRef, useState } from "react";

function App() {
  // useRef არის mutable ობიექტი, რომელსაც UI არ უსმენდა ავტომატურად
  const countRef = useRef(0);
  const [, forceUpdate] = useState(0); // UI-ის რეფრეშიისთვის

  const increase = () => {
    countRef.current += 1;
    forceUpdate((n) => n + 1); // UI-ს ვაძალებთ რეფრეში
  };

  const decrease = () => {
    countRef.current -= 1;
    forceUpdate((n) => n + 1);
  };

  const reset = () => {
    countRef.current = 0;
    forceUpdate((n) => n + 1);
  };

  const isEven = countRef.current % 2 === 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Counter: {countRef.current}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <hr />

      {isEven ? (
        <p>რიცხვი ლუწია</p>
      ) : (
        <p>რიცხვი კენტია</p>
      )}
    </div>
  );
}

export default App;