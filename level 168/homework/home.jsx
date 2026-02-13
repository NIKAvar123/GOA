import { useState } from "react";
import Button from "./Button";

const buttonData = [
  { id: 1, color: "red", on: true },
  { id: 2, color: "blue", on: true },
  { id: 3, color: "green", on: true },
  { id: 4, color: "yellow", on: true },
  { id: 5, color: "purple", on: true },
  { id: 6, color: "orange", on: true },
  { id: 7, color: "pink", on: true },
  { id: 8, color: "black", on: true },
];

function App() {
  const [buttons, setButtons] = useState(buttonData);

  const changeOn = (id) => {
    setButtons((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, on: !item.on } : item
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {buttons.map((item) => (
        <Button
          key={item.id}
          color={item.color}
          on={item.on}
          changeOn={changeOn}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default App;
