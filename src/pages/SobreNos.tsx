import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import History from "../components/sobre/History";
import Facilities from "../components/sobre/Facilities";
import Organization from "../components/sobre/Organization";
import Values from "../components/sobre/Values";
import VisionMission from "../components/sobre/VisionMission";
import WhoWeAre from "../components/sobre/WhoWeAre";
import CtaBand from "../components/ui/CtaBand";
import Gallery from "../components/ui/Gallery";
import Section from "../components/ui/Section";
import {
  aboutCta,
  aboutPage,
  facilities,
  history,
  memories,
  organization,
  values,
  visionMission,
  whoWeAre,
} from "../data/about";

export default function SobreNos() {
  return (
    <>
      <PageHeader
        {...aboutPage}
        links={[
          { href: `#${whoWeAre.id}`, label: "Quem somos" },
          { href: `#${history.id}`, label: "A nossa história" },
          { href: `#${memories.id}`, label: "Memórias" },
          { href: `#${visionMission.id}`, label: "Visão e missão" },
          { href: `#${values.id}`, label: "Valores" },
          { href: `#${organization.id}`, label: "Organograma" },
          { href: `#${facilities.id}`, label: "Instalações" },
        ]}
      />
      <main id="conteudo">
        <WhoWeAre />
        <History />
        <Section id={memories.id} title={memories.title} lede={memories.lede} tinted>
          <Gallery items={memories.gallery} flipItems={memories.flipGallery} />
        </Section>
        <VisionMission />
        <Values />
        <Organization />
        <Facilities />
        <CtaBand {...aboutCta} />
      </main>
      <Footer />
    </>
  );
}
