/**
 * Parceiros page content, from the current site (cerci.edu.mz).
 * Words in **double asterisks** are bold and coloured.
 */

import type { Logo } from "../components/ui/LogoGrid";
import type { Photo } from "./home";

const logo = (name: string, file: string): Logo => ({ name, src: `/img/parceiros/${file}.webp` });

export const partnersPage = {
  eyebrow: "Parceiros",
  title: "Nossos **Parceiros**",
  lede: "O trabalho da CERCI-Maputo é sustentado por empresas, instituições e pessoas que se identificam com a nossa causa.",
  photo: {
    src: "/img/banners/parceiros.webp",
    alt: "Representantes de parceiros e da CERCI reunidos numa cerimónia.",
  } satisfies Photo,
};

export const strategic = {
  id: "estrategicos",
  title: "Parceiro **Estratégico**",
  lede: "A Sociedade de Desenvolvimento do Porto de Maputo (MPDC), parceira do projecto de emprego protegido “Porto+”.",
  logos: [logo("Porto de Maputo (MPDC)", "porto-maputo")],
};

export const funders = {
  id: "correntes",
  title: "Financiadores **Correntes**",
  lede: "Empresas que financiam de forma regular o funcionamento do centro.",
  logos: [
    logo("Porto de Maputo (MPDC)", "porto-maputo"),
    logo("Banco Único", "banco-unico"),
    logo("Standard Bank", "standard-bank"),
    logo("Mota-Engil", "mota-engil"),
    logo("Movitel", "movitel"),
    logo("Print4You", "print4you"),
  ],
};

export const contributors = {
  id: "contribuintes",
  title: "**Contribuintes**",
  lede: "Instituições, empresas e organismos que contribuíram ao longo do nosso percurso.",
  logos: [
    logo("BCI", "bci"),
    logo("BCI Fomento", "bci-fomento"),
    logo("BNI", "bni"),
    logo("Polana Casino", "casino-polana"),
    logo("CFM", "cfm"),
    logo("Conselho Municipal de Maputo", "municipio-maputo"),
    logo("Clube Ferroviário de Maputo", "clube-ferroviario"),
    logo("Companhia Industrial da Matola", "cim"),
    logo("Embaixada da Irlanda", "embaixada-irlanda"),
    logo("ESA", "esa"),
    logo("FNB", "fnb"),
    logo("KPMG", "kpmg"),
    logo("Tmcel (antiga Mcel)", "tmcel"),
    logo("MEREC", "merec"),
    logo("Millennium BIM", "millennium-bim"),
    logo("Petromoc", "petromoc"),
    logo("Teixeira Duarte", "teixeira-duarte"),
    logo("Vodacom", "vodacom"),
  ],
  // Contributors we have no logo for
  names: [
    "CHINA HENAN INTL CORPORATION CO. LTD",
    "CETA",
    "CMC",
    "CONCERN",
    "COMBINED SERVICES THIRD WORLD FUND",
    "DSP",
    "ELECTRICAID",
    "EMBAIXADA DA FRANÇA",
    "ESB OFFICERS ASSOCIATION",
    "FL PARTENERS",
    "FENACERCI",
    "GABINETE DA ESPOSA DO PRESIDENTE DA REPÚBLICA",
    "GRINROAD",
    "HALCROW FOUNDATION LIMITED",
    "IBOA",
    "ICTU NORTHERN IRELAND COMMITIEE",
    "LABORATÓRIO DE ENGENHARIA DE MOÇAMBIQUE",
    "LIKHOS",
    "MANICA",
    "MINISTÉRIO DA SAÚDE",
    "MINISTÉRIO DO GÉNERO, CRIANÇA E ACÇÃO SOCIAL",
    "MSC/SHIPPING FORUM",
    "MUSIARTE",
    "ROTARY CLUB",
    "RITA RIBEIRO-ARQUITECTURA & CONSULTORIA",
    "SPI",
    "THELMA TRICHE & AMIGOS",
  ],
};

export const individuals = {
  id: "individuais",
  title: "**Individualidades**",
  lede: "Parceiros individuais que acompanham a associação.",
  names: [
    "ASTRID VAN HAREN",
    "BRIAN TATTERSANL",
    "CYRIL WEAR",
    "DARIUS MANN",
    "DIPAC RAMNICLAL MAGANLAL",
    "ESBOA",
    "GUERTE GERALDO BAMBO G2",
    "JOHN SHEPHERD",
    "LOU SJNEIDERS",
    "NAGUIB ELIAS ABDULA",
    "OSCAR MONTEIRO",
    "STEWART SUKUMA",
    "PETER VAN HORN",
  ],
};

/** Bank details, exactly as on the current site */
export const bank = {
  bim: "55636582",
  nib: "000100000005563658257",
  iban: "MZ59000100000005563658257",
  swift: "BIMOMZMX",
};

export const donations = {
  id: "contribuicoes",
  title: "Quer fazer parte **deste movimento**?",
  lede: "Participe fazendo a sua contribuição.",
  goods: { title: "Bens", items: ["Alimentos não perecíveis", "Material didáctico"] },
  money: {
    title: "Valor monetário",
    note: "O investimento mensal por utente é de 6000,00MT (seis mil meticais).",
  },
  other: {
    title: "Outros tipos de doações",
    items: ["Capacitações e formações do pessoal", "Serviços ligados a reabilitação"],
  },
  form: {
    title: "Fui parceiro no **CERCI-Maputo**",
    text: "Se foi parceiro do CERCI-Maputo e não consta no quadro envia-nos seus dados.",
  },
};

export const partnersCta = {
  title: "Cada parceria **é uma sala a funcionar**",
  text: "Apadrinhe um utente, abrace uma sala ou traga a sua empresa para o emprego protegido. Fale connosco para saber qual a melhor forma de contribuir.",
  primary: { label: "Quero contribuir", href: "/#contactos" },
  secondary: { label: "Ver os projectos", href: "/projectos/" },
};
