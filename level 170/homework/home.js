import { useRef, useState } from "react";

function App() {

  const focusInputRef = useRef(null);

  const handleFocus = () => {
    focusInputRef.current.focus();
  };

  const textRef = useRef(null);

  const changeColor = () => {
    textRef.current.style.color = "red";
  };

  const boxRef = useRef(null);

  const changeWidth = () => {
    boxRef.current.style.width = "400px";
  };

  const clearInputRef = useRef(null);

  const clearInput = () => {
    clearInputRef.current.value = "";
  };


  const paragraphRef = useRef(null);

  const hideParagraph = () => {
    paragraphRef.current.style.display = "none";
  };

  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>Focus Input</h2>
      <input ref={focusInputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>

      <hr />

      <h2>Change Text Color</h2>
      <p ref={textRef}>This text will change color</p>
      <button onClick={changeColor}>Change Color</button>

      <hr />

 
      <h2>Change Div Width</h2>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          transition: "0.3s",
        }}
      ></div>
      <button onClick={changeWidth}>Change Width</button>

      <hr />


      <h2>Clear Input</h2>
      <input ref={clearInputRef} type="text" placeholder="Type something..." />
      <button onClick={clearInput}>Clear</button>

      <hr />


      <h2>Hide Paragraph</h2>
      <p ref={paragraphRef}>This paragraph will disappear</p>
      <button onClick={hideParagraph}>Hide</button>

      <hr />


      <h2>Scroll To Bottom</h2>
      <div
        ref={scrollRef}
        style={{
          height: "100px",
          width: "300px",
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
        <p>Line 9</p>
        <p>Line 10</p>
      </div>
      <button onClick={scrollToBottom}>Scroll Down</button>

    </div>
  );
}

export default App;