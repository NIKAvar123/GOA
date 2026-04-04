import { useState, useEffect } from "react";

function useDarkMode(defaultMode = false) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : defaultMode;
  });

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#111" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#111";
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return [isDark, toggle];
}

export default useDarkMode;