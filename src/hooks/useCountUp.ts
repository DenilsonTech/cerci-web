import { useEffect, useState } from "react";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Counts from 0 to `end` with an ease-out once `start` becomes true. */
export function useCountUp(end: number, start: boolean, duration = 1100) {
  const [value, setValue] = useState(() => (reducedMotion() ? end : 0));

  useEffect(() => {
    if (!start || reducedMotion()) return;
    let frame = 0;
    let t0: number | null = null;

    const step = (ts: number) => {
      t0 ??= ts;
      const p = Math.min((ts - t0) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration]);

  return value;
}
