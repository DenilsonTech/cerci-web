import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Photo } from "../../data/home";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

/** A photo, or the caption of a photo still to come */
export type GalleryItem = Photo | { placeholder: string };

/** Row of photos: two per row on phones, four on wide screens. */
export default function Gallery({
  items,
  flipItems,
  autoFlip = false,
}: {
  items: GalleryItem[];
  flipItems?: GalleryItem[];
  autoFlip?: boolean;
}) {
  const [showFlipItems, setShowFlipItems] = useState<boolean[]>(() => items.map(() => false));
  const [turnIndex, setTurnIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const sequenceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasBookFlip = items.length === 4 && flipItems?.length === 4;
  const alternateItems = hasBookFlip ? flipItems : items;

  useEffect(() => {
    if (!autoFlip || !hasBookFlip) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;

    const runWithoutAnimation = () => {
      if (index >= items.length) {
        index = 0;
        sequenceTimer.current = setTimeout(runWithoutAnimation, 5000);
        return;
      }

      setShowFlipItems((current) =>
        current.map((show, itemIndex) => (itemIndex === index ? !show : show)),
      );
      index += 1;
      sequenceTimer.current = setTimeout(runWithoutAnimation, 2000);
    };

    sequenceTimer.current = setTimeout(() => {
      if (reducedMotion) {
        runWithoutAnimation();
      } else {
        setTurnIndex(0);
      }
    }, 5000);

    return () => {
      if (sequenceTimer.current) clearTimeout(sequenceTimer.current);
    };
  }, [autoFlip, hasBookFlip, items.length]);

  const renderFace = (item: GalleryItem, back = false) => {
    const faceClass = `absolute inset-0 h-full w-full overflow-hidden bg-branco [backface-visibility:hidden] ${
      back ? "[transform:rotateY(180deg)]" : ""
    }`;
    const key = "src" in item ? item.src : item.placeholder;
    const failed = "src" in item && failedImages[key];

    return (
      <div className={faceClass}>
        {"src" in item && !failed ? (
          <img
            src={item.src}
            alt={back ? "" : item.alt}
            aria-hidden={back}
            loading="lazy"
            decoding="async"
            onError={() => setFailedImages((current) => ({ ...current, [key]: true }))}
            style={{ objectPosition: item.focus }}
            className="h-full w-full scale-[1.01] object-cover [image-rendering:auto] motion-reduce:scale-100"
          />
        ) : (
          <Placeholder />
        )}
        {hasBookFlip && (
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-preto/30 to-transparent transition-opacity duration-300 ${
              turnIndex !== null ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    );
  };

  return (
    <ul
      aria-label={hasBookFlip ? "Galeria de fotografias com mudança automática, da esquerda para a direita" : undefined}
      className={`m-0 mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 lg:grid-cols-4 ${
        hasBookFlip ? "perspective-[1400px]" : ""
      }`}
    >
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={"src" in item ? item.src : item.placeholder}
          delay={i * 0.08}
          className={`group aspect-4/3 overflow-hidden rounded-xl ${
            hasBookFlip ? "transform-3d" : ""
          }`}
        >
          {hasBookFlip ? (
            <div
              className="relative h-full w-full"
              style={{
                transform: turnIndex === i ? "rotateY(-160deg) scale(1.01)" : "rotateY(0deg) scale(1)",
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
                transition: turnIndex === i
                  ? "transform 1100ms cubic-bezier(0.22, 0.7, 0.25, 1)"
                  : "transform 700ms ease",
              } satisfies CSSProperties}
              onTransitionEnd={(event) => {
                if (
                  turnIndex !== i ||
                  event.target !== event.currentTarget ||
                  event.propertyName !== "transform"
                ) return;

                setShowFlipItems((current) =>
                  current.map((show, index) => (index === i ? !show : show)),
                );
                if (i < items.length - 1) {
                  sequenceTimer.current = setTimeout(() => setTurnIndex(i + 1), 500);
                } else {
                  setTurnIndex(null);
                  sequenceTimer.current = setTimeout(() => setTurnIndex(0), 5000);
                }
              }}
            >
              {renderFace(showFlipItems[i] ? alternateItems[i] : items[i])}
              {renderFace(showFlipItems[i] ? items[i] : alternateItems[i], true)}
            </div>
          ) : (
            <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.06]">
              {renderFace(item)}
            </div>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
