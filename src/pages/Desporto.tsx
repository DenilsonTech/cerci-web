import { FiActivity, FiHeart, FiUsers } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { wrap } from "../components/ui/styles";
import { sportPage } from "../data/sport";
import SportGallery from "../components/desporto/SportGallery";

const highlights = [
  { icon: FiActivity, title: "Movimento", text: "Actividade física adaptada às capacidades de cada pessoa." },
  { icon: FiHeart, title: "Bem-estar", text: "Mais confiança, autonomia e prazer em participar." },
  { icon: FiUsers, title: "Participação", text: "Conquistas que se vivem em equipa e com a comunidade." },
];

export default function Desporto() {
  return (
    <>
      <PageHeader
        {...sportPage}
        links={sportPage.sections.map((item) => ({ href: `#${item.id}`, label: item.id === "judo" ? "Judo" : "Basquetebol" }))}
      />
      <main id="conteudo">
        <section className="section-tint py-12 sm:py-16">
          <div className={`${wrap} grid gap-5 md:grid-cols-3`}>
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-verde-vivo/30 bg-branco/90 p-6 shadow-sm shadow-verde-escuro/5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-verde-vivo/20 text-verde-escuro">
                  <Icon size={22} />
                </span>
                <h2 className="mb-2 mt-4 text-lg font-extrabold text-verde-escuro">{title}</h2>
                <p className="m-0 text-sm leading-relaxed text-preto/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {sportPage.sections.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className={`scroll-mt-28 py-14 sm:py-[78px] ${index === 1 ? "section-tint" : "bg-branco"}`}
          >
            <div className={wrap}>
              <SectionHeader eyebrow={`Modalidade · 0${index + 1}`} title={item.title} lede={item.lede} />
              <SportGallery photos={item.photos} />
            </div>
          </section>
        ))}

        <section className="bg-verde-escuro py-12 text-branco sm:py-16">
          <div className={`${wrap} grid gap-5 md:grid-cols-[1fr_auto] md:items-center`}>
            <div>
              <p className="m-0 text-xs font-bold tracking-[.16em] text-verde-vivo uppercase">Cada pessoa conta</p>
              <h2 className="mb-2 mt-2 text-2xl font-extrabold sm:text-3xl">Desporto com espaço para todos</h2>
              <p className="m-0 max-w-2xl text-sm leading-relaxed text-branco/80">
                Partilhamos estes momentos para celebrar participação, esforço e alegria. Quer apoiar as actividades da CERCI? Fale connosco.
              </p>
            </div>
            <a href="/#contactos" className="inline-flex w-fit items-center rounded-md bg-verde-vivo px-5 py-3 font-bold text-verde-escuro no-underline transition-transform hover:-translate-y-0.5">
              Contactar a CERCI
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
