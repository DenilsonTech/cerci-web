import type { Photo } from "../../data/home";
import Emphasis from "./Emphasis";
import Reveal from "./Reveal";

type Props = {
  /** Anchor, for links like /servicos/#fisioterapia */
  id: string;
  /** Small label above the title, e.g. "Serviço 01" */
  kicker: string;
  /** Title with **bold** words */
  heading: string;
  paragraphs: string[];
  image: Photo;
  /** Image on the right instead of the left */
  flip?: boolean;
  /** First on the page: load the image straight away */
  eager?: boolean;
};

/** Photo beside a titled text; long lists alternate the sides with `flip`. */
export default function SplitArticle({ id, kicker, heading, paragraphs, image, flip = false, eager = false }: Props) {
  return (
    <article id={id} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="group overflow-hidden rounded-2xl border border-preto/10 bg-branco">
          <img
            src={image.src}
            alt={image.alt}
            loading={eager ? "eager" : "lazy"}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.04]"
          />
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <span className="text-[.8rem] font-bold tracking-[.14em] text-verde-escuro uppercase">{kicker}</span>
        <h2 className="mt-2 mb-5 text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.2] font-light tracking-[-.02em]">
          <Emphasis text={heading} />
        </h2>
        <div className="grid gap-4 border-l-2 border-verde-lima pl-5 text-[.98rem] text-preto/75">
          {paragraphs.map((p, j) => (
            <p key={j} className="m-0">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
