import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Approach from "../components/servicos/Approach";
import ServiceList from "../components/servicos/ServiceList";
import CtaBand from "../components/ui/CtaBand";
import { enrolCta, servicesList, servicesPage } from "../data/services";

export default function Servicos() {
  return (
    <>
      <PageHeader
        {...servicesPage}
        links={servicesList.map((s) => ({ href: `#${s.slug}`, label: s.title }))}
      />
      <main id="conteudo">
        <ServiceList />
        <Approach />
        <CtaBand {...enrolCta} />
      </main>
      <Footer />
    </>
  );
}
