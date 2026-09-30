/** Content shared by every page: menu, brand, contacts and footer. */

/**
 * Each entry is its own page. The order follows how a visitor gets to know
 * the CERCI: who it is, what it does, what it runs, what happens there, and
 * finally how to take part and who already supports it.
 */
export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos/", label: "Sobre nós" },
  { href: "/servicos/", label: "Serviços" },
  { href: "/projectos/", label: "Projectos" },
  { href: "/eventos/", label: "Eventos" },
  { href: "/voluntariado/", label: "Voluntariado" },
  { href: "/parceiros/", label: "Parceiros" },
];

export const brand = {
  name: "CERCI-Maputo",
  tagline: "Acredite, somos capazes.",
};

export const contact = {
  title: "Fale **connosco**",
  address: "Av. Milagre Mabote, n.º 238, Maputo",
  phone: { label: "+258 84 683 4793", href: "tel:+258846834793" },
  email: { label: "geral@cerci.edu.mz", href: "mailto:geral@cerci.edu.mz" },
  hours: "Segunda a sexta, das 7h30 às 15h30",
  /** The "CERCI Maputo" place on Google Maps */
  mapUrl:
    "https://www.google.com/maps/place/CERCI+Maputo/@-25.9560313,32.5767969,17z/data=!3m1!4b1!4m6!3m5!1s0x1ee69b3f05f814cd:0xa6237cb0ed57caa2!8m2!3d-25.9560361!4d32.5793718!16s%2Fg%2F11kj4207h9",
  /** Embed of that same place, by name and coordinates: needs no API key */
  mapEmbed:
    "https://maps.google.com/maps?q=CERCI+Maputo&ll=-25.9560361,32.5793718&z=17&output=embed",
  formNote: "Respondemos em dias úteis, no horário de funcionamento.",
};

export const footer = {
  support: [
    {
      label: "Ficha de utente",
      href: "https://cerci.edu.mz/images/Ficha_de_Candidatura_Utente.docx",
    },
    {
      label: "Ficha de sócio",
      href: "https://cerci.edu.mz/images/fichasocios.docx",
    },
    { label: "Voluntariado", href: "/voluntariado/" },
    { label: "Estatuto (PDF)", href: "https://cerci.edu.mz/images/estatuto.pdf" },
  ],
  socials: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/cercimaputo/" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/cercimaputo/" },
    { id: "x", label: "X, antigo Twitter", href: "https://twitter.com/CerciMaputo" },
  ],
  address: ["Av. Milagre Mabote, n.º 238,", "Maputo, Moçambique"],
  hours: "Segunda a sexta: 7h30 – 15h30",
};
