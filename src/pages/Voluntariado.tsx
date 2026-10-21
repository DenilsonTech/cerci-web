import { FiUser } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import CtaBand from "../components/ui/CtaBand";
import FeatureGrid from "../components/ui/FeatureGrid";
import Gallery from "../components/ui/Gallery";
import MailForm from "../components/ui/MailForm";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { helpAreas, mural, volunteerForm, volunteeringCta, volunteeringPage } from "../data/volunteering";

export default function Voluntariado() {
  return (
    <>
      <PageHeader
        {...volunteeringPage}
        links={[
          { href: `#${mural.id}`, label: "Mural de voluntariado" },
          { href: `#${helpAreas.id}`, label: "Áreas de actuação" },
          { href: `#${volunteerForm.id}`, label: "Fui voluntário" },
        ]}
      />
      <main id="conteudo">
        <Section id={mural.id} title={mural.title} lede={mural.lede}>
          <ul className="mt-[46px] grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {mural.people.map((person, i) => (
              <Reveal
                as="li"
                key={person.name}
                delay={i * 0.06}
                className="flex items-center gap-3.5 rounded-xl border border-preto/10 border-l-4 border-l-verde-lima bg-branco p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-verde-escuro hover:border-l-verde-lima"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-verde-escuro text-verde-lima">
                  <FiUser size={20} />
                </span>
                <span>
                  <strong className="block text-[.92rem] leading-tight font-extrabold text-verde-escuro">
                    {person.name}
                  </strong>
                  <span className="mt-1 block text-[.84rem] text-preto/60">{person.area}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section id={helpAreas.id} title={helpAreas.title} lede={helpAreas.lede} tinted>
          <FeatureGrid items={helpAreas.items} />
          <Gallery items={helpAreas.gallery} />
        </Section>

        <Section id={volunteerForm.id} title={volunteerForm.title} lede={volunteerForm.lede}>
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-xl bg-verde-lima/10 px-6 pt-7 pb-8 sm:px-8">
            <MailForm
              fields={[
                { name: "nome", label: "Nome", autoComplete: "name" },
                { name: "area", label: "Área" },
                { name: "ano", label: "Ano", inputMode: "numeric" },
              ]}
              subject={(v) => `Fui voluntário no CERCI-Maputo — ${v.nome}`}
            />
          </Reveal>
        </Section>

        <CtaBand {...volunteeringCta} />
      </main>
      <Footer />
    </>
  );
}
