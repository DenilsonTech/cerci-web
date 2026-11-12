import { useEffect, useState } from "react";
import { memories } from "../../data/about";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function Memories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const photos = memories.gallery;

  useEffect(() => {
    if (photos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  return (
    <section id={memories.id} className={section}>
      <div className={wrap}>
        <SectionHeader title={memories.title} lede={memories.lede} />

        <Reveal className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
          {photos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </Reveal>

        <div className="mt-4 flex justify-center gap-2" aria-label="Escolher imagem">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Mostrar imagem ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full border-0 transition-colors ${
                index === activeIndex ? "bg-verde-escuro" : "bg-verde-escuro/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}