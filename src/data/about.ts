/**
 * Sobre nós page content, taken from the current site (cerci.edu.mz).
 * Words in **double asterisks** are bold and coloured.
 */

import { about as homeAbout, type Photo } from "./home";
import { photos } from "./photos";

export const aboutPage = {
  eyebrow: "Sobre nós",
  title: "Quem **somos**",
  lede: "Criada em 2002 por pais, encarregados de educação e profissionais, a CERCI-Maputo promove educação, reabilitação e inclusão de pessoas com necessidades educativas especiais.",
  photo: {
    src: "/img/banners/sobre-nos.webp",
    alt: "Utentes, famílias e equipa reunidos no pátio do edifício da CERCI, na Av. Milagre Mabote.",
  } satisfies Photo,
};

export const whoWeAre = {
  id: "quem-somos",
  title: "Quem **somos**",
  paragraphs: [
    "A CERCI-Maputo é uma instituição criada por pais de pessoas com deficiência e profissionais de saúde. Estamos localizados na Av. Milagre Mabote, n.º 238, em Maputo.",
    "Apoiamos pessoas com diferentes necessidades de desenvolvimento e aprendizagem, promovendo oportunidades, autonomia, participação e inclusão. Prestamos serviços de estimulação e reabilitação a crianças e jovens com necessidades educativas especiais.",
  ],
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

/** Photos from along the way */
export const memories = {
  id: "memorias",
  title: "Memórias **do nosso percurso**",
  lede: "Alguns momentos do caminho que a CERCI fez até hoje.",
  gallery: [photos.kwameNkrumah, photos.rodaArLivre, photos.tecnicoEUtente, photos.salaDeActividades],
  flipGallery: [photos.actividadesLaborais, photos.familiaEquipa, photos.aulaDeMusica, photos.culinaria],
};

export const visionMission = {
  id: "visao-missao",
  mission: {
    title: "Missão",
    text: "Educação, reabilitação e inclusão de pessoas com necessidades educativas especiais, com alto padrão profissional e de forma sustentável.",
  },
  vision: {
    title: "Visão",
    text: "Ser uma instituição de excelência na melhoria da qualidade de vida e na criação de oportunidades inclusivas para o exercício autónomo da cidadania das pessoas com necessidades educativas especiais e seus familiares.",
  },
};

export const organization = {
  id: "organograma",
  title: "Estrutura **orgânica**",
  intro: "A estrutura da CERCI-Maputo organiza-se a partir do Conselho Directivo e da Coordenação, com áreas de apoio e três núcleos de actuação.",
  leadership: ["Conselho Directivo", "Coordenador"],
  support: ["Parceria e Projectos", "Comunicação e Imagem"],
  departments: [
    {
      title: "Estimulação e Reabilitação",
      units: [
        "Psicologia e Psiquiatria",
        "Terapia Ocupacional",
        "Terapia da Fala",
        "Orientação escolar",
      ],
    },
    {
      title: "Inclusão e Diversidade",
      units: ["Oficinas Profissionalizantes", "Empregabilidade"],
    },
    {
      title: "Administração e Financeiro",
      units: ["Logística", "Finanças e Contabilidade", "Recursos Humanos"],
    },
  ],
};

export const facilities = {
  id: "instalacoes",
  title: "As nossas **instalações**",
  lede: "Espaços de aprendizagem, reabilitação, convívio e trabalho, preparados para responder às necessidades dos utentes.",
  groups: [
    {
      title: "Convívio e apoio",
      items: [
        "Pátio para exercícios físicos, actividades lúdicas e encontros com famílias e trabalhadores.",
        "Refeitório, também utilizado para encontros com famílias e trabalhadores.",
        "Cozinha para confecção de alimentos.",
        "Sanitários para ambos os géneros e vestiário.",
      ],
    },
    {
      title: "Administração e equipa",
      items: [
        "Sala da Administração e Finanças.",
        "Sala de Coordenação.",
        "Sala de reuniões.",
        "Sala para técnicos e terapias, consultas de especialidades e acompanhamento de reabilitação.",
      ],
    },
    {
      title: "Aprendizagem e autonomia",
      items: [
        "Sala do 5.º ano pré-escolar: introdução ao Português e à Matemática.",
        "Sala do 4.º ano pré-escolar: linguagem, autonomia e animais domésticos.",
        "Sala de preparação para o ingresso no ensino primário: cálculo, leitura e escrita.",
        "Sala do 4.º ano: introdução a cálculos e operações matemáticas básicas.",
        "Sala do 1.º ano pré-escolar: estimulação precoce, socialização e autonomia pessoal.",
        "Sala do 3.º ano pré-escolar: autonomia pessoal, saber ser e estar.",
        "Sala do 1.º ano pré-escolar: formação pessoal e higiene.",
        "Sala de ensino profissionalizante: ateliê de costura, música, artes e culinária.",
      ],
    },
  ],
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
