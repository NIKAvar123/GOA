import { useState, useEffect, useRef } from 'react';

export function useThrottle(value, delay = 200) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastCall = useRef(0);

  useEffect(() => {
    const now = Date.now();
    if (now - lastCall.current > delay) {
      setThrottledValue(value);
      lastCall.current = now;
    }
  }, [value, delay]);

  return throttledValue;
}


import { useState } from 'react';

function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 100);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>ScrollY: {throttledScrollY}</div>;
}