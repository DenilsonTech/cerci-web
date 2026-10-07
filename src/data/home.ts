import { servicesList } from "./services";

/**
 * Home page content. Wrapping words in **double asterisks** makes them bold
 * and coloured (green on light backgrounds, lime on dark ones).
 *
 * `image` is the caption of the photo for that spot: the placeholder shows it
 * while there is no photo, and it becomes the alt text once there is one.
 */

export type Action = {
  label: string;
  href: string;
  variant?: "link" | "accent" | "outline";
};

export type Photo = {
  src: string;
  alt: string;
  /** Part of the photo that stays in view when cropped (CSS object-position) */
  focus?: string;
};

export type TimelineItem = {
  year: string;
  /** Where the CERCI was that year */
  place: string;
  text: string;
};

export type CardItem = {
  title: string;
  text: string;
  /** Caption shown by the placeholder while there is no photo */
  image: string;
  /** The photo itself, once it exists */
  src?: string;
  action: Action;
};

export const hero = {
  title: "Acredite, **Somos capazes**",
  subtitle:
    "Educação e reabilitação de crianças e jovens com necessidades educativas especiais, em Maputo, desde 2002.",
  image: "Fotografia de abertura",
  photo: {
    src: "/img/fotos/festa-inclusao.webp",
    alt: "Uma técnica da CERCI dança com um utente em cadeira de rodas, numa festa do centro.",
  } satisfies Photo,
  actions: [
    { label: "Inscrever um utente", href: "#apoiar", variant: "accent" },
    { label: "Ver os nossos serviços", href: "/servicos/", variant: "outline" },
  ] satisfies Action[],
};

export const about = {
  title: "Por uma **cidadania autónoma**,\ndigna **e inclusiva**",
  lede: "A CERCI nasceu em 2002 pelas mãos de pais, encarregados de educação e técnicos da CEPOP. Vinte e quatro anos depois, funciona em instalações próprias e acompanha 64 utentes com uma equipa multidisciplinar.",
  photo: {
    src: "/img/fotos/edificio-cerci.webp",
    alt: "Edifício próprio da CERCI, na Av. Milagre Mabote, com murais coloridos e um pátio relvado.",
  } satisfies Photo,
  timeline: [
    {
      year: "2002",
      place: "CEPOP",
      text: "Constituição da associação, nas instalações da CEPOP.",
    },
    {
      year: "2005",
      place: "FACIM",
      text: "Mudança para a FACIM, na antiga escola Portuguesa.",
    },
    {
      year: "2010",
      place: "Av. Kwame Nkrumah",
      text: "Seis anos numa residência na Av. Kwame Nkrumah.",
    },
    {
      year: "2016",
      place: "Av. Milagre Mabote",
      text: "Inauguração do edifício próprio, na Av. Milagre Mabote.",
    },
  ] satisfies TimelineItem[],
  action: { label: "Conhecer a nossa história", href: "/sobre-nos/" } as Action,
};

export const impact = {
  title: "O nosso **impacto**",
  image: "Fotografia de grupo da CERCI",
  photo: {
    src: "/img/fotos/grupo-desporto.webp",
    alt: "Grande grupo de atletas e técnicos da CERCI num pavilhão desportivo.",
  } satisfies Photo,
  stats: [
    { icon: "users", value: 64, label: "Utentes acompanhados" },
    { icon: "heart", value: 5, label: "Serviços especializados" },
    { icon: "clock", value: 24, label: "Anos de actividade" },
    // A year, not a quantity: shown as-is, without the count-up.
    { icon: "home", value: 2016, label: "Instalações próprias", static: true },
  ],
};

