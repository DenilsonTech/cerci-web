import { FiCamera } from "react-icons/fi";

const grid =
  "bg-[linear-gradient(var(--color-branco)_1px,transparent_1px),linear-gradient(90deg,var(--color-branco)_1px,transparent_1px)] bg-[size:44px_44px]";

type Props = {
  /** Optional caption, kept out of the UI to avoid temporary text on the page */
  label?: string;
  className?: string;
};

/** Neutral stand-in for a photo without visible description text. */
export default function Placeholder({ className = "" }: Props) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-verde-lima/15 to-verde-escuro/20 p-4 text-center ${className}`}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 opacity-50 ${grid}`} />
      <FiCamera className="relative text-verde-escuro" size={30} strokeWidth={2} />
    </div>
  );
}

/**
 * Dark stand-in for a full-bleed background photo. It carries the slow zoom
 * the real photo will have, and a small caption in the corner.
 */
export function BackdropPlaceholder({ label, ken = "26s" }: { label?: string; ken?: string }) {
  return (
    <>
      <div
        className="ken absolute inset-0 bg-gradient-to-br from-verde-escuro to-preto"
        style={{ ["--ken" as string]: ken }}
      >
        <div className={`absolute inset-0 opacity-10 ${grid}`} />
      </div>
      {label ? (
        <span className="absolute right-3 bottom-3 z-[2] flex items-center gap-1.5 rounded-full bg-preto/40 px-3 py-1 text-[11px] text-branco/80 backdrop-blur-sm">
          <FiCamera size={12} /> {label}
        </span>
      ) : null}
    </>
  );
}
