import { useState } from "react";

function SumCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sum = Number(num1) + Number(num2); // derived state

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>ჯამი: {sum}</p>
    </div>
  );
}

export default SumCalculator;
