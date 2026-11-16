import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { CardItem, GalleryPhoto } from "../../data/home";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import { btn } from "./styles";

type Props = {
  item: CardItem;
  delay: number;
  gallery?: GalleryPhoto[];
};

export default function Card({ item, delay, gallery = [] }: Props) {
  const { action } = item;
  const external = action.href.startsWith("http");
  const isGalleryAction = action.label.toLowerCase().includes("galeria");

  const photos = [
    ...new Map(
      [...gallery, ...(item.gallery ?? [])].map((photo) => [photo.src, photo])
    ).values(),
  ];

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = photos[photoIndex];
  const detailsId = `details-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  useEffect(() => {
    if (!galleryOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
      if (event.key === "ArrowRight") {
        setPhotoIndex((index) => (index + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        setPhotoIndex((index) => (index - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen, photos.length]);

  useEffect(() => {
    if (!galleryOpen || photos.length < 2) return;
    const timer = window.setInterval(() => {
      setPhotoIndex((index) => (index + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [galleryOpen, photos.length]);

  const actionClass =
    action.variant === "accent"
      ? btn.accent
      : action.variant === "outline"
        ? btn.outline
        : "border-b-2 border-verde-lima pb-px text-[.86rem] font-semibold text-verde-escuro no-underline";

  const galleryDialog =
    galleryOpen && currentPhoto
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Galeria: ${item.title}`}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-preto/90 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setGalleryOpen(false);
            }}
          >
            <div className="relative my-auto w-full max-w-5xl rounded-2xl bg-branco p-5 sm:p-7">
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                aria-label="Fechar galeria"
                className="absolute top-3 right-3 cursor-pointer rounded-lg border-0 bg-verde-escuro px-3 py-2 text-branco"
              >
                Fechar ✕
              </button>

              <h2 className="mb-5 pr-20 text-xl font-bold text-verde-escuro">
                {item.title}
              </h2>

              <img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="fade-in max-h-[55vh] w-full rounded-xl object-contain"
              />

              <h3 className="mt-4 mb-1 font-bold">
                {currentPhoto.title ?? currentPhoto.alt}
              </h3>
              {(currentPhoto.description ?? item.details) && (
                <p className="mt-0 text-preto/75">
                  {currentPhoto.description ?? item.details}
                </p>
              )}

              {photos.length > 1 && (
                <>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {photos.map((photo, index) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setPhotoIndex(index)}
                        aria-label={`Ver imagem ${index + 1}: ${photo.title ?? photo.alt}`}
                        aria-current={index === photoIndex}
                        className={`cursor-pointer overflow-hidden rounded-lg border-2 p-0 ${
                          index === photoIndex
                            ? "border-verde-escuro"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="aspect-[3/2] w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-5">
                    <button
                      type="button"
                      onClick={() =>
                        setPhotoIndex((index) => (index - 1 + photos.length) % photos.length)
                      }
                      className="cursor-pointer rounded-lg border-0 bg-verde-escuro px-4 py-2 text-branco"
                    >
                      Anterior
                    </button>
                    <span className="text-sm text-preto/70">
                      {photoIndex + 1} / {photos.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setPhotoIndex((index) => (index + 1) % photos.length)
                      }
                      className="cursor-pointer rounded-lg border-0 bg-verde-escuro px-4 py-2 text-branco"
                    >
                      Seguinte
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <Reveal
        as="li"
        delay={delay}
        className="group flex flex-col overflow-hidden rounded-xl border border-preto/10 bg-branco transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.22,.7,.25,1)] hover:-translate-y-[5px] hover:border-verde-escuro hover:shadow-xl hover:shadow-preto/10"
      >
        <div className="aspect-[3/2] overflow-hidden">
          <div className="h-full transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.06]">
            {item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={item.image}
                onCanPlay={(event) => {
                  void event.currentTarget.play().catch(() => undefined);
                }}
                className="h-full w-full object-cover"
              />
            ) : item.src ? (
              <img
                src={item.src}
                alt={item.image}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <Placeholder label={item.image} />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pt-5 pb-[22px]">
          <h3 className="m-0 mb-2 text-[1.05rem] font-extrabold tracking-[-.01em]">
            {item.title}
          </h3>
          <p className="m-0 mb-4 text-[.9rem] leading-[1.6] text-preto/75">
            {item.text}
          </p>

          {item.details && !isGalleryAction && (
            <div className="mb-4">
              <button
                type="button"
                aria-expanded={detailsOpen}
                aria-controls={detailsId}
                onClick={() => setDetailsOpen((open) => !open)}
                className="cursor-pointer border-0 bg-transparent p-0 text-[.86rem] font-semibold text-verde-escuro underline decoration-verde-lima decoration-2 underline-offset-4"
              >
                {detailsOpen ? "Mostrar menos" : "Mais informações"}
              </button>
              {detailsOpen && (
                <p id={detailsId} className="mt-3 mb-0 text-[.9rem] leading-[1.6] text-preto/75">
                  {item.details}
                </p>
              )}
            </div>
          )}

          {isGalleryAction && photos.length > 0 ? (
            <button
              type="button"
              onClick={() => {
                setPhotoIndex(0);
                setGalleryOpen(true);
              }}
              className={`mt-auto cursor-pointer self-start ${actionClass}`}
            >
              {action.label}
            </button>
          ) : (
            <a
              href={action.href}
              {...(external && { target: "_blank", rel: "noreferrer" })}
              className={`mt-auto self-start ${actionClass}`}
            >
              {action.label}
            </a>
          )}
        </div>
      </Reveal>

      {galleryDialog}
    </>
  );
}
