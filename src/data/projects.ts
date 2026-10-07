/**
 * Projectos page content. Words in **double asterisks** are bold and
 * coloured.
 */

import type { Photo } from "./home";
import { contact } from "./site";

export type Project = {
  /** Anchor on the page, e.g. /projectos/#emprego */
  slug: string;
  title: string;
  /** Small label above the title */
  kicker: string;
  /** Title with **bold** words */
  heading: string;
  paragraphs: string[];
  image: Photo;
  /** YouTube video shown under the project */
  video?: { id: string; title: string };
};

export const projectsPage = {
  eyebrow: "Projectos",
  title: "Projectos que **constroem futuro**",
  lede: "Quatro projectos sustentam o trabalho da CERCI-Maputo: o espaço onde funcionamos, o emprego dos nossos jovens, o apadrinhamento dos utentes e o apoio a cada sala.",
  photo: {
    src: "/img/banners/projectos.webp",
    alt: "Maquete do edifício próprio da CERCI, construído com o projecto Tijolos do Sonho.",
  } satisfies Photo,
};

export const projectsList: Project[] = [
  {
    slug: "tijolos-do-sonho",
    title: "Tijolos do Sonho",
    kicker: "Projecto · 2009",
    heading: "Tijolos **do Sonho**",
    paragraphs: [
      "O projecto tijolo dos sonhos foi concebido em 2009 com objectivo de angariação de fundos para aquisição de um espaço físico próprio e definitivo para escola. A concretização deste projecto foi possível graças a parcerias com artistas, cientistas, corporações e indivíduos singulares.",
      "Esta é a música intitulada \"Tijolos dos sonhos\", composta pelo músico moçambicano Guerte Geraldo Bambo mais conhecido por G2, em prol do nosso projecto Tijolos do sonho. Este som faz parte da nossa história e tem-nos acompanhado em todos os momentos.",
    ],
    image: {
      src: "/img/fotos/edificio-cerci.webp",
      alt: "Edifício próprio da CERCI, construído com o projecto Tijolos do Sonho.",
    },
    video: { id: "AJS6Us8xLjs", title: "Tijolos dos Sonhos — G2" },
  },
  {
    slug: "emprego-protegido",
    title: "Emprego protegido",
    kicker: "Projecto · 2019",
    heading: "Emprego **protegido**",
    paragraphs: [
      "Em 2019 a Sociedade de Desenvolvimento do Porto de Maputo (MPDC) em parceria com CERCI MAPUTO-Associação de Educação e Reabilitação de Cidadãos Inadaptados e o Fórum das Associações Moçambicanas para Deficiência (FAMOD), pôs em marcha um projecto inovador baptizado como “Porto+”. Que visa oferecer iguais oportunidades de emprego a pessoas com deficiência, o qual resultou na integração de 15 pessoas no seu quadro pessoal.",
      "Neste grupo pioneiro de colaboradores, 4 são provenientes do CERCI MAPUTO, o que representa uma conquista para a nossa associação, pois tem vindo a desenvolver actividades que visam a inserção social e profissional de pessoas com deficiência. O nosso maior objectivo é que maior número de empresas abracem esta causa.",
    ],
    image: {
      src: "/img/fotos/estagio-porto-maputo.webp",
      alt: "Colaboradores vindos da CERCI no refeitório do Porto de Maputo, com coletes de segurança.",
    },
  },
  {
    slug: "apadrinhe-uma-crianca",
    title: "Apadrinhe uma Criança",
    kicker: "Projecto · Apadrinhamento",
    heading: "Apadrinhe **uma Criança**",
    paragraphs: [
      "O apadrinhamento escolar de um utente no CERCI Maputo, é um sistema pelo qual qualquer pessoa ou empresa tem a oportunidade de colaborar com o desenvolvimento de uma ou mais crianças/adolescentes, cobrindo os gastos mensais (mensalidade escolar, terapias, alimentação), dando assim oportunidades aos utentes cujo os pais e encarregados de educação não tem condições financeiras para suprir as necessidades escolares. O investimento mensal por utente é de 6000,00MT (seis mil meticais).",
      "Quem pode ser padrinho/madrinha? Pessoas maiores civilmente (independente do estado civil, raça e sexo), e é importante que o (a) padrinho/madrinha cumpra as regras estabelecidas.",
    ],
    image: {
      src: "/img/fotos/actividades-laborais.webp",
      alt: "Utentes da CERCI numa actividade de trabalhos manuais, à volta das mesas.",
    },
  },
];

export const embraceRoom = {
  slug: "abrace-uma-sala",
  title: "Abrace **uma Sala**",
  lede: "O projecto Abrace uma Sala tem como objectivo a angariação de fundos, para suportar e responder às necessidades de uma turma, sendo na aquisição de material didáctico indispensável para a estimulação dos utentes, bem como a contratação de profissionais de diferentes áreas de actuação (educação e saúde), formação e especialização dos mesmos.",
  // Rooms already embraced, named after their sponsor
  rooms: ["MOTA-ENGIL", "CASINO POLANA", "STANDARD BANK", "BANCO ÚNICO", "PIPELINE"],
  items: [
    {
      title: "Material didáctico",
      text: "Aquisição do material indispensável para a estimulação dos utentes de cada turma.",
    },
    {
      title: "Profissionais",
      text: "Contratação, formação e especialização de profissionais de educação e de saúde.",
    },
    {
      title: "Contribuição de todos",
      text: "Contamos com a contribuição de singulares e organizações que se identificam com o nosso trabalho. O valor angariado é revertido a favor das despesas de cada sala.",
    },
  ],
};

export const projectsCta = {
  title: "O nosso lema é **“Acredite, Somos Capazes”**",
  text: "Cada projecto da CERCI-Maputo nasceu de uma parceria. Junte-se ao movimento: apadrinhe um utente, abrace uma sala ou traga a sua empresa para o emprego protegido.",
  primary: { label: "Quero contribuir", href: "/#contactos" },
  secondary: { label: contact.email.label, href: contact.email.href },
};
