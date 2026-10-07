import { history } from "../../data/about";
import Emphasis from "../ui/Emphasis";
import Reveal from "../ui/Reveal";
import Timeline from "../ui/Timeline";
import { headingSection, section, wrap } from "../ui/styles";

export default function History() {
  return (
    <section id={history.id} className={`${section} scroll-mt-28`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16`}>
        <div>
          <Reveal as="h2" className={headingSection}>
            <Emphasis text={history.title} />
          </Reveal>
          <div className="mt-6 grid gap-4 border-l-2 border-verde-lima pl-5 text-[1rem] text-preto/75">
            {history.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={0.1 + i * 0.1} className="m-0">
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="group mt-10 overflow-hidden rounded-2xl">
            <img
              src={history.photo.src}
              alt={history.photo.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.04]"
            />
          </Reveal>
        </div>

        <div className="lg:pt-24">
          <Timeline items={history.timeline} />
        </div>
      </div>
    </section>
  );
}
