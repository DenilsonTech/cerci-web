import { useEffect, useState, type RefObject } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { brand, navLinks } from "../../data/site";
import { btn } from "../ui/styles";

type Props = {
  /** The bar sits at the top of the hero and pins itself once scrolled past */
  heroRef: RefObject<HTMLElement | null>;
};

export default function Navbar({ heroRef }: Props) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  // "/servicos", "/servicos/" and "/servicos/index.html" are the same page
  const current = window.location.pathname.replace(/index\.html$/, "").replace(/\/?$/, "/");

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      // Pin as soon as the bar would scroll out of view, so the menu is
      // always reachable
      if (hero) setStuck(window.scrollY > hero.offsetTop + 80);
    };
    // No initial call: when the browser restores a scroll position it fires
    // a scroll event, which sets the right state.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRef]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`inset-x-0 top-0 z-30 flex items-center gap-[26px] bg-verde-lima px-4 py-3 sm:px-[26px] ${
        stuck ? "drop-in fixed shadow-md shadow-preto/10" : "fade-in absolute"
      }`}
    >
      <button
        type="button"
        className="cursor-pointer rounded-md border border-verde-escuro/40 p-2 text-verde-escuro transition-colors hover:border-verde-escuro lg:hidden"
        aria-expanded={open}
        aria-controls="nav-principal"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>

      <a href="/" className="shrink-0" aria-label={`${brand.name} — início`}>
        <img src="/logo-web.webp" alt={brand.name} className="h-14 w-auto" />
      </a>

      <nav
        id="nav-principal"
        aria-label="Navegação principal"
        className={`${
          open ? "flex" : "hidden"
        } absolute inset-x-0 top-full flex-col gap-3.5 bg-verde-lima px-6 py-[18px] shadow-md shadow-preto/10 lg:static lg:ml-auto lg:flex lg:flex-row lg:gap-6 lg:p-0 lg:shadow-none`}
      >
        {navLinks.map((link) => {
          const isCurrent = link.href === current;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isCurrent ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`relative self-start px-0.5 py-[5px] text-[.9rem] font-medium text-verde-escuro no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-verde-escuro after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isCurrent ? "font-bold after:scale-x-100" : "after:scale-x-0"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a href="/#contactos" className={`ml-auto hidden sm:inline-block lg:ml-0 ${btn.accent}`}>
        Fale connosco
      </a>
    </div>
  );
}
