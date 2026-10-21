import Reveal from "./Reveal";

/** Names as tags, for people and organisations without a logo. */
export default function NameList({ names }: { names: string[] }) {
  return (
    <Reveal>
      <ul className="m-0 mt-8 flex list-none flex-wrap justify-center gap-2.5 p-0">
        {names.map((name) => (
          <li
            key={name}
            className="rounded-full border border-preto/10 bg-branco px-4 py-2 text-[.8rem] font-semibold text-verde-escuro transition-colors duration-200 hover:border-verde-escuro"
          >
            {name}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
