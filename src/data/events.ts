/** Eventos page content. */

import type { GalleryItem } from "../components/ui/Gallery";
import type { Photo } from "./home";
import { photos } from "./photos";

export const eventsPage = {
  eyebrow: "Eventos",
  title: "Nossos **Eventos**",
  lede: "A vida do centro passa pelas actividades curriculares, visitas de estudo e celebrações que juntam utentes, famílias e parceiros, como a Gala dos 20 anos e o Dia da Saúde Mental.",
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
  videoSrc?: string;
  tags?: string[];
  gallery: GalleryItem[];
  flipGallery: GalleryItem[];
};

const eventPhotoSet = (
  folder: string,
  filenames: string[],
  eventName: string,
): Photo[] =>
  filenames.map((filename, index) => ({
    src: `/img/Eventos/${folder.split("/").map(encodeURIComponent).join("/")}/${encodeURIComponent(filename)}`,
    alt: `${eventName} na CERCI-Maputo, fotografia ${index + 1}.`,
  }));

const curricularFolder = "Actividades curriculares/Culinaria";
const mentalHealthFolder = "Dia da Saude Mental M. Accao Social";
const galaFolder = "Gala 20 anos";

const curricularPhotos = eventPhotoSet(
  curricularFolder,
  ["20230309_132813.jpg", "20230309_133005.jpg", "20230309_133425.jpg", "20230309_134032.jpg"],
  "Actividade curricular de culinária",
);
const curricularFlipPhotos = eventPhotoSet(
  curricularFolder,
  ["20230309_134641.jpg", "20230309_134741.jpg", "20230309_134904.jpg", "20230309_135325.jpg"],
  "Actividade curricular de culinária",
);

const mentalHealthPhotos = eventPhotoSet(
  mentalHealthFolder,
  ["20241203_102347.jpg", "20241203_102446.jpg", "20241203_105450.jpg", "20241203_105731.jpg"],
  "Dia da Saúde Mental e Acção Social",
);
const mentalHealthFlipPhotos = eventPhotoSet(
  mentalHealthFolder,
  ["20241203_105759.jpg", "20241203_105811.jpg", "20241203_110012.jpg", "20241203_110216.jpg"],
  "Dia da Saúde Mental e Acção Social",
);

const galaPhotos = eventPhotoSet(
  galaFolder,
  ["IMG_9300.jpg", "IMG_9364.jpg", "IMG_9401.jpg", "IMG_9445.jpg"],
  "Gala dos 20 anos da CERCI",
);
const galaFlipPhotos = eventPhotoSet(
  galaFolder,
  ["IMG_9457.jpg", "IMG_9472.jpg", "IMG_9525.jpg", "IMG_9617.jpg"],
  "Gala dos 20 anos da CERCI",
);

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
    image: curricularPhotos[0],
    videoSrc: "/img/Eventos/Actividades%20curriculares/CERCI%20Actividade.mp4",
    tags: ["Corte e costura", "Culinária", "Refeitório", "Informática", "Música", "Xadrez", "Dança", "Capoeira"],
    gallery: curricularPhotos,
    flipGallery: curricularFlipPhotos,
  },
  {
    slug: "visitas-de-estudo",
    title: "Visitas de Estudo",
    kicker: "02 · Fora do centro",
    heading: "Visitas **de Estudo**",
    paragraphs: [
      "Saídas que levam a aprendizagem para fora do centro e ampliam os ambientes de actuação dos utentes, com o envolvimento dos cuidadores e da equipa técnica.",
    ],
    image: photos.eventoComemorativo,
    videoSrc: "/img/Eventos/Videovisita.mp4",
    gallery: [photos.eventoComemorativo, photos.diaDaCrianca, galaPhotos[2], mentalHealthPhotos[2]],
    flipGallery: [photos.festaInclusao, photos.actuacaoMusical, galaPhotos[3], mentalHealthPhotos[3]],
  },
  {
    slug: "eventos-comemorativos",
    title: "Eventos comemorativos",
    kicker: "03 · Datas do ano",
    heading: "Eventos **comemorativos**",
    paragraphs: [
      "O 1 de Junho, as festas de fim de ano, a Gala dos 20 anos e o Dia da Saúde Mental são momentos que juntam utentes, famílias, equipa e comunidade.",
    ],
    image: photos.diaDaCrianca,
    gallery: [photos.eventoComemorativo, photos.diaDaCrianca, galaPhotos[2], mentalHealthPhotos[2]],
    flipGallery: [photos.festaInclusao, photos.actuacaoMusical, galaPhotos[3], mentalHealthPhotos[3]],
  },
  {
    slug: "gala-20-anos",
    title: "Gala dos 20 anos",
    kicker: "04 · Uma história para celebrar",
    heading: "Gala dos **20 anos**",
    paragraphs: [
      "A gala dos 20 anos celebrou o percurso da CERCI-Maputo, reunindo utentes, famílias, equipa, parceiros e amigos.",
      "Reveja alguns momentos desta celebração e das pessoas que fazem parte da história da instituição.",
    ],
    image: {
      src: `/img/Eventos/${encodeURIComponent(galaFolder)}/capa.jpg`,
      alt: "Imagem de capa da Gala dos 20 anos da CERCI-Maputo.",
    },
    videoSrc: "/img/Eventos/Gala%2020%20anos/Video.mp4",
    gallery: galaPhotos,
    flipGallery: galaFlipPhotos,
  },
  {
    slug: "dia-saude-mental-accao-social",
    title: "Dia da Saúde Mental",
    kicker: "05 · Saúde e comunidade",
    heading: "Dia da Saúde **Mental e Acção Social**",
    paragraphs: [
      "A CERCI assinalou o Dia da Saúde Mental com actividades de sensibilização e participação comunitária, em articulação com a Acção Social.",
      "Estes momentos reforçam a importância do bem-estar, da inclusão e do apoio às pessoas e às famílias.",
    ],
    image: {
      src: `/img/Eventos/${mentalHealthFolder.split("/").map(encodeURIComponent).join("/")}/capa.jpg`,
      alt: "Imagem de capa do Dia da Saúde Mental e Acção Social da CERCI-Maputo.",
    },
    gallery: mentalHealthPhotos,
    flipGallery: mentalHealthFlipPhotos,
  },
];

export const eventsCta = {
  title: "Quer **acompanhar a vida do centro**?",
  text: "Publicamos as actividades e os eventos nas nossas redes sociais. Siga-nos para ver para onde vai o contributo de quem nos apoia.",
  primary: { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100068296430676" },
  secondary: { label: "Instagram", href: "https://www.instagram.com/cerci_maputo?xtok=MWcxOHd1MWdzYnlqaA==" },
};
