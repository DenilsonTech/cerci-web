/**
 * The CERCI services. The home page shows the first three; the Serviços page
 * shows all of them, with the full text in `details`.
 */

export type Service = {
  /** Anchor on the Serviços page, e.g. /servicos#fisioterapia */
  slug: string;
  title: string;
  /** Title with **bold** words, for the Serviços page */
  heading: string;
  /** Short version, for cards */
  summary: string;
  /** Full text, one string per paragraph */
  details: string[];
  image: { src: string; alt: string };
};

export const servicesList: Service[] = [
  {
    slug: "ensino-e-formacao",
    title: "Ensino e formação",
    heading: "Ensino **e formação**",
    summary:
      "Do pré-escolar do I ao V ano e ensino primário da 1.ª e 2.ª classe, com estimulação da motricidade, linguagem, cognição e socio-afectividade.",
    details: [
      "O CERCI presta serviços de Educação e Formação de crianças e jovens com necessidades educativas especiais, desde o nível do pré-escolar do I ao V ano e ensino primário 1ª e 2ª classe. O centro oferece actividades pedagógicas de estimulação das principais áreas do desenvolvimento (motricidade, linguagem, cognição, socio-efetivo) iniciação à escrita e leitura. Durante o processo educativo, os utentes são dotados de ferramentas e habilidades para a vida, cujo objectivo é torna-los indivíduos autónomos, no máximo das suas potencialidades.",
      "Para além das actividades acima citadas são também administrados trabalhos de orientação profissional como corte costura, culinária e actividades do refetório cuja finalidade é o ingresso no mercado do emprego. O centro disponibiliza também aulas extracurriculares desde informática, música, xadrez, dança e capoeira.",
    ],
    image: {
      src: "/img/servicos/ensino.webp",
      alt: "Ilustração de duas crianças a estudar numa sala de aula.",
    },
  },
  {
    slug: "acompanhamento-psicologico",
    title: "Acompanhamento psicológico",
    heading: "Acompanhamento **psicológico**",
    summary:
      "Avaliação, intervenção e encaminhamento. Despiste precoce de atrasos de desenvolvimento, com envolvimento directo dos cuidadores.",
    details: [
      "O serviço de atendimento psicológico oferecido pela CERCI é de avaliação, intervenção e encaminhamentos, onde, no processo de avaliação faz-se o despiste de atrasos nas áreas de desenvolvimento nos primeiros anos de vida e possíveis implicações não só na vida escolar como social. As intervenções consistem na estimulação precoce cujo objectivo é amenizar e /ou sanar qualquer limitação ou dificuldade que o utente apresente, reduzindo assim possíveis impactos no seu desenvolvimento. Durante o processo interventivo conta-se também com o envolvimento dos cuidadores primários e as actividades são realizadas dentro e fora do centro, ampliando assim os ambientes de atuação.",
      "Existem casos que são encaminhados para outras áreas ou serviços de saúde específicos a nível interno (Terapias de fala, ocupacional e fisioterapia) ou externo (Otorrinolaringologia, oftamologia, etc.) ou ainda o encaminhados para algumas escolas ou centros de acolhimento que possa dar o acompanhamento necessário.",
    ],
    image: {
      src: "/img/servicos/psicologia.webp",
      alt: "Ilustração de uma sessão de acompanhamento psicológico.",
    },
  },
  {
    slug: "terapia-da-fala",
    title: "Terapia da fala",
    heading: "Terapia **da fala**",
    summary:
      "Prevenção e avaliação das perturbações da comunicação, na linguagem oral, escrita e não verbal, e no apoio à deglutição.",
    details: [
      "A terapia da fala actua na prevenção, avaliação e estudo científicos das perturbações da comunicação, englobando não só todas as funções associadas a compreensão e expressão da linguagem oral e escrita, mas também outras formas de comunicação não verbal.",
      "Intervém também ao nível da deglutição (passagem segura dos alimentos e bebidas através da orofaringe). Esta terapia é indicada a qualquer individuo independentemente da sua faixa etária, tendo como objectivo melhorar as capacidades de comunicação e/ou deglutinação do individuo, permitindo assim melhor qualidade de vida.",
    ],
    image: {
      src: "/img/servicos/terapia-da-fala.webp",
      alt: "Ilustração de uma terapeuta da fala a trabalhar com uma criança ao espelho.",
    },
  },
  {
    slug: "terapia-ocupacional",
    title: "Terapia ocupacional",
    heading: "Terapia **ocupacional**",
    summary:
      "Maior controlo motor e autonomia nas actividades da vida diária, com estímulo da coordenação óculo-manual e da percepção sensorial.",
    details: [
      "Esta área de actuação tem como objectivo promover maior controle das capacidades motoras, bem como habilitar o individuo para as actividades de vida diárias (AVDs), estimular a coordenação oculo-manual, sensorial, perceção auditiva, táctil, visual, gustativa bem como promover independência funcional.",
    ],
    image: {
      src: "/img/servicos/terapia-ocupacional.webp",
      alt: "Ilustração de uma sessão de terapia ocupacional com material de coordenação.",
    },
  },
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    heading: "**Fisioterapia**",
    summary:
      "Reabilitação da mobilidade e da funcionalidade ao longo da vida, com foco na prevenção, no tratamento e na qualidade de vida.",
    details: [
      "É um dos serviços de reabilitação oferecidas pela CERCI, que visa a promoção, e desenvolvimento de potencial e reabilitação das capacidades e mobilidades e funcionalidade dos indivíduos ao longo da vida. O seu principal objectivo é maximizar a qualidade de vida e de potencial os movimentos e na promoção, prevenção, tratamento e intervenção.",
    ],
    image: {
      src: "/img/servicos/fisioterapia.webp",
      alt: "Ilustração de uma sessão de fisioterapia.",
    },
  },
];

