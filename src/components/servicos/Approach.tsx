import { approach } from "../../data/services";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

export default function Approach() {
  return (
    <section className={`${section} bg-verde-lima/10`}>
      <div className={wrap}>
        <SectionHeader title={approach.title} lede={approach.lede} />
        <ol className="mt-[46px] grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {approach.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              className="rounded-xl border-t-[3px] border-verde-escuro bg-branco p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-[.8rem] font-bold text-verde-escuro/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 mb-2 text-[1.05rem] font-extrabold">{item.title}</h3>
              <p className="m-0 text-[.9rem] leading-[1.6] text-preto/75">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
