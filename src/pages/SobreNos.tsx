import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import History from "../components/sobre/History";
import Values from "../components/sobre/Values";
import VisionMission from "../components/sobre/VisionMission";
import CtaBand from "../components/ui/CtaBand";
import { aboutCta, aboutPage, history, values, visionMission } from "../data/about";

export default function SobreNos() {
  return (
    <>
      <PageHeader
        {...aboutPage}
        links={[
          { href: `#${history.id}`, label: "A nossa história" },
          { href: `#${visionMission.id}`, label: "Visão e missão" },
          { href: `#${values.id}`, label: "Valores" },
        ]}
      />
      <main id="conteudo">
        <History />
        <VisionMission />
        <Values />
        <CtaBand {...aboutCta} />
      </main>
      <Footer />
    </>
  );
}
