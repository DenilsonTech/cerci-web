import { testimonials } from "../../data/home";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import YouTubeVideo from "../ui/YouTubeVideo";
import { section, wrap } from "../ui/styles";

export default function Testimonials() {
  return (
    <section id="testemunhos" className={section}>
      <div className={wrap}>
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <Reveal
          delay={0.15}
          className="relative mx-auto mt-11.5 aspect-video w-full max-w-[820px] overflow-hidden rounded-2xl border border-verde-vivo/30 shadow-xl shadow-preto/15"
        >
          <YouTubeVideo {...testimonials.video} />
        </Reveal>
      </div>
    </section>
  );
}
