import type { SportPhoto } from "../../data/sport";
import Reveal from "../ui/Reveal";

export default function SportGallery({ photos }: { photos: SportPhoto[] }) {
  return (
    <ul className="mt-8 grid auto-rows-[150px] grid-cols-2 list-none gap-3 p-0 sm:auto-rows-[190px] sm:gap-4 lg:auto-rows-[205px] lg:grid-cols-4 lg:gap-5">
      {photos.map((photo, index) => {
        const layout = index === 0
          ? "row-span-2 bg-verde-lima/15"
          : index === 4 || index === 8
            ? "lg:col-span-2"
            : "";

        return (
          <Reveal
            as="li"
            key={photo.src}
            delay={Math.min(index, 5) * 0.05}
            className={`group relative isolate overflow-hidden rounded-2xl bg-verde-escuro shadow-md shadow-verde-escuro/10 ${layout}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{ objectPosition: photo.focus }}
              className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-105 ${
                index === 0 ? "object-contain" : "object-cover"
              }`}
            />
            <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-verde-escuro/90 via-verde-escuro/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute top-3 left-3 grid h-8 min-w-8 place-items-center rounded-full bg-verde-vivo px-2 text-xs font-extrabold text-verde-escuro sm:top-4 sm:left-4">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute right-4 bottom-4 left-4 text-branco sm:right-5 sm:bottom-5 sm:left-5">
              <span className="block text-[.65rem] font-bold tracking-[.15em] text-verde-vivo uppercase">CERCI · Desporto</span>
              <span className="mt-1 block text-sm leading-snug font-extrabold sm:text-base">{photo.caption}</span>
            </span>
          </Reveal>
        );
      })}
    </ul>
  );
}
