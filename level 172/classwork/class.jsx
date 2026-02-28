import { useState, useEffect } from "react";

export default function DebounceExample() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Debounce Example (React)</h2>

      <input
        type="text"
        placeholder="დაიწყე აკრეფა..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        done: {debouncedValue}
      </p>
    </div>
  );
}