import React from "react";
import useDarkMode from "./hooks/useDarkMode";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [isDark, toggle] = useDarkMode();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <DarkModeToggle isDark={isDark} toggle={toggle} />
    </div>
  );
}

export default App;