/** Eventos page content. */

import type { GalleryItem } from "../components/ui/Gallery";
import type { Photo } from "./home";
import { photos } from "./photos";

export const eventsPage = {
  eyebrow: "Eventos",
  title: "Nossos **Eventos**",
  lede: "A vida do centro em três frentes: as actividades curriculares de cada semana, as visitas de estudo que levam a aprendizagem para fora do centro e as datas que juntam famílias, utentes e parceiros.",
  photo: {
    src: "/img/banners/eventos.webp",
    alt: "Utentes e equipa da CERCI com gorros de Natal, numa festa de fim de ano.",
  } satisfies Photo,
};

export type EventGroup = {
  slug: string;
  title: string;
  kicker: string;
  heading: string;
  paragraphs: string[];
  image: Photo;
  tags?: string[];
  gallery: GalleryItem[];
};

export const eventGroups: EventGroup[] = [
  {
    slug: "actividades-curriculares",
    title: "Actividades curriculares",
    kicker: "01 · Todas as semanas",
    heading: "Actividades **curriculares**",
    paragraphs: [
      "Trabalhos de orientação profissional como corte e costura, culinária e actividades do refeitório, cuja finalidade é o ingresso no mercado do emprego.",
      "A par destas, o centro disponibiliza aulas extracurriculares desde informática, música, xadrez, dança e capoeira.",
    ],
    image: photos.culinaria,
    tags: ["Corte e costura", "Culinária", "Refeitório", "Informática", "Música", "Xadrez", "Dança", "Capoeira"],
    gallery: [photos.actividadesLaborais, photos.cozinha, photos.aulaDeMusica, photos.salaDeAula],
  },
  {
    slug: "visitas-de-estudo",
    title: "Visitas de Estudo",
    kicker: "02 · Fora do centro",
    heading: "Visitas **de Estudo**",
    paragraphs: [
      "Saídas que levam a aprendizagem para fora do centro e ampliam os ambientes de actuação dos utentes, com o envolvimento dos cuidadores e da equipa técnica.",
    ],
    image: photos.visitaAviao,
    gallery: [photos.visitaBombeiros, photos.comitivaAeroporto, photos.familiaEquipa, photos.corridaSacos],
  },
  {
    slug: "eventos-comemorativos",
    title: "Eventos comemorativos",
    kicker: "03 · Datas do ano",
    heading: "Eventos **comemorativos**",
    paragraphs: [
      "O 1 de Junho, as festas de fim de ano e as restantes datas que juntam famílias, utentes, voluntários e parceiros no centro.",
    ],
    image: photos.diaDaCrianca,
    gallery: [photos.eventoComemorativo, photos.festaInclusao, photos.actuacaoMusical, photos.grupoDesporto],
  },
];

export const eventsCta = {
  title: "Quer **acompanhar a vida do centro**?",
  text: "Publicamos as actividades e os eventos nas nossas redes sociais. Siga-nos para ver para onde vai o contributo de quem nos apoia.",
  primary: { label: "Facebook", href: "https://www.facebook.com/cercimaputo/" },
  secondary: { label: "Instagram", href: "https://www.instagram.com/cercimaputo/" },
};
