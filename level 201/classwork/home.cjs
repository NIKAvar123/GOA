import { useState } from "react";

function Form() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `http://localhost:3600/sum?num1=${num1}&num2=${num2}`
        );

        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div>
        <h1>Add Two Numbers</h1>

        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="First Number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Second Number"
            />
            <button type="submit">Add</button>
        </form>

        {result !== null && (
            <p>The sum is: {result}</p>
        )}
        </div>
    );
}