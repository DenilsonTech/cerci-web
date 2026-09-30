import { useCallback, useState } from "react";

/**
 * Reports once when an element first enters the viewport. Returns a callback
 * ref, so it works on any element type.
 */
export function useInView<T extends Element>(threshold = 0.1) {
  const [inView, setInView] = useState(false);

  const ref = useCallback(
    (el: T | null) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold }
      );
      io.observe(el);
      return () => io.disconnect();
    },
    [threshold]
  );

  return [ref, inView] as const;
}
