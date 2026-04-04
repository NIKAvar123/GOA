// Custom Hook არის ჩვეულებრივი JavaScript ფუნქცია
// ის გვაძლევს საშუალებას გამოვიტანოთ და გავაზიაროთ ლოგიკა სხვადასხვა კომპონენტებს შორის.
//
// გამოიყენება მაშინ, როცა ერთი და იგივე state / ლოგიკა გვჭირდება რამდენიმე კომპონენტში.
//
// მაგალითი:
// useCounter → ითვლის რიცხვს
// useToggle → მართავს true/false მნიშვნელობას




import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => {

    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}



// import React from "react";
// import { useCounter } from "./useCounter";

// function Counter() {
//   const { count, increment, decrement, reset } = useCounter(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;