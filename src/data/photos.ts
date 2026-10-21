/**
 * Photos used on more than one page, described once. The alt text says what
 * the photo shows, nothing more.
 */

import type { Photo } from "./home";

const p = (file: string, alt: string, focus?: string): Photo => ({ src: `/img/fotos/${file}.webp`, alt, focus });

export const photos = {
  // Daily life at the centre
  culinaria: p("culinaria", "Utentes da CERCI a preparar comida numa actividade de culinária."),
  salaDeAula: p("sala-de-aula", "Utentes da CERCI numa sala de aula, sentados às carteiras."),
  actividadesLaborais: p("actividades-laborais", "Utentes da CERCI numa actividade de trabalhos manuais, à volta das mesas."),
  cozinha: p("cozinha", "Duas colaboradoras da CERCI na cozinha do centro."),
  aulaDeMusica: p("aula-de-musica", "Uma professora e uma utente numa sala com um teclado e material de aula.", "center 75%"),
  sessaoDeTerapia: p("sessao-de-terapia", "Uma técnica da CERCI acompanha uma criança numa sessão de terapia, numa marquesa.", "center 65%"),
  salaDeActividades: p("sala-de-actividades", "Uma sala de actividades da CERCI, com mesas, brinquedos e um cesto de basquetebol.", "center 70%"),
  pinturaMural: p("pintura-mural", "Utente da CERCI a pintar um mural verde numa parede do centro."),
  corridaSacos: p("corrida-sacos", "Crianças numa corrida de sacos no pátio da CERCI, acompanhadas pela equipa."),

  // Outings and celebrations
  visitaAviao: p("visita-de-estudo-aviao", "Utentes da CERCI sentados num avião, durante uma viagem."),
  visitaBombeiros: p("visita-bombeiros", "Utente em cadeira de rodas, com capacete de bombeiro, numa visita a um quartel de bombeiros."),
  comitivaAeroporto: p("comitiva-aeroporto", "Comitiva recebida com flores à saída das chegadas do aeroporto, com a bandeira de Moçambique."),
  familiaEquipa: p("familia-equipa", "Equipa da CERCI, de camisolas verdes, com uma família e uma criança."),
  diaDaCrianca: p("dia-da-crianca", "Utentes e equipa da CERCI com fitas e lenços de capulana, numa celebração."),
  eventoComemorativo: p("evento-comemorativo", "Crianças e jovens da CERCI sentados num evento festivo, com familiares ao fundo."),
  festaInclusao: p("festa-inclusao", "Uma técnica da CERCI dança com um utente em cadeira de rodas, numa festa do centro."),
  actuacaoMusical: p("actuacao-musical", "Jovem da CERCI a cantar ao microfone, com o coro atrás."),
  grupoDesporto: p("grupo-desporto", "Grande grupo de atletas e técnicos da CERCI num pavilhão desportivo."),

  // Earlier years
  kwameNkrumah: p("kwame-nkrumah", "Utentes da CERCI de uniforme, na residência da Av. Kwame Nkrumah."),
  rodaArLivre: p("roda-ao-ar-livre", "Utentes e técnicos da CERCI de mãos dadas numa roda, ao ar livre."),
  tecnicoEUtente: p("tecnico-e-utente", "Um técnico da CERCI e uma utente, sorridentes, no exterior do centro."),
};