// The home shows three services; the Serviços page has all of them.
export const services = {
  title: "Serviços que **transformam vidas**",
  lede: "Uma equipa multidisciplinar num só lugar. As crianças e jovens são avaliados, acompanhados e, quando necessário, encaminhados para outras especialidades.",
  items: servicesList.slice(0, 3).map(
    (s): CardItem => ({
      title: s.title,
      text: s.summary,
      image: s.image.alt,
      src: s.image.src,
      action: { label: "Saber mais", href: `/servicos/#${s.slug}` },
    })
  ),
  more: { label: "Ver todos os serviços", href: "/servicos/" } as Action,
};

export const events = {
  title: "A vida **do centro**",
  lede: "Actividades curriculares, visitas de estudo e datas comemorativas. É aqui que quem nos apoia vê para onde vai o seu contributo.",
  items: [
    {
      title: "Actividades curriculares",
      text: "Corte e costura, culinária e refeitório, a par de informática, música, xadrez, dança e capoeira.",
      image: "Utentes da CERCI numa actividade de trabalhos manuais, à volta das mesas.",
      src: "/img/fotos/actividades-laborais.webp",
      action: { label: "Ver galeria", href: "/eventos/" },
    },
    {
      title: "Visitas de estudo",
      text: "Saídas que levam a aprendizagem para fora do centro e alargam os ambientes de actuação dos utentes.",
      image: "Utente em cadeira de rodas, com capacete de bombeiro, numa visita a um quartel de bombeiros.",
      src: "/img/fotos/visita-bombeiros.webp",
      action: { label: "Ver galeria", href: "/eventos/" },
    },
    {
      title: "Eventos comemorativos",
      text: "Dia da Criança, festas de fim de ano e as datas que juntam famílias, utentes e parceiros.",
      image: "Crianças e jovens da CERCI sentados num evento festivo, com familiares ao fundo.",
      src: "/img/fotos/evento-comemorativo.webp",
      action: { label: "Ver galeria", href: "/eventos/" },
    },
  ] satisfies CardItem[],
};

export const testimonials = {
  eyebrow: "Testemunhos",
  title: "O que dizem **os nossos pais**",
  // https://youtu.be/YrpVleds1kE
  video: { id: "YrpVleds1kE", title: "CERCI — Acredita, somos capazes!" },
};

export const support = {
  title: "Caminhe **connosco**",
  lede: "A CERCI vive das famílias, dos sócios, dos voluntários e dos parceiros que a sustentam. Há três formas de entrar.",
  items: [
    {
      title: "Inscrever um utente",
      text: "Preencha a ficha de candidatura e marque uma avaliação inicial com a nossa equipa técnica.",
      image: "Crianças numa corrida de sacos no pátio da CERCI, acompanhadas pela equipa.",
      src: "/img/fotos/corrida-sacos.webp",
      action: {
        label: "Descarregar a ficha",
        href: "https://cerci.edu.mz/images/Ficha_de_Candidatura_Utente.docx",
        variant: "accent",
      },
    },
    {
      title: "Tornar-se sócio",
      text: "A quota dos sócios financia o funcionamento diário do centro e garante a continuidade dos serviços.",
      image: "Equipa da CERCI, de camisolas verdes, com uma família e uma criança.",
      src: "/img/fotos/familia-equipa.webp",
      action: {
        label: "Ficha de sócio",
        href: "https://cerci.edu.mz/images/fichasocios.docx",
        variant: "outline",
      },
    },
    {
      title: "Ser voluntário",
      text: "Damos formação e integramos voluntários nas actividades pedagógicas, terapêuticas e nos eventos.",
      image: "Utente da CERCI a pintar um mural verde numa parede do centro.",
      src: "/img/fotos/pintura-mural.webp",
      action: { label: "Candidatar-me", href: "/voluntariado/", variant: "outline" },
    },
  ] satisfies CardItem[],
};

export const motto = {
  text: "Cada um no **máximo das suas potencialidades**",
  image: "Fotografia de fundo do lema",
  photo: {
    src: "/img/fotos/actuacao-musical.webp",
    alt: "Jovem da CERCI a cantar ao microfone, com o coro atrás.",
  } satisfies Photo,
};
