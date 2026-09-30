import type { IconType } from "react-icons";
import { FiClock, FiHeart, FiHome, FiUsers } from "react-icons/fi";
import { impact } from "../../data/home";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import Emphasis from "../ui/Emphasis";
import Backdrop from "../ui/Backdrop";
import Reveal from "../ui/Reveal";
import { headingSection } from "../ui/styles";

const icons: Record<string, IconType> = {
  users: FiUsers,
  heart: FiHeart,
  clock: FiClock,
  home: FiHome,
};

function StatNumber({ value, animate }: { value: number; animate: boolean }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const counted = useCountUp(value, inView);

  return (
    <span ref={ref} className="block text-[2.1rem] leading-[1.1] font-extrabold">
      {animate ? counted : value}
    </span>
  );
}

export default function Impact() {
  return (
    <section
      id="impacto"
      aria-labelledby="t-impacto"
      className="relative mx-2.5 scroll-mt-20 overflow-hidden rounded-2xl px-7 py-[76px] sm:mx-4"
    >
      <Backdrop photo={impact.photo} label={impact.image} ken="34s" />
      <div className="absolute inset-0 bg-preto/50" />

      <div className="relative z-[2] mx-auto max-w-[1180px]">
        <Reveal as="h2" className={`${headingSection} mb-[52px] text-center text-branco`}>
          <span id="t-impacto">
            <Emphasis text={impact.title} dark />
          </span>
        </Reveal>

        <ul className="m-0 grid list-none grid-cols-1 gap-5 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {impact.stats.map((stat, i) => {
            const Icon = icons[stat.icon];
            return (
              <Reveal
                as="li"
                key={stat.label}
                delay={i * 0.11}
                className="relative rounded-xl border border-verde-lima/50 bg-verde-escuro/35 px-[18px] pt-11 pb-6 text-center text-branco backdrop-blur-[7px]"
              >
                <span
                  className="pop-icon absolute -top-[23px] left-1/2 grid h-[46px] w-[46px] place-items-center rounded-full bg-verde-lima shadow-lg shadow-preto/30"
                  aria-hidden="true"
                >
                  <Icon size={20} className="text-verde-escuro" />
                </span>
                <StatNumber value={stat.value} animate={!stat.static} />
                <span className="mt-1 block text-[.83rem] text-branco/90">{stat.label}</span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
