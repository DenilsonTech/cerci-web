import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { section, wrap } from "./styles";

type Props = {
  id: string;
  title: string;
  lede?: string;
  /** Light green background, to set it apart from its neighbours */
  tinted?: boolean;
  children: ReactNode;
};

/** A page section: centred title and intro, then its content. */
export default function Section({ id, title, lede, tinted = false, children }: Props) {
  return (
    <section id={id} className={`${section} scroll-mt-28 ${tinted ? "section-tint" : ""}`}>
      <div className={wrap}>
        <SectionHeader title={title} lede={lede} />
        {children}
      </div>
    </section>
  );
}
