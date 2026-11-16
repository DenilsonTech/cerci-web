import type { Photo } from "./home";

export type SportPhoto = Photo & { caption: string };

const judoPhotos = [
  "A.jpeg",
  "20230403_114649.jpg",
  "20230403_114653.jpg",
  "20230403_114710.jpg",
  "20230403_114731.jpg",
  "20230403_114816.jpg",
  "20230403_114855.jpg",
  "20230403_115013.jpg",
  "20230403_120141.jpg",
  "20230403_114622.jpg",
];

export const sportPage = {
  eyebrow: "Desporto e inclusão",
  title: "Movimento, coragem e **equipa**",
  lede: "O desporto cria oportunidades para desenvolver capacidades, experimentar novas conquistas e participar em conjunto. Conheça alguns momentos das actividades desportivas da CERCI-Maputo.",
  photo: {
    src: "/img/fotos/grupo-desporto.webp",
    alt: "Atletas e técnicos da CERCI reunidos num pavilhão desportivo.",
  } satisfies Photo,
  sections: [
    {
      id: "judo",
      title: "Judo: aprender em **movimento**",
      lede: "Cada treino é uma oportunidade para desenvolver concentração, equilíbrio, disciplina e confiança. Em grupo, cada movimento e cada conquista contam.",
      photos: judoPhotos.map((filename, index) => ({
        src: `/img/Desporto/Judo/${encodeURIComponent(filename)}`,
        alt: `Utentes da CERCI a participar numa actividade de judo, fotografia ${index + 1}.`,
        caption: [
          "O desporto aproxima-nos",
          "Concentração em cada movimento",
          "Praticar e ganhar confiança",
          "Equilíbrio e coordenação",
          "Aprender em conjunto",
          "Disciplina dentro e fora do tatami",
          "Cada treino, uma conquista",
          "Movimento com propósito",
          "Participação e inclusão",
          "Um espaço para aprender",
        ][index],
      } satisfies SportPhoto)),
    },
    {
      id: "basquete",
      title: "Basquetebol: jogar **em equipa**",
      lede: "O basquetebol é movimento, cooperação e alegria partilhada. Cada momento em campo dá espaço à participação e ao espírito de equipa.",
      photos: ["b.jpeg", "c.jpeg"].map((filename, index) => ({
        src: `/img/Desporto/Basquete/${encodeURIComponent(filename)}`,
        alt: `Utentes e equipa da CERCI numa actividade de basquetebol, fotografia ${index + 1}.`,
        caption: ["Jogar lado a lado", "A alegria de participar"][index],
      } satisfies SportPhoto)),
    },
  ],
};
