import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type Props = {
  as?: "div" | "li" | "p" | "h2";
  /** Seconds, to stagger siblings */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Rises into place the first time it scrolls into view. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
