// Every colour below is one of the five palette colours, sometimes with
// opacity. No other colours.

const btnBase =
  "inline-block rounded-md border px-[22px] py-[11px] text-[.92rem] font-semibold no-underline transition-[background,border-color,color,transform] duration-200 hover:-translate-y-0.5";

export const btn = {
  /** Green, for light backgrounds */
  accent: `${btnBase} border-verde-escuro bg-verde-escuro text-branco hover:bg-verde-escuro/90`,
  /** Main colour; brightens to the yellow on hover */
  lime: `${btnBase} border-verde-lima bg-verde-lima text-verde-escuro hover:border-amarelo-esverdeado hover:bg-amarelo-esverdeado`,
  outline: `${btnBase} border-preto/15 bg-branco text-preto hover:border-verde-escuro hover:text-verde-escuro`,
  /** Translucent, over photos */
  glass: `${btnBase} border-branco/50 bg-branco/15 text-branco hover:border-branco hover:bg-branco/25`,
};

export const headingDisplay =
  "m-0 text-[clamp(2rem,4.6vw,3.35rem)] leading-[1.18] font-light tracking-[-.02em]";

export const headingSection =
  "m-0 mb-2 text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.22] font-light tracking-[-.02em]";

export const lede = "mx-auto mt-3.5 max-w-[62ch] text-[1.02rem] text-preto/75";

export const wrap = "mx-auto max-w-[1180px] px-6";

export const section = "py-14 sm:py-[78px] scroll-mt-24";

/** Hairline borders and dividers */
export const hairline = "border-preto/10";
