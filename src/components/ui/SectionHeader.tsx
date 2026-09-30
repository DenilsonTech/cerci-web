import Emphasis from "./Emphasis";
import Reveal from "./Reveal";
import { headingSection, lede as ledeClass } from "./styles";

type Props = {
  title: string;
  lede?: string;
  /** Small label above the title */
  eyebrow?: string;
};

/** Centred title and intro that open most sections. */
export default function SectionHeader({ title, lede, eyebrow }: Props) {
  return (
    <div className="text-center">
      {eyebrow && (
        <Reveal
          as="p"
          className="m-0 mb-3 text-[.8rem] font-bold tracking-[.14em] text-verde-escuro uppercase"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className={headingSection}>
        <Emphasis text={title} />
      </Reveal>
      {lede && (
        <Reveal as="p" delay={0.09} className={ledeClass}>
          {lede}
        </Reveal>
      )}
    </div>
  );
}