/** Top of the Serviços page */
export const servicesPage = {
  eyebrow: "Serviços",
  title: "Nossos **Serviços**",
  lede: "A escola conta com os seguintes serviços, reunidos num só lugar e articulados entre si por uma equipa multidisciplinar.",
  photo: {
    src: "/img/banners/servicos.webp",
    alt: "Uma técnica da CERCI acompanha uma criança num treino de marcha com canadianas, no exterior do centro.",
    // Keep the child, on the right of the photo, in view on narrow screens
    focus: "80% center",
  },
};

/** How the services fit together along each person's path */
export const approach = {
  title: "Um centro, **várias respostas**",
  lede: "Da sala de aula à sala de terapia, os serviços da CERCI articulam-se para acompanhar o percurso de cada utente.",
  items: [
    {
      title: "Avaliação",
      text: "Despiste de atrasos nas áreas de desenvolvimento nos primeiros anos de vida e das possíveis implicações na vida escolar e social.",
    },
    {
      title: "Intervenção",
      text: "Estimulação precoce para amenizar ou sanar limitações, com o envolvimento dos cuidadores primários, dentro e fora do centro.",
    },
    {
      title: "Encaminhamento",
      text: "Para serviços internos — terapia da fala, ocupacional e fisioterapia — ou externos, quando o caso o exige.",
    },
    {
      title: "Orientação profissional",
      text: "Corte e costura, culinária e actividades de refeitório, com vista ao ingresso no mercado de emprego.",
    },
    {
      title: "Aulas extracurriculares",
      text: "Informática, música, xadrez, dança e capoeira, abertas aos utentes do centro.",
    },
    {
      title: "Equipa multidisciplinar",
      text: "Professores, psicólogos, terapeutas da fala, terapeutas ocupacionais e fisioterapeutas no mesmo espaço.",
    },
  ],
};

/** Closing call to action */
export const enrolCta = {
  title: "Quer **inscrever um utente** no CERCI-Maputo?",
  text: "Preencha a ficha de candidatura e marque uma avaliação inicial com a nossa equipa técnica. Atendemos de segunda a sexta, das 7h30 às 15h30.",
  primary: {
    label: "Descarregar a ficha",
    href: "https://cerci.edu.mz/images/Ficha_de_Candidatura_Utente.docx",
  },
  secondary: { label: "Falar connosco", href: "/#contactos" },
};
