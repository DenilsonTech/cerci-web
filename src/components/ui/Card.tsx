import type { CardItem } from "../../data/home";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import { btn } from "./styles";

export default function Card({ item, delay }: { item: CardItem; delay: number }) {
  const { action } = item;
  const external = action.href.startsWith("http");

  return (
    <Reveal
      as="li"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-xl border border-preto/10 bg-branco transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.22,.7,.25,1)] hover:-translate-y-[5px] hover:border-verde-escuro hover:shadow-xl hover:shadow-preto/10"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <div className="h-full transition-transform duration-700 ease-[cubic-bezier(.22,.7,.25,1)] group-hover:scale-[1.06]">
          {item.src ? (
            <img src={item.src} alt={item.image} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <Placeholder label={item.image} />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pt-5 pb-[22px]">
        <h3 className="m-0 mb-2 text-[1.05rem] font-extrabold tracking-[-.01em]">
          {item.title}
        </h3>
        <p className="m-0 mb-[18px] text-[.9rem] leading-[1.6] text-preto/75">{item.text}</p>
        <a
          href={action.href}
          {...(external && { target: "_blank", rel: "noreferrer" })}
          className={`mt-auto self-start ${
            action.variant === "accent"
              ? btn.accent
              : action.variant === "outline"
                ? btn.outline
                : "border-b-2 border-verde-lima pb-px text-[.86rem] font-semibold text-verde-escuro no-underline transition-[border-width,padding] duration-200 group-hover:border-b-4 group-hover:pb-[3px]"
          }`}
        >
          {action.label}
        </a>
      </div>
    </Reveal>
  );
}
