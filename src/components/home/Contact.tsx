import type { FormEvent } from "react";
import { contact } from "../../data/site";
import Emphasis from "../ui/Emphasis";
import Reveal from "../ui/Reveal";
import { btn, headingSection, section, wrap } from "../ui/styles";

const underlined =
  "bg-[linear-gradient(var(--color-verde-escuro),var(--color-verde-escuro))] bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat no-underline transition-[background-size,color] duration-300 hover:bg-[length:100%_100%] hover:text-branco";

const field =
  "w-full rounded-lg border border-preto/15 bg-branco px-[13px] py-[11px] text-[.92rem] text-preto transition-[border-color,box-shadow] duration-200 focus:border-verde-escuro focus:ring-3 focus:ring-verde-escuro/20 focus:outline-none";

/**
 * The site is static, so there is no server to receive the form: it opens
 * the visitor's email app with the message already filled in.
 */
function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = `Mensagem do site — ${data.get("nome")}`;
  const body = `${data.get("mensagem")}\n\n${data.get("nome")} <${data.get("email")}>`;
  window.location.href = `${contact.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const details = [
    { term: "Morada", value: contact.address },
    { term: "Telefone", value: contact.phone.label, href: contact.phone.href },
    { term: "Email", value: contact.email.label, href: contact.email.href },
    { term: "Horário", value: contact.hours },
  ];

  return (
    <section id="contactos" className={section}>
      <div className={wrap}>
        <Reveal as="h2" className={headingSection}>
          <Emphasis text={contact.title} />
        </Reveal>

        <div className="mt-[38px] grid grid-cols-1 items-start gap-[34px] lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <dl className="m-0 grid gap-5">
              {details.map((d) => (
                <div key={d.term}>
                  <dt className="mb-0.5 text-[.8rem] text-preto/55">{d.term}</dt>
                  <dd className="m-0 text-[1.02rem] font-semibold">
                    {d.href ? (
                      <a href={d.href} className={underlined}>
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-xl bg-verde-lima/10 px-6 pt-[26px] pb-7">
              <form onSubmit={handleSubmit}>
                <label className="mb-4 block">
                  <span className="mb-1.5 block text-[.84rem] font-semibold">Nome</span>
                  <input type="text" name="nome" autoComplete="name" required className={field} />
                </label>
                <label className="mb-4 block">
                  <span className="mb-1.5 block text-[.84rem] font-semibold">Email</span>
                  <input type="email" name="email" autoComplete="email" required className={field} />
                </label>
                <label className="mb-4 block">
                  <span className="mb-1.5 block text-[.84rem] font-semibold">Mensagem</span>
                  <textarea name="mensagem" required className={`${field} min-h-24 resize-y`} />
                </label>
                <button type="submit" className={`cursor-pointer ${btn.accent}`}>
                  Enviar mensagem
                </button>
                <p className="mt-3.5 mb-0 text-[.8rem] text-preto/55">{contact.formNote}</p>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="overflow-hidden rounded-xl border border-preto/10">
            <iframe
              src={contact.mapEmbed}
              title={`Mapa: ${contact.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[640/460] w-full border-0"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-preto/10 bg-branco px-4 py-3.5 text-[.86rem]">
              <span>{contact.address}</span>
              <a href={contact.mapUrl} target="_blank" rel="noreferrer" className={btn.outline}>
                Abrir no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
