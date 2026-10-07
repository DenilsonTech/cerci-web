import type { IconType } from "react-icons";
import { FiEye, FiHeart, FiShield, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import { values } from "../../data/about";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

const icons: Record<string, IconType> = {
  heart: FiHeart,
  zap: FiZap,
  eye: FiEye,
  users: FiUsers,
  shield: FiShield,
  trending: FiTrendingUp,
};

export default function Values() {
  return (
    <section id={values.id} className={`${section} scroll-mt-28`}>
      <div className={wrap}>
        <SectionHeader title={values.title} />
        <ul className="mt-[46px] grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.08}
                className="group rounded-xl border border-preto/10 bg-branco p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-verde-escuro hover:shadow-xl hover:shadow-preto/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-verde-lima/25 text-verde-escuro transition-colors duration-300 group-hover:bg-verde-lima">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 mb-2 text-[1.05rem] font-extrabold">{item.title}</h3>
                <p className="m-0 text-[.9rem] leading-[1.6] text-preto/75">{item.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
