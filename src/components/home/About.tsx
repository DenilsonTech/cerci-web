import { about } from "../../data/home";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import Timeline from "../ui/Timeline";
import { btn, section, wrap } from "../ui/styles";

export default function About() {
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
            <Timeline items={about.timeline} />

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
