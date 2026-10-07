import { FiCompass, FiTarget } from "react-icons/fi";
import { visionMission } from "../../data/about";
import Reveal from "../ui/Reveal";
import { wrap } from "../ui/styles";

export default function VisionMission() {
  const { vision, mission } = visionMission;

  return (
    <section id={visionMission.id} aria-label="Visão e missão" className="scroll-mt-28 py-6">
      <div className={`${wrap} grid gap-6 lg:grid-cols-2`}>
        <Reveal className="rounded-2xl bg-verde-escuro p-8 text-branco sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-lima text-verde-escuro">
            <FiCompass size={22} />
          </span>
          <h2 className="mt-6 mb-3 text-[.85rem] font-bold tracking-[.14em] text-verde-lima uppercase">
            {vision.title}
          </h2>
          <p className="m-0 text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.45] font-light">{vision.text}</p>
        </Reveal>

        <Reveal delay={0.12} className="rounded-2xl bg-verde-lima p-8 text-verde-escuro sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-escuro text-verde-lima">
            <FiTarget size={22} />
          </span>
          <h2 className="mt-6 mb-3 text-[.85rem] font-bold tracking-[.14em] uppercase">{mission.title}</h2>
          <p className="m-0 text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.45] font-normal">{mission.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
