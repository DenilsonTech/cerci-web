import { FiCompass, FiTarget } from "react-icons/fi";
import { visionMission } from "../../data/about";
import { photos } from "../../data/photos";
import Reveal from "../ui/Reveal";
import { wrap } from "../ui/styles";

export default function VisionMission() {
  const { vision, mission } = visionMission;

  return (
    <section id={visionMission.id} aria-label="Visão e missão" className="scroll-mt-28 py-6">
      <div className={`${wrap} grid gap-6 lg:grid-cols-2`}>
        <Reveal tabIndex={0} className="group relative isolate overflow-hidden rounded-2xl bg-verde-escuro p-8 text-branco sm:p-10">
          <img src={photos.aulaDeMusica.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-verde-escuro/65 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />
          <div className="relative z-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-lima text-verde-escuro">
            <FiCompass size={22} />
          </span>
          <h2 className="mt-6 mb-3 text-[.85rem] font-bold tracking-[.14em] text-verde-lima uppercase">
            {vision.title}
          </h2>
          <p className="m-0 text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.45] font-light">{vision.text}</p>
          </div>
        </Reveal>

        <Reveal tabIndex={0} delay={0.12} className="group relative isolate overflow-hidden rounded-2xl bg-verde-lima p-8 text-verde-escuro sm:p-10">
          <img src={photos.familiaEquipa.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-verde-escuro/65 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />
          <div className="relative z-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-escuro text-verde-lima">
            <FiTarget size={22} />
          </span>
          <h2 className="mt-6 mb-3 text-[.85rem] font-bold tracking-[.14em] uppercase group-hover:text-branco group-focus-within:text-branco">{mission.title}</h2>
          <p className="m-0 text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.45] font-normal group-hover:text-branco group-focus-within:text-branco">{mission.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
