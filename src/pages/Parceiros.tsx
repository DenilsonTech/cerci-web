import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Donations from "../components/parceiros/Donations";
import CtaBand from "../components/ui/CtaBand";
import LogoGrid from "../components/ui/LogoGrid";
import NameList from "../components/ui/NameList";
import Section from "../components/ui/Section";
import {
  contributors,
  donations,
  funders,
  individuals,
  partnersCta,
  partnersPage,
  strategic,
} from "../data/partners";

export default function Parceiros() {
  return (
    <>
      <PageHeader
        {...partnersPage}
        links={[
          { href: `#${strategic.id}`, label: "Parceiros Estratégicos" },
          { href: `#${funders.id}`, label: "Financiadores Correntes" },
          { href: `#${contributors.id}`, label: "Contribuintes" },
          { href: `#${individuals.id}`, label: "Parceiros Individuais" },
          { href: `#${donations.id}`, label: "Informações para Contribuições" },
        ]}
      />
      <main id="conteudo">
        <Section id={strategic.id} title={strategic.title} lede={strategic.lede}>
          <LogoGrid logos={strategic.logos} featured />
        </Section>

        <Section id={funders.id} title={funders.title} lede={funders.lede} tinted>
          <LogoGrid logos={funders.logos} />
        </Section>

        <Section id={contributors.id} title={contributors.title} lede={contributors.lede}>
          <LogoGrid logos={contributors.logos} />
          <NameList names={contributors.names} />
        </Section>

        <Section id={individuals.id} title={individuals.title} lede={individuals.lede} tinted>
          <NameList names={individuals.names} />
        </Section>

        <Donations />
        <CtaBand {...partnersCta} />
      </main>
      <Footer />
    </>
  );
}
