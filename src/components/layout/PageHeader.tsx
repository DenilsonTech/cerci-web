import { useRef, type CSSProperties } from "react";
import Emphasis from "../ui/Emphasis";
import { headingDisplay } from "../ui/styles";
import Navbar from "./Navbar";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const grid =
  "bg-[linear-gradient(var(--color-branco)_1px,transparent_1px),linear-gradient(90deg,var(--color-branco)_1px,transparent_1px)] bg-[size:44px_44px]";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  /** Jump links to sections of the page */
  links?: { href: string; label: string }[];
};

/**
 * Top of the inner pages. Same frame and navbar as the home hero, shorter,
 * with the page title instead of a photo.
 */
export default function PageHeader({ eyebrow, title, lede, links }: Props) {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <div id="topo" className="px-2.5 pt-2.5 sm:px-4 sm:pt-4">
      <header
        ref={headerRef}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-verde-escuro to-preto px-6 pt-36 pb-16 text-branco sm:px-10"
      >
        <div className={`ken absolute inset-0 opacity-10 ${grid}`} />

        <Navbar heroRef={headerRef} />

        <div className="relative z-[2] mx-auto max-w-[1180px]">
          <p
            className="enter m-0 mb-3 text-[.8rem] font-bold tracking-[.14em] text-verde-lima uppercase"
            style={delay(0.1)}
          >
            {eyebrow}
          </p>
          <h1 className={`enter ${headingDisplay}`} style={delay(0.2)}>
            <Emphasis text={title} dark />
          </h1>
          <p className="enter mt-4 mb-0 max-w-[60ch] text-[1.05rem] text-branco/85" style={delay(0.34)}>
            {lede}
          </p>

          {links && (
            <ul className="enter m-0 mt-8 flex list-none flex-wrap gap-2.5 p-0" style={delay(0.48)}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block rounded-full border border-branco/35 px-4 py-2 text-[.86rem] font-medium text-branco no-underline transition-colors duration-200 hover:border-verde-lima hover:bg-verde-lima hover:text-verde-escuro"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}
