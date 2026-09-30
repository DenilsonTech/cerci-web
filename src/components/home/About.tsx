import { FiMapPin } from "react-icons/fi";
import { about } from "../../data/home";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { btn, section, wrap } from "../ui/styles";

export default function About() {
  const last = about.timeline.length - 1;

  return (
    <section id="sobre" className={section}>
      <div className={wrap}>
        <SectionHeader title={about.title} lede={about.lede} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="group overflow-hidden rounded-2xl">
            <img
              src={about.photo.src}
              alt={about.photo.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.04]"
            />
          </Reveal>

          <div>
            <Reveal>
              <ol className="relative m-0 list-none p-0 pl-10">
                {/* The line draws from the top when the list comes into view */}
                <span
                  aria-hidden="true"
                  className="tl-line absolute top-2 bottom-2 left-[7px] w-0.5 bg-verde-escuro/20"
                />
                {about.timeline.map((item, i) => (
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

            <Reveal delay={0.8} className="mt-9">
              <a href={about.action.href} className={btn.outline}>
                {about.action.label}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
