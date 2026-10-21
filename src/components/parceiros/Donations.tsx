import { FiBox, FiCreditCard, FiGift } from "react-icons/fi";
import { bank, donations } from "../../data/partners";
import Emphasis from "../ui/Emphasis";
import MailForm from "../ui/MailForm";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const card =
  "rounded-xl border border-preto/10 bg-branco p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-verde-escuro";
const icon = "grid h-11 w-11 place-items-center rounded-full bg-verde-lima/25 text-verde-escuro";

const bankRows = [
  { label: "Conta BIM", value: bank.bim },
  { label: "NIB", value: bank.nib },
  { label: "IBAN", value: bank.iban },
  { label: "Swift code", value: bank.swift },
];

export default function Donations() {
  return (
    <Section id={donations.id} title={donations.title} lede={donations.lede}>
      <div className="mt-[46px] grid gap-6 lg:grid-cols-3">
        <Reveal className={card}>
          <span className={icon}>
            <FiBox size={20} />
          </span>
          <h3 className="mt-4 mb-3 text-[1.05rem] font-extrabold">{donations.goods.title}</h3>
          <ul className="m-0 grid list-none gap-1.5 p-0 text-[.92rem] text-preto/75">
            {donations.goods.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className={card}>
          <span className={icon}>
            <FiCreditCard size={20} />
          </span>
          <h3 className="mt-4 mb-3 text-[1.05rem] font-extrabold">{donations.money.title}</h3>
          <dl className="m-0 grid gap-2.5">
            {bankRows.map((row) => (
              <div key={row.label}>
                <dt className="text-[.75rem] text-preto/55">{row.label}</dt>
                {/* select-all: one tap selects the whole number, ready to copy */}
                <dd className="m-0 font-mono text-[.9rem] font-semibold break-all text-verde-escuro select-all">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 mb-0 border-t border-preto/10 pt-3 text-[.85rem] text-preto/75">
            {donations.money.note}
          </p>
        </Reveal>

        <Reveal delay={0.16} className={card}>
          <span className={icon}>
            <FiGift size={20} />
          </span>
          <h3 className="mt-4 mb-3 text-[1.05rem] font-extrabold">{donations.other.title}</h3>
          <ul className="m-0 grid list-none gap-1.5 p-0 text-[.92rem] text-preto/75">
            {donations.other.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-10 rounded-xl bg-verde-lima/10 px-6 pt-7 pb-8 sm:px-8">
        <h3 className="m-0 text-[1.3rem] leading-tight font-light">
          <Emphasis text={donations.form.title} dot={false} />
        </h3>
        <p className="mt-2 mb-6 text-[.92rem] text-preto/75">{donations.form.text}</p>
        <MailForm
          fields={[
            { name: "nome", label: "Nome", autoComplete: "organization" },
            { name: "area", label: "Área" },
            { name: "ano", label: "Ano", inputMode: "numeric" },
          ]}
          subject={(v) => `Fui parceiro no CERCI-Maputo — ${v.nome}`}
        />
      </Reveal>
    </Section>
  );
}
