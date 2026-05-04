import { useState, useRef, useEffect } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [ref, hovered];
}

// 🔹 გამოყენება
function HoverComponent() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? 'Hovered!' : 'Not hovered'}</div>;
}