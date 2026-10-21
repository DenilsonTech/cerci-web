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
        <ul className="mt-5 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {embraceRoom.rooms.map((room, i) => (
            <Reveal
              as="li"
              key={room.name}
              delay={i * 0.08}
              className="group overflow-hidden rounded-xl border border-preto/10 bg-branco transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-verde-escuro"
            >
              <div className="aspect-[3/4] overflow-hidden">
                {/* Top of the photo: the sponsor's sign above the door */}
                <img
                  src={room.photo.src}
                  alt={room.photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.05]"
                />
              </div>
              <div className="px-3 py-3.5 text-center">
                <span className="block text-[.72rem] font-semibold text-preto/55">Sala</span>
                <span className="block text-[.92rem] leading-tight font-extrabold text-verde-escuro">{room.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <FeatureGrid items={embraceRoom.items} />
      </div>
    </section>
  );
}
