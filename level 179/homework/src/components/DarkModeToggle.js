import React from "react";

function DarkModeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        background: isDark ? "#4caf50" : "#2196f3",
        color: "#fff",
        border: "none",
        borderRadius: "4px"
      }}
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;