import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { history } from "../../data/about";
import Emphasis from "../ui/Emphasis";
import Reveal from "../ui/Reveal";
import Timeline from "../ui/Timeline";
import { headingSection, section, wrap } from "../ui/styles";

const detailsByYear: Record<string, string> = {
  "2002":
    "A CERCI foi formalmente criada como associação por pais e encarregados de educação de crianças com necessidades educativas especiais que frequentavam a CEPOP e pelos técnicos desta instituição.",
  "2005":
    "A CERCI passou a exercer as suas actividades na FACIM, nas instalações da antiga escola Portuguesa, onde funcionou durante cinco anos.",
  "2010":
    "A CERCI passou a exercer as suas actividades numa residência arrendada na Avenida Kwame Nkrumah, onde funcionou até finais de 2016.",
  "2016":
    "A CERCI inaugurou instalações próprias, fruto de um longo percurso de trabalho: obtenção do terreno, parcerias para os projectos de arquitectura e engenharia e mobilização de apoios para a construção e funcionamento do edifício. Hoje conta com 64 utentes.",
};

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const columnRef = useRef<HTMLDivElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef(0);

  // Centra o bloco no ponto indicado, sem sair da coluna
  const place = useCallback((center: number) => {
    const column = columnRef.current;
    const block = blockRef.current;
    if (!column || !block) return;

    if (!window.matchMedia("(min-width: 1024px)").matches) {
      block.style.transform = "none";
      return;
    }

    const max = Math.max(0, column.offsetHeight - block.offsetHeight);
    const y = Math.min(max, Math.max(0, center - block.offsetHeight / 2));
    block.style.transform = `translateY(${Math.round(y)}px)`;
  }, []);

  const onActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const onCenterChange = useCallback(
    (center: number) => {
      centerRef.current = center;
      place(center);
    },
    [place],
  );

  // O conteúdo muda de altura com o ano, por isso volta a centrar
  useLayoutEffect(() => {
    place(centerRef.current);
  }, [activeIndex, place]);

  const activeItem = history.timeline[activeIndex];
  const detail = activeItem
    ? detailsByYear[activeItem.year] ?? activeItem.text
    : "";

  return (
    <section id={history.id} className={`${section} scroll-mt-28`}>
      <div className={`${wrap} pb-[45vh]`}>
        <Reveal as="h2" className={headingSection}>
          <Emphasis text={history.title} />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div ref={columnRef} className="relative">
            <div
              ref={blockRef}
              className="will-change-transform lg:absolute lg:inset-x-0 lg:top-0"
            >
              {activeItem && (
                <div key={activeItem.year} aria-live="polite">
                  <div className="border-l-2 border-verde-lima pl-5 text-[1rem] leading-relaxed text-preto/75">
                    <h3 className="mb-3 text-xl font-bold text-verde-escuro">
                      {activeItem.year}
                    </h3>
                    <p className="m-0">{detail}</p>
                  </div>

                  <div className="relative mt-5 aspect-[16/10] w-[85%] max-w-lg overflow-hidden rounded-2xl bg-verde-lima/20">
                    {history.timeline.map((item, index) => {
                      const isVisible = (hoveredIndex ?? activeIndex) === index;
                      if (!item.photo) {
                        return (
                          <div
                            key={item.year}
                            aria-hidden={!isVisible}
                            className={`absolute inset-0 grid place-items-center bg-verde-lima/15 p-8 text-center transition-opacity duration-700 ease-in-out ${
                              isVisible ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <span className="max-w-xs text-sm font-semibold text-verde-escuro">
                              Fotografia de 2002 por adicionar
                            </span>
                          </div>
                        );
                      }

                      const photo = item.photo;
                      return (
                        <img
                          key={item.year}
                          src={photo.src}
                          alt={isVisible ? photo.alt : ""}
                          aria-hidden={!isVisible}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = history.photo.src;
                          }}
                          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-in-out ${
                            isVisible ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <Timeline
              items={history.timeline}
              onActiveChange={onActiveChange}
              onCenterChange={onCenterChange}
              onItemHover={setHoveredIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}