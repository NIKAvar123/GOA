import { useState } from "react";

function App() {

  const [text, setText] = useState("Hello!");


  const [count, setCount] = useState(0);


  const [bgColor, setBgColor] = useState("lightblue");


  const [showText, setShowText] = useState(true);

 
  const [emoji, setEmoji] = useState("😀");


  const [greet, setGreet] = useState("Hello!");


  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>

      {/*ტექსტის შეცვლა */}
      <h2>{text}</h2>
      <button onClick={() => setText("Goodbye!")}>Change to Goodbye</button>

      <hr />

      {/* Increase / Decrease */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrease</button>

      <hr />

      {/* ფონის შეცვლა */}
      <div style={{ background: bgColor, padding: "20px", width: "200px", textAlign: "center" }}>
        Color Box
      </div>
      <button
        onClick={() => setBgColor(bgColor === "lightblue" ? "lightcoral" : "lightblue")}
      >
        Change Color
      </button>

      <hr />

      {/* Show / Hide */}
      <button onClick={() => setShowText(!showText)}>Show / Hide</button>
      {showText && <h2>Welcome to React!</h2>}

      <hr />

      {/* Emoji toggle */}
      <h2>{emoji}</h2>
      <button onClick={() => setEmoji(emoji === "😀" ? "😢" : "😀")}>Change Emoji</button>

      <hr />

      {/*  Alert */}
      <button onClick={() => alert("Hello from React!")}>Show Alert</button>

      <hr />

      {/*  Hello -> Hi there */}
      <h2>{greet}</h2>
      <button onClick={() => setGreet("Hi there!")}>Change Text</button>

    </div>
  );
}

export default App;
