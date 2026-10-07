import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import EmbraceRoom from "../components/projectos/EmbraceRoom";
import ProjectList from "../components/projectos/ProjectList";
import CtaBand from "../components/ui/CtaBand";
import { embraceRoom, projectsCta, projectsList, projectsPage } from "../data/projects";

export default function Projectos() {
  return (
    <>
      <PageHeader
        {...projectsPage}
        links={[
          ...projectsList.map((p) => ({ href: `#${p.slug}`, label: p.title })),
          { href: `#${embraceRoom.slug}`, label: "Abrace uma Sala" },
        ]}
      />
      <main id="conteudo">
        <ProjectList />
        <EmbraceRoom />
        <CtaBand {...projectsCta} />
      </main>
      <Footer />
    </>
  );
}
