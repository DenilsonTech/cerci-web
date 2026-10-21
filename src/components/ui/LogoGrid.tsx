import Reveal from "./Reveal";

export type Logo = {
  name: string;
  /** Path of the logo image */
  src: string;
};

type Props = {
  logos: Logo[];
  /** One big logo, centred, instead of a grid */
  featured?: boolean;
};

/** Partner logos on white cards, with the name underneath. */
export default function LogoGrid({ logos, featured = false }: Props) {
  return (
    <ul
      className={`mt-[46px] grid list-none gap-4 p-0 ${
        featured ? "mx-auto max-w-sm grid-cols-1" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
      }`}
    >
      {logos.map((logo, i) => (
        <Reveal
          as="li"
          key={logo.src}
          delay={Math.min(i, 11) * 0.05}
          className="group flex flex-col items-center justify-between gap-3 rounded-xl border border-preto/10 bg-branco p-4 text-center transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-verde-escuro hover:shadow-lg hover:shadow-preto/10"
        >
          <div className={`flex w-full items-center justify-center ${featured ? "h-40" : "h-20"}`}>
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-[.78rem] leading-tight font-semibold text-preto/60">{logo.name}</span>
        </Reveal>
      ))}
    </ul>
  );
}
