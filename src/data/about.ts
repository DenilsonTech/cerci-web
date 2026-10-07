/**
 * Sobre nós page content, taken from the current site (cerci.edu.mz).
 * Words in **double asterisks** are bold and coloured.
 */

import { about as homeAbout, type Photo } from "./home";

export const aboutPage = {
  eyebrow: "Sobre nós",
  title: "Quem **somos**",
  lede: "A CERCI-Maputo é uma associação de educação e reabilitação de pessoas com necessidades educativas especiais, criada em 2002 por pais, encarregados de educação e técnicos da CEPOP.",
  photo: {
    src: "/img/banners/sobre-nos.webp",
    alt: "Utentes, famílias e equipa reunidos no pátio do edifício da CERCI, na Av. Milagre Mabote.",
  } satisfies Photo,
};

export const history = {
  id: "historia",
  title: "A nossa **história**",
  paragraphs: [
    "A CERCI foi formalmente criada como associação em 2002, por pais e encarregados de educação de crianças com necessidades educativas especiais que frequentavam a CEPOP e os técnicos desta instituição. Em 2005, a CERCI passou a exercer as suas actividades na FACIM, nas instalações da antiga escola Portuguesa, onde funcionou durante 5 anos. A partir de 2010 a CERCI passou a exercer sua actividades numa residência arrendada na Avenida Kwame Nkrumah, onde funcionou até finais de 2016.",
    "Em 2016, a CERCI realiza o seu grande sonho inaugurando instalações próprias, fruto de um percurso longo de trabalho árduo que compreendeu a obtenção do terreno, desenvolvimento de parcerias para a elaboração do projecto de arquitetura e de engenharia, assim como de mobilização de apoios para a construção e funcionamento do edifício da associação. Hoje a CERCI conta com 64 utentes.",
  ],
  // Same milestones as the home page
  timeline: homeAbout.timeline,
  photo: homeAbout.photo satisfies Photo,
};

export const visionMission = {
  id: "visao-missao",
  vision: {
    title: "Visão",
    text: "Ser uma instituição de excelência na melhoria da qualidade de vida e na criação de oportunidades inclusivas para o exercício autónomo de cidadania das pessoas com necessidades educativas especiais.",
  },
  mission: {
    title: "Missão",
    text: "Realizar de forma sustentável e com alto padrão profissional, actividades de educação e inclusão de pessoas com necessidades educativas especiais.",
  },
};

export const values = {
  id: "valores",
  title: "Os nossos **valores**",
  items: [
    {
      icon: "heart",
      title: "Respeito Mútuo",
      text: "Respeitar, reconhecer e valorizar os direitos e deveres dos utentes, famílias, colaboradores e parceiros. Relacionar de forma aberta com os nossos utentes, colaboradores, parceiros e comunidade honrando os compromissos assumidos.",
    },
    {
      icon: "zap",
      title: "Inovação",
      text: "Investigar e transformar, de forma criativa, a nossa realidade de modo a dar uma resposta eficaz aos desafios crescentes.",
    },
    {
      icon: "eye",
      title: "Transparência",
      text: "Administrar com rigor, honestidade e boas práticas as actividades e os recursos.",
    },
    {
      icon: "users",
      title: "Responsabilidade e Trabalho em Equipa",
      text: "Actuar em conformidade com a Visão, Missão e Valores da CERCI e promover abordagem participativa em todos momentos.",
    },
    {
      icon: "shield",
      title: "Confiança",
      text: "Acreditar nas capacidades, potencialidades e boa-fé dos utentes, colaboradores e parceiros.",
    },
    {
      icon: "trending",
      title: "Empreendedorismo",
      text: "Conceber e concretizar projectos inovadores visando a sustentabilidade e materialização da Visão da CERCI.",
    },
  ],
};

/** Closing call to action, with the association's documents */
export const aboutCta = {
  title: "Quer **caminhar connosco**?",
  text: "Torne-se sócio da CERCI-Maputo e ajude a garantir a continuidade dos nossos serviços. Conheça também o estatuto da associação.",
  primary: { label: "Ficha de sócio", href: "https://cerci.edu.mz/images/fichasocios.docx" },
  secondary: { label: "Estatuto (PDF)", href: "https://cerci.edu.mz/images/estatuto.pdf" },
};
