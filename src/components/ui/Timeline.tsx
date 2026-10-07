import { FiMapPin } from "react-icons/fi";
import type { TimelineItem } from "../../data/home";
import Reveal from "./Reveal";

/**
 * Vertical timeline. The line draws from the top when it comes into view and
 * the milestones appear one by one; the last one is highlighted.
 */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const last = items.length - 1;

  return (
    <Reveal>
      <ol className="relative m-0 list-none p-0 pl-10">
        <span
          aria-hidden="true"
          className="tl-line absolute top-2 bottom-2 left-[7px] w-0.5 bg-verde-escuro/20"
        />
        {items.map((item, i) => (
          <Reveal as="li" key={item.year} delay={0.2 + i * 0.15} className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-10 h-4 w-4 rounded-full border-[3px] border-verde-escuro ${
                i === last ? "bg-verde-lima" : "bg-branco"
              }`}
            />
            <span className="block text-[1.6rem] leading-none font-extrabold tracking-[-.02em] text-verde-escuro">
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
