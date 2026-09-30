import { useEffect, useRef, useState, type CSSProperties } from "react";
import { hero } from "../../data/home";
import Navbar from "../layout/Navbar";
import Emphasis from "../ui/Emphasis";
import Backdrop from "../ui/Backdrop";
import { btn, headingDisplay } from "../ui/styles";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

// Full screen at the top of the page; on desktop it shrinks into a rounded
// card once the visitor scrolls, as on the Dondzalandia site.
function isFullBleed() {
  return window.innerWidth < 768 || window.scrollY <= 80;
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [fullBleed, setFullBleed] = useState(isFullBleed);

  useEffect(() => {
    const update = () => setFullBleed(isFullBleed());
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div id="topo">
      <header
        ref={heroRef}
        className={`relative mx-auto flex min-h-screen w-full items-center overflow-hidden pt-24 transition-all duration-500 ease-in-out ${
          fullBleed ? "" : "md:mt-3.5 md:w-[95%] md:rounded-2xl"
        }`}
      >
        <Backdrop photo={hero.photo} label={hero.image} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-preto/55 via-preto/25 to-preto/50" />

        <Navbar heroRef={heroRef} />

        <div className="relative z-[2] w-full px-7 text-center text-branco">
          <h1
            className={`enter ${headingDisplay} text-shadow-lg text-shadow-preto/45`}
            style={delay(0.15)}
          >
            <Emphasis text={hero.title} dark />
          </h1>
          <p
            className="enter mx-auto mt-[18px] max-w-[46ch] text-[1.02rem] text-branco/95 text-shadow-md text-shadow-preto/50"
            style={delay(0.32)}
          >
            {hero.subtitle}
          </p>
          <div className="enter mt-[26px] flex flex-wrap justify-center gap-3" style={delay(0.48)}>
            {hero.actions.map((a) => (
              <a key={a.href} href={a.href} className={a.variant === "accent" ? btn.lime : btn.glass}>
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
