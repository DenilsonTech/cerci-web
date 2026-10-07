import { FiBookOpen } from "react-icons/fi";
import { embraceRoom } from "../../data/projects";
import FeatureGrid from "../ui/FeatureGrid";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function EmbraceRoom() {
  return (
    <section id={embraceRoom.slug} className={`${section} scroll-mt-28 bg-verde-lima/10`}>
      <div className={wrap}>
        <SectionHeader title={embraceRoom.title} lede={embraceRoom.lede} />

        <p className="mt-12 mb-0 text-center text-[.8rem] font-bold tracking-[.14em] text-verde-escuro uppercase">
          Salas já abraçadas
        </p>
        <ul className="mt-5 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5">
          {embraceRoom.rooms.map((room, i) => (
            <Reveal
              as="li"
              key={room}
              delay={i * 0.08}
              className="flex flex-col items-center gap-3 rounded-xl border border-preto/10 bg-branco px-4 py-6 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-verde-escuro"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-verde-escuro text-verde-lima">
                <FiBookOpen size={20} />
              </span>
              <span className="text-[.75rem] font-semibold text-preto/55">Sala</span>
              <span className="-mt-2 text-[.95rem] leading-tight font-extrabold text-verde-escuro">{room}</span>
            </Reveal>
          ))}
        </ul>

        <FeatureGrid items={embraceRoom.items} />
      </div>
    </section>
  );
}
