import Emphasis from "./Emphasis";
import Reveal from "./Reveal";
import { btn } from "./styles";

type Link = { label: string; href: string };

type Props = {
  title: string;
  text: string;
  primary: Link;
  secondary?: Link;
};

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

/** Green closing band that asks the visitor to act. */
export default function CtaBand({ title, text, primary, secondary }: Props) {
  return (
    <section aria-label="Apelo à acção" className="mx-2.5 my-14 sm:mx-4 sm:my-[78px]">
      <div className="rounded-2xl bg-verde-escuro px-7 py-14 text-center text-branco sm:py-16">
        <Reveal as="h2" className="m-0 mx-auto max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.22] font-light tracking-[-.02em]">
          <Emphasis text={title} dark dot={false} />
        </Reveal>
        <Reveal as="p" delay={0.1} className="mx-auto mt-4 mb-0 max-w-[58ch] text-branco/85">
          {text}
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={primary.href} className={btn.lime} {...external(primary.href)}>
            {primary.label}
          </a>
          {secondary && (
            <a href={secondary.href} className={btn.glass} {...external(secondary.href)}>
              {secondary.label}
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
