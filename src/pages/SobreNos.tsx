import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import History from "../components/sobre/History";
import Values from "../components/sobre/Values";
import VisionMission from "../components/sobre/VisionMission";
import CtaBand from "../components/ui/CtaBand";
import Gallery from "../components/ui/Gallery";
import Section from "../components/ui/Section";
import { aboutCta, aboutPage, history, memories, values, visionMission } from "../data/about";

export default function SobreNos() {
  return (
    <>
      <PageHeader
        {...aboutPage}
        links={[
          { href: `#${history.id}`, label: "A nossa história" },
          { href: `#${memories.id}`, label: "Memórias" },
          { href: `#${visionMission.id}`, label: "Visão e missão" },
          { href: `#${values.id}`, label: "Valores" },
        ]}
      />
      <main id="conteudo">
        <History />
        <Section id={memories.id} title={memories.title} lede={memories.lede} tinted>
          <Gallery items={memories.gallery} />
        </Section>
        <VisionMission />
        <Values />
        <CtaBand {...aboutCta} />
      </main>
      <Footer />
    </>
  );
}
