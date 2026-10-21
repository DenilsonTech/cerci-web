import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import CtaBand from "../components/ui/CtaBand";
import Gallery from "../components/ui/Gallery";
import SplitArticle from "../components/ui/SplitArticle";
import { section, wrap } from "../components/ui/styles";
import { eventGroups, eventsCta, eventsPage } from "../data/events";

export default function Eventos() {
  return (
    <>
      <PageHeader
        {...eventsPage}
        links={eventGroups.map((g) => ({ href: `#${g.slug}`, label: g.title }))}
      />
      <main id="conteudo">
        {eventGroups.map((group, i) => (
          <section key={group.slug} className={`${section} ${i % 2 === 1 ? "bg-verde-lima/10" : ""}`}>
            <div className={wrap}>
              <SplitArticle
                id={group.slug}
                kicker={group.kicker}
                heading={group.heading}
                paragraphs={group.paragraphs}
                image={group.image}
                flip={i % 2 === 1}
              >
                {group.tags && (
                  <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
                    {group.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-verde-lima/25 px-3.5 py-1.5 text-[.8rem] font-semibold text-verde-escuro"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </SplitArticle>
              <Gallery items={group.gallery} />
            </div>
          </section>
        ))}
        <CtaBand {...eventsCta} />
      </main>
      <Footer />
    </>
  );
}
