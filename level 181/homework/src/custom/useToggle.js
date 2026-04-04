import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(prev => !prev);

  return { value, toggleValue };
}