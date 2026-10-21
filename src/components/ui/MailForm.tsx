import type { FormEvent } from "react";
import { contact } from "../../data/site";
import { btn } from "./styles";

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  autoComplete?: string;
  inputMode?: "text" | "numeric";
};

type Props = {
  fields: FormField[];
  /** Subject of the email, built from the filled-in values */
  subject: (values: Record<string, string>) => string;
  submitLabel?: string;
  note?: string;
};

const field =
  "w-full rounded-lg border border-preto/15 bg-branco px-[13px] py-[11px] text-[.92rem] text-preto transition-[border-color,box-shadow] duration-200 focus:border-verde-escuro focus:ring-3 focus:ring-verde-escuro/20 focus:outline-none";

/**
 * The site is static, so there is no server to receive forms: on submit this
 * opens the visitor's email app with the message already filled in.
 */
export default function MailForm({ fields, subject, submitLabel = "Enviar", note }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(fields.map((f) => [f.name, String(data.get(f.name) ?? "").trim()]));
    const body = fields.map((f) => `${f.label}: ${values[f.name]}`).join("\n");
    window.location.href = `${contact.email.href}?subject=${encodeURIComponent(subject(values))}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.name} className={`block ${f.type === "textarea" ? "sm:col-span-2" : ""}`}>
          <span className="mb-1.5 block text-[.84rem] font-semibold">
            {f.label}
            <span className="text-verde-escuro"> *</span>
          </span>
          {f.type === "textarea" ? (
            <textarea name={f.name} required className={`${field} min-h-24 resize-y`} />
          ) : (
            <input
              type={f.type ?? "text"}
              name={f.name}
              autoComplete={f.autoComplete}
              inputMode={f.inputMode}
              required
              className={field}
            />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className={`cursor-pointer ${btn.accent}`}>
          {submitLabel}
        </button>
        {note && <p className="mt-3.5 mb-0 text-[.8rem] text-preto/55">{note}</p>}
      </div>
    </form>
  );
}
