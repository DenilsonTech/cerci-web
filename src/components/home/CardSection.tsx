import type { Action, CardItem } from "../../data/home";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { btn, section, wrap } from "../ui/styles";

type Props = {
  id: string;
  title: string;
  lede: string;
  items: CardItem[];
  /** Link under the cards to the page with the full list */
  more?: Action;
  /** Tinted background, to separate it from the neighbouring sections */
  tinted?: boolean;
};

/** Heading plus a grid of cards: used by Serviços, Eventos and Apoiar. */
export default function CardSection({ id, title, lede, items, more, tinted = false }: Props) {
  return (
    <section id={id} className={`${section} ${tinted ? "bg-verde-lima/10" : ""}`}>
      <div className={wrap}>
        <SectionHeader title={title} lede={lede} />
        <ul className="mt-[46px] grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.title} item={item} delay={i * 0.1} />
          ))}
        </ul>
        {more && (
          <Reveal className="mt-10 flex justify-center">
            <a href={more.href} className={btn.outline}>
              {more.label}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
