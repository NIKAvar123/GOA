import { useEffect, useRef } from 'react';

export function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.addEventListener ? element : window;
    if (!targetElement) return;

    const eventListener = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);
    return () => targetElement.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}

function KeyPressComponent() {
  useEventListener('keydown', (e) => console.log('Key pressed:', e.key));
  return <div>Press any key</div>;
}