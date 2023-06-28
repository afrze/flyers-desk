import { useEffect, useState } from "react";

export default function useWindowSize() {
  /* This is to amke sure that hooks works even if SSR is enabled */
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 900 : window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);

  return windowSize
}
