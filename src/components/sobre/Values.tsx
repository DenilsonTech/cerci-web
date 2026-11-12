import type { IconType } from "react-icons";
import { FiEye, FiHeart, FiShield, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import { values } from "../../data/about";
import { photos } from "../../data/photos";
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

const valuePhotos = [
  photos.familiaEquipa,
  photos.pinturaMural,
  photos.salaDeActividades,
  photos.rodaArLivre,
  photos.tecnicoEUtente,
  photos.actividadesLaborais,
];

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
                tabIndex={0}
                delay={i * 0.08}
                className="group relative isolate overflow-hidden rounded-xl border border-preto/10 bg-branco p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-verde-escuro hover:shadow-xl hover:shadow-preto/10"
              >
                <img src={valuePhotos[i].src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-verde-escuro/70 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />
                <div className="relative z-10">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-verde-lima/25 text-verde-escuro transition-colors duration-300 group-hover:bg-verde-lima group-hover:text-verde-escuro">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 mb-2 text-[1.05rem] font-extrabold transition-colors duration-500 group-hover:text-branco group-focus-within:text-branco">{item.title}</h3>
                <p className="m-0 text-[.9rem] leading-[1.6] text-preto/75 transition-colors duration-500 group-hover:text-branco group-focus-within:text-branco">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
