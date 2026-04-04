import { useState, useEffect } from "react";

export function useMedia() {
  const getMatch = () => window.matchMedia("(max-width: 768px)").matches;

  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handler = () => setIsMobile(media.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export default useMedia;