import { Fragment } from "react";

type Props = {
  text: string;
  /** On dark backgrounds the bold words turn lime instead of green */
  dark?: boolean;
  /** Ends with the coloured full stop used on every heading */
  dot?: boolean;
};

/** Renders `**bold**` words and line breaks from the content file. */
export default function Emphasis({ text, dark = false, dot = true }: Props) {
  const bold = dark ? "text-verde-lima" : "text-verde-escuro";

  return (
    <>
      {text.split("\n").map((line, l) => (
        <Fragment key={l}>
          {l > 0 && <br />}
          {line.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <b key={i} className={`font-extrabold ${bold}`}>
                {part}
              </b>
            ) : (
              part
            )
          )}
        </Fragment>
      ))}
      {dot && <span className={dark ? "text-verde-lima" : "text-verde-escuro"}>.</span>}
    </>
  );
}
