import { useRef } from 'react';

export function useFocus() {
  const ref = useRef(null);

  const focus = () => {
    if (ref.current) ref.current.focus();
  };

  return { ref, focus };
}

// 🔹 გამოყენება
function FocusComponent() {
  const { ref, focus } = useFocus();

  return (
    <div>
      <input ref={ref} placeholder="Click button to focus" />
      <button onClick={focus}>Focus Input</button>
    </div>
  );
}