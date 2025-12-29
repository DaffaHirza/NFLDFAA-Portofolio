import { useEffect, useState, useRef } from "react";

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Detect when scrolling stops
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const getTranslateY = (threshold: number) => {
    const progress = Math.max(0, Math.min(1, (scrollY - threshold) / 500));
    return progress * 100;
  };

  const getScale = (threshold: number) => {
    const progress = Math.max(0, Math.min(1, (scrollY - threshold) / 500));
    return 1 - progress * 0.08;
  };

  return { scrollY, getTranslateY, getScale, isScrolling };
}
