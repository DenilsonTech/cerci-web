import type { Photo } from "../../data/home";
import { BackdropPlaceholder } from "./Placeholder";

type Props = {
  photo?: Photo;
  /** Caption for the placeholder, while there is no photo */
  label: string;
  /** Duration of the slow zoom */
  ken?: string;
  /** Above the fold: load it straight away */
  priority?: boolean;
};

/** Full-bleed background photo with a slow zoom, or its placeholder. */
export default function Backdrop({ photo, label, ken = "26s", priority = false }: Props) {
  if (!photo) return <BackdropPlaceholder label={label} ken={ken} />;

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className="ken absolute inset-0 h-full w-full object-cover"
      style={{ ["--ken" as string]: ken }}
    />
  );
}
