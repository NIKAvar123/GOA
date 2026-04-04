import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", null);

  useEffect(() => {
    if (!theme) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default useDarkMode;