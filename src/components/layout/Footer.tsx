import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { brand, contact, footer, navLinks } from "../../data/site";
import Reveal from "../ui/Reveal";
import { wrap } from "../ui/styles";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  x: FaXTwitter,
};

const colTitle = "m-0 mb-3.5 text-[.86rem] font-extrabold";
const colList = "m-0 grid list-none gap-[9px] p-0 text-[.87rem] text-verde-escuro/80";
const colLink = "no-underline hover:text-verde-escuro hover:underline";

export default function Footer() {
  return (
    <footer className="bg-verde-lima pt-[58px] text-verde-escuro">
      <div className={wrap}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-9">
          <Reveal>
            <a href="/" aria-label={`${brand.name} — início`}>
              <img src="/logo-web.webp" alt={brand.name} className="h-24 w-auto" loading="lazy" />
            </a>
            <p className="mt-3 mb-[18px] text-[.88rem]">{brand.tagline}</p>
            <div className="flex gap-3">
              {footer.socials.map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${brand.name} no ${s.label}`}
                    className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-branco text-verde-escuro transition-[transform,background,color] duration-200 hover:-translate-y-[3px] hover:bg-verde-escuro hover:text-branco"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.09}>
            <nav aria-labelledby="f-links">
              <h2 id="f-links" className={colTitle}>Links rápidos</h2>
              <ul className={colList}>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={colLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={0.18}>
            <nav aria-labelledby="f-apoio">
              <h2 id="f-apoio" className={colTitle}>Apoio</h2>
              <ul className={colList}>
                {footer.support.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={colLink}
                      {...(l.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={0.27}>
            <h2 className={colTitle}>Contactos</h2>
            <ul className={colList}>
              <li><a href={contact.phone.href} className={colLink}>Tel: {contact.phone.label}</a></li>
              <li><a href={contact.email.href} className={colLink}>{contact.email.label}</a></li>
              <li className="leading-normal">
                {footer.address[0]}
                <br />
                {footer.address[1]}
              </li>
              <li>{footer.hours}</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-[46px] flex flex-wrap justify-between gap-3.5 border-t border-branco pt-[18px] pb-[26px] text-[.8rem]">
          <span>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</span>
          <span>Desenhado e desenvolvido pela Dondzalândia, Lda.</span>
        </div>
      </div>
    </footer>
  );
}
