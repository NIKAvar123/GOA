import React from "react";
import useResponsive from "./useResponsive";

export default function TestResponsive() {

  const { width, matches } = useResponsive("(max-width: 768px)");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Responsive Hook Test</h2>

      <p>
        <strong>Screen width:</strong> {width}px
      </p>

      <p>
        <strong>Matches query (max-width: 768px):</strong>{" "}
        {matches ? "Yes " : "No "}
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: matches ? "lightcoral" : "lightgreen",
        }}
      >
        {matches ? "Mobile View" : "Desktop View"}
      </div>
    </div>
  );
}


