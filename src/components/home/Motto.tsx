import { useEffect, useRef, useState } from "react";
import { motto } from "../../data/home";
import Emphasis from "../ui/Emphasis";
import Reveal from "../ui/Reveal";

export default function Motto() {
  const sectionRef = useRef<HTMLElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const frame = windowRef.current;
      if (!section || !frame) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - frame.offsetHeight);
      const start = window.innerHeight * 0.15;
      const next = (start - rect.top) / distance;

      setProgress(Math.max(0, Math.min(1, next)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Lema da CERCI"
      className="relative mx-2.5 h-[190vh] sm:mx-4"
    >
      <div
        ref={windowRef}
        className="sticky top-[15vh] h-[min(70vh,560px)] min-h-[350px] overflow-hidden rounded-2xl"
      >
        <img
          src={motto.photo.src}
          alt={motto.photo.alt}
          className="absolute inset-0 h-[150%] w-full object-cover"
          style={{ transform: `translateY(${-progress * 33.333}%)` }}
        />

        <div className="relative z-[2] flex h-full items-center px-7">
          <Reveal
            as="p"
            className="m-0 max-w-[22ch] text-[clamp(1.7rem,3.6vw,2.7rem)] leading-[1.2] font-light tracking-[-.02em] text-branco text-shadow-lg text-shadow-preto/50"
          >
            <Emphasis text={motto.text} dark />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
