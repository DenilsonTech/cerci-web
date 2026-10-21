import type { Photo } from "../../data/home";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

/** A photo, or the caption of a photo still to come */
export type GalleryItem = Photo | { placeholder: string };

/** Row of photos: two per row on phones, four on wide screens. */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="m-0 mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={"src" in item ? item.src : item.placeholder}
          delay={i * 0.08}
          className="group aspect-[4/3] overflow-hidden rounded-xl"
        >
          {"src" in item ? (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{ objectPosition: item.focus }}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.06]"
            />
          ) : (
            <Placeholder label={item.placeholder} />
          )}
        </Reveal>
      ))}
    </ul>
  );
}
