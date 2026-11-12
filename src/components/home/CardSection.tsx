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
  more?: Action;
  tinted?: boolean;
};

export default function CardSection({ id, title, lede, items, more, tinted = false }: Props) {
  return (
    <section id={id} className={`${section} ${tinted ? "section-tint" : ""}`}>
      <div className={wrap}>
        <SectionHeader title={title} lede={lede} />
        <ul className="mt-[46px] grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const gallery = [
              ...(item.src
                ? [{
                    src: item.src,
                    alt: item.image,
                    title: item.title,
                    description: item.details ?? item.text,
                  }]
                : []),
              ...(item.gallery ?? []),
            ];

            return (
              <Card
                key={item.title}
                item={item}
                delay={index * 0.1}
                gallery={gallery}
              />
            );
          })}
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
