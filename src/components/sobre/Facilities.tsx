import { FiCheck } from "react-icons/fi";
import { facilities } from "../../data/about";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function Facilities() {
  return (
    <section id={facilities.id} className={`${section} scroll-mt-28`}>
      <div className={wrap}>
        <SectionHeader title={facilities.title} lede={facilities.lede} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {facilities.groups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={groupIndex * 0.08}
              className="rounded-2xl border border-preto/10 border-t-4 border-t-verde-escuro bg-branco p-6"
            >
              <h3 className="mb-5 mt-0 text-lg font-extrabold text-verde-escuro">{group.title}</h3>
              <ul className="m-0 grid list-none gap-3 p-0">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-preto/75">
                    <FiCheck className="mt-1 shrink-0 text-verde-escuro" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
