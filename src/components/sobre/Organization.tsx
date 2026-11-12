import { organization } from "../../data/about";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { section, wrap } from "../ui/styles";

const node = "rounded-lg px-4 py-3 text-center text-sm font-bold leading-snug shadow-sm";

export default function Organization() {
  return (
    <section id={organization.id} className={`${section} scroll-mt-28 section-tint`}>
      <div className={wrap}>
        <SectionHeader title={organization.title} lede={organization.intro} />

        <div
          role="group"
          aria-label="Organograma da CERCI-Maputo"
          className="mx-auto mt-10 max-w-6xl overflow-x-auto px-1 pb-2"
        >
          <div className="mx-auto min-w-170">
            <Reveal className={`${node} mx-auto w-64 bg-verde-escuro text-branco`}>
              {organization.leadership[0]}
            </Reveal>
            <div aria-hidden="true" className="mx-auto h-8 w-0.5 bg-verde-escuro/60" />
            <Reveal delay={0.08} className={`${node} mx-auto w-48 bg-verde-escuro text-branco`}>
              {organization.leadership[1]}
            </Reveal>

            <div className="relative mx-auto grid max-w-2xl grid-cols-2 gap-6 border-t-2 border-verde-escuro/50 px-8 pt-0">
              {organization.support.map((item, index) => (
                <Reveal
                  key={item}
                  delay={0.12 + index * 0.06}
                  className={`${node} relative -mt-px bg-verde-vivo text-preto before:absolute before:-top-4.5 before:left-1/2 before:h-4.5 before:w-0.5 before:-translate-x-1/2 before:bg-verde-escuro/60`}
                >
                  {item}
                </Reveal>
              ))}
            </div>

            <div aria-hidden="true" className="mx-auto h-8 w-0.5 bg-verde-escuro/60" />
            <div className="relative grid grid-cols-3 gap-6 border-t-2 border-verde-escuro/50 pt-0">
              {organization.departments.map((department, departmentIndex) => (
                <div key={department.title} className="relative min-w-0">
                  <div aria-hidden="true" className="mx-auto h-5 w-0.5 bg-verde-escuro/60" />
                  <Reveal
                    delay={0.18 + departmentIndex * 0.06}
                    className={`${node} flex min-h-14 items-center justify-center bg-verde-escuro px-3 text-branco`}
                  >
                    {department.title}
                  </Reveal>

                  <ul className="relative ml-2 mt-5 grid list-none gap-3 border-l-2 border-verde-escuro/60 py-1 pl-4">
                    {department.units.map((unit, unitIndex) => (
                      <Reveal
                        as="li"
                        key={unit}
                        delay={0.24 + departmentIndex * 0.06 + unitIndex * 0.04}
                        className={`${node} relative bg-verde-vivo/80 text-preto before:absolute before:top-1/2 before:-left-4.5 before:h-0.5 before:w-4.5 before:-translate-y-1/2 before:bg-verde-escuro/60`}
                      >
                        {unit}
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
