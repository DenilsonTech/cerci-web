import { motto } from "../../data/home";
import Emphasis from "../ui/Emphasis";
import Backdrop from "../ui/Backdrop";
import Reveal from "../ui/Reveal";

export default function Motto() {
  return (
    <section
      aria-label="Lema da CERCI"
      className="relative mx-2.5 flex min-h-[350px] items-center overflow-hidden rounded-2xl bg-preto sm:mx-4"
    >
      <Backdrop photo={motto.photo} label={motto.image} ken="40s" />
      <div className="absolute inset-0 bg-gradient-to-r from-preto/70 via-preto/45 to-preto/10" />
      <div className="relative z-[2] mx-auto w-full max-w-[1180px] px-7 py-12 text-branco">
        <Reveal
          as="p"
          className="m-0 max-w-[22ch] text-[clamp(1.7rem,3.6vw,2.7rem)] leading-[1.2] font-light tracking-[-.02em] text-shadow-lg text-shadow-preto/50"
        >
          <Emphasis text={motto.text} dark />
        </Reveal>
      </div>
    </section>
  );
}
