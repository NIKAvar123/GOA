import { useRef } from "react";
import "./App.css";

function App() {

  const boxRef = useRef(null);

  const changeColor = () => {
    boxRef.current.classList.toggle("colored");
  };

  const inputRef = useRef(null);

  const selectText = () => {
    inputRef.current.select();
  };


  const paragraphRef = useRef(null);

  const highlightText = () => {
    paragraphRef.current.classList.toggle("highlight");
  };

  return (
    <div className="container">

      <h2> Change Div Background</h2>
      <div ref={boxRef} className="box"></div>
      <button onClick={changeColor}>Change Color</button>

      <hr />

      <h2>Select Input Text</h2>
      <input ref={inputRef} type="text" defaultValue="Hello World" />
      <button onClick={selectText}>select everything</button>

      <hr />

   
      <h2> Highlight Paragraph</h2>
      <p ref={paragraphRef}>
        hello world
      </p>
      <button onClick={highlightText}>select text</button>
    </div>
  );
}

export default App;