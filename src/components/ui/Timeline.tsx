import { useEffect, useRef, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import type { TimelineItem } from "../../data/home";
import Reveal from "./Reveal";

type Props = {
  items: TimelineItem[];
  onActiveChange?: (index: number) => void;
  onCenterChange?: (center: number) => void;
  onItemHover?: (index: number | null) => void;
};

export default function Timeline({
  items,
  onActiveChange,
  onCenterChange,
  onItemHover,
}: Props) {
  const yearRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const anchorY = window.innerHeight * 0.5;
      let nextIndex = 0;

      yearRefs.current.forEach((yearRef, index) => {
        if (yearRef && yearRef.getBoundingClientRect().top <= anchorY) {
          nextIndex = index;
        }
      });

      if (nextIndex !== activeRef.current) {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
        onActiveChange?.(nextIndex);
      }

      // Centro de cada item, medido a partir do topo da lista
      const centerOf = (index: number) => {
        const item = yearRefs.current[index]?.parentElement;
        return item ? item.offsetTop + item.offsetHeight / 2 : 0;
      };
      const topOf = (index: number) =>
        yearRefs.current[index]?.getBoundingClientRect().top ?? 0;

      // Posição entre o item ativo e o seguinte (0 a 1), para deslizar
      let center = centerOf(nextIndex);
      const following = nextIndex + 1;

      if (following < items.length) {
        const span = topOf(following) - topOf(nextIndex);
        const progress =
          span > 0
            ? Math.min(1, Math.max(0, (anchorY - topOf(nextIndex)) / span))
            : 0;
        center += (centerOf(following) - centerOf(nextIndex)) * progress;
      }

      onCenterChange?.(center);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length, onActiveChange, onCenterChange]);

  const lineProgress =
    items.length <= 1 ? 1 : activeIndex / (items.length - 1);

  return (
    <Reveal>
      <ol className="relative m-0 list-none p-0 pl-10">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-verde-escuro/20"
        />
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top bg-verde-escuro transition-transform duration-300"
          style={{ transform: `scaleY(${lineProgress})` }}
        />

        {items.map((item, index) => (
          <Reveal
            as="li"
            key={item.year}
            delay={0.2 + index * 0.15}
            className="relative pb-8 last:pb-0"
            tabIndex={0}
            onMouseEnter={() => onItemHover?.(index)}
            onMouseLeave={() => onItemHover?.(null)}
            onFocus={() => onItemHover?.(index)}
            onBlur={() => onItemHover?.(null)}
          >
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-10 h-4 w-4 rounded-full border-[3px] border-verde-escuro ${
                index <= activeIndex ? "bg-verde-lima" : "bg-branco"
              }`}
            />
            <span
              ref={(node) => {
                yearRefs.current[index] = node;
              }}
              className="block text-[1.6rem] leading-none font-extrabold tracking-[-.02em] text-verde-escuro"
            >
              {item.year}
            </span>
            <span className="mt-1.5 flex items-center gap-1.5 text-[.82rem] font-semibold text-preto/55">
              <FiMapPin size={13} /> {item.place}
            </span>
            <p className="m-0 mt-1.5 text-[.95rem] text-preto/75">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </Reveal>
  );
}