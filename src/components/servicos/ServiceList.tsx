import { servicesList } from "../../data/services";
import SplitArticle from "../ui/SplitArticle";
import { section, wrap } from "../ui/styles";

/** Every service in full, alternating image and text sides. */
export default function ServiceList() {
  return (
    <section className={section}>
      <div className={`${wrap} grid gap-20 lg:gap-28`}>
        {servicesList.map((service, i) => (
          <SplitArticle
            key={service.slug}
            id={service.slug}
            kicker={`Serviço ${String(i + 1).padStart(2, "0")}`}
            heading={service.heading}
            paragraphs={service.details}
            image={service.image}
            flip={i % 2 === 1}
            eager={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
