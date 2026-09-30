import { servicesList } from "../../data/services";
import Emphasis from "../ui/Emphasis";
import Reveal from "../ui/Reveal";
import { section, wrap } from "../ui/styles";

/** Every service in full, alternating image and text sides. */
export default function ServiceList() {
  return (
    <section className={section}>
      <div className={`${wrap} grid gap-20 lg:gap-28`}>
        {servicesList.map((service, i) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="group overflow-hidden rounded-2xl border border-preto/10 bg-branco">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <span className="text-[.8rem] font-bold tracking-[.14em] text-verde-escuro uppercase">
                Serviço {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 mb-5 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.2] font-light tracking-[-.02em]">
                <Emphasis text={service.heading} />
              </h2>
              <div className="grid gap-4 border-l-2 border-verde-lima pl-5 text-[.98rem] text-preto/75">
                {service.details.map((p, j) => (
                  <p key={j} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
