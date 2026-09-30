import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

type Props = {
  /** The id in the YouTube link, e.g. YrpVleds1kE */
  id: string;
  title: string;
};

/**
 * Shows the video's cover with a play button and only loads YouTube's player
 * (about 1 MB) when the visitor clicks, so the page stays fast.
 */
export default function YouTubeVideo({ id, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Ver o vídeo: ${title}`}
      className="group absolute inset-0 h-full w-full cursor-pointer border-0 bg-preto p-0"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-[opacity,transform] duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-preto/60 via-transparent to-transparent" />
      <span className="absolute top-1/2 left-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-verde-lima text-verde-escuro shadow-lg shadow-preto/30 transition-transform duration-300 group-hover:scale-110">
        <FaPlay size={24} className="ml-1" />
      </span>
      <span className="absolute bottom-4 left-5 text-left text-[.95rem] font-semibold text-branco">
        {title}
      </span>
    </button>
  );
}
