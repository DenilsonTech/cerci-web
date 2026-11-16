/**
 * Voluntariado page content. The mural names are from the current site
 * (cerci.edu.mz). Words in **double asterisks** are bold and coloured.
 */

import type { Photo } from "./home";
import { photos } from "./photos";
import { contact } from "./site";

export const volunteeringPage = {
  eyebrow: "Voluntariado",
  title: "Voluntariado no **CERCI-Maputo**",
  lede: "Ao longo do nosso percurso foram tantas as individualidades que deram e continuam dando o seu contributo em diferentes áreas de actuação.",
  photo: {
    src: "/img/banners/voluntariado.webp",
    alt: "Uma voluntária acompanha uma utente da CERCI numa actividade à mesa.",
    focus: "70% center",
  } satisfies Photo,
};

export const mural = {
  id: "mural",
  title: "Mural **de voluntariado**",
  lede: "Dada a sua importância, registamos no nosso mural de voluntariado os seguintes nomes.",
  people: [
    { name: "ASSANE SUZUKI", area: "Corte e costura" },
    { name: "CARLOS MAGAIA", area: "Capoeira" },
    { name: "LÍGIA BARROS", area: "Pedopsiquiatria" },
    { name: "STELA MENDONÇA", area: "Musicoterapia" },
    { name: "SUZANA SILVA", area: "Terapia de inserção social" },
    { name: "TATIANA IBRAHIMO", area: "Capoeira" },
    { name: "VIVIANE FÁTIMA", area: "Enfermeira" },
    { name: "SUSANA LEITE", area: "Dinamizadora de rede social" },
  ],
};

export const helpAreas = {
  id: "areas",
  title: "Onde **pode ajudar**",
  lede: "As áreas em que os voluntários têm trabalhado com os nossos utentes, dentro e fora do centro.",
  items: [
    {
      title: "Actividades pedagógicas",
      text: "Apoio às aulas e às actividades de estimulação das áreas do desenvolvimento.",
    },
    { title: "Orientação profissional", text: "Corte e costura, culinária e actividades do refeitório." },
    {
      title: "Terapias e saúde",
      text: "Musicoterapia, pedopsiquiatria, enfermagem e terapia de inserção social.",
    },
    { title: "Aulas extracurriculares", text: "Informática, música, xadrez, dança e capoeira." },
    { title: "Eventos", text: "Apoio às visitas de estudo e às datas comemorativas do centro." },
    { title: "Comunicação", text: "Dinamização das redes sociais e divulgação do trabalho da associação." },
  ],
  gallery: [photos.sessaoDeTerapia, photos.pinturaMural, photos.aulaDeMusica, photos.corridaSacos],
  flipGallery: [photos.tecnicoEUtente, photos.actividadesLaborais, photos.familiaEquipa, photos.festaInclusao],
};

export const volunteerForm = {
  id: "registo",
  title: "Fui voluntário **no CERCI-Maputo**",
  lede: "Se foi voluntário do CERCI-Maputo e não consta no quadro envia-nos seus dados.",
};

export const volunteeringCta = {
  title: "Quer ser **voluntário** na CERCI-Maputo?",
  text: "Damos formação e integramos voluntários nas actividades pedagógicas, terapêuticas e nos eventos do centro. Escreva-nos a dizer em que área gostaria de colaborar.",
  primary: {
    label: "Candidatar-me",
    href: `${contact.email.href}?subject=${encodeURIComponent("Candidatura a voluntário")}`,
  },
  secondary: { label: contact.phone.label, href: contact.phone.href },
};
