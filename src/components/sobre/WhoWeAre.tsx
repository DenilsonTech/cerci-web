import { FiMapPin, FiUsers } from "react-icons/fi";
import { whoWeAre } from "../../data/about";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function WhoWeAre() {
  return (
    <section id={whoWeAre.id} className={`${section} scroll-mt-28`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center`}>
        <div>
          <SectionHeader title={whoWeAre.title} />
          <div className="mt-6 max-w-3xl space-y-4 text-preto/75">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>

        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex items-center gap-4 rounded-2xl bg-verde-escuro p-5 text-branco">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-verde-lima text-verde-escuro">
              <FiUsers size={22} />
            </span>
            <span>
              <strong className="block text-xl font-extrabold">Desde 2002</strong>
              <span className="text-sm text-branco/80">educação, reabilitação e inclusão</span>
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-verde-lima p-5 text-verde-escuro">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-verde-escuro text-verde-lima">
              <FiMapPin size={22} />
            </span>
            <span>
              <strong className="block text-lg font-extrabold">Av. Milagre Mabote, n.º 238</strong>
              <span className="text-sm">Maputo, Moçambique</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
