import type { CursoId } from "./turmas";

// Textos e dados da escola num só lugar (§9: textos centralizados).
export const ESCOLA = {
  nome: "Ateliê do Sabor",
  endereco: "Rua das Palmeiras, 85, Centro",
  whatsappExibicao: "(00) 00000-0000",
  // Número fictício do briefing. O link existe, mas não leva a uma conversa real.
  whatsappLink: "https://wa.me/5500000000000",
  email: "contato@ateliedosabor.example",
  instrutora: "Chef Helena Duarte",
} as const;

export type Curso = {
  id: CursoId;
  nome: string;
  paraQuem: string;
  aulas: string;
  vagas: string;
  valor: string;
  valorResumo: string;
  incluso: string;
  modulos: string[];
  descricaoCurta: string;
};

export const CURSOS: Record<CursoId, Curso> = {
  essencial: {
    id: "essencial",
    nome: "Culinária Essencial",
    paraQuem: "Adultos e idosos, a partir de 13 anos, sem pré-requisito",
    aulas: "8 aulas de 3 horas",
    vagas: "12 por turma",
    valor: "R$ 480,00 à vista ou 4x de R$ 130,00 no cartão",
    valorResumo: "R$ 480,00 ou 4x de R$ 130,00",
    incluso: "Ingredientes e avental",
    modulos: [
      "Higiene e segurança na cozinha",
      "Cortes e técnicas básicas",
      "Caldos e molhos",
      "Massas e pães simples",
      "Sobremesas",
    ],
    descricaoCurta: "8 aulas de 3 horas, a partir de 13 anos.",
  },
  kids: {
    id: "kids",
    nome: "Culinária Kids",
    paraQuem: "Crianças de 6 a 12 anos, com 1 responsável que também cozinha",
    aulas: "8 aulas de 2 horas",
    vagas: "8 duplas por turma",
    valor: "R$ 560,00 por dupla, à vista ou 4x de R$ 150,00 no cartão",
    valorResumo: "R$ 560,00 por dupla ou 4x de R$ 150,00",
    incluso: "Ingredientes e dois aventais (criança e responsável)",
    modulos: [
      "Higiene e segurança na cozinha",
      "Lanches saudáveis",
      "Massas e pães divertidos",
      "Sobremesas",
    ],
    descricaoCurta: "8 aulas de 2 horas, de 6 a 12 anos com 1 responsável.",
  },
};

export const REGRA_DE_INICIO =
  "Manhã começa na primeira segunda-feira de cada mês e Noite na primeira terça-feira. Sábado e Kids começam a cada 2 meses, no primeiro sábado de fevereiro, abril, junho, agosto e outubro.";

export const MENU = [
  { href: "#para-quem", rotulo: "Para quem é" },
  { href: "#quem-ensina", rotulo: "Quem ensina" },
  { href: "#cursos", rotulo: "Cursos e turmas" },
  { href: "#duvidas", rotulo: "Dúvidas" },
  { href: "#contato", rotulo: "Contato" },
] as const;

export const FAQ = [
  {
    pergunta: "Preciso ter experiência para fazer o Essencial?",
    resposta:
      "Não. O curso é para quem quer aprender do zero, a partir de 13 anos e sem limite de idade.",
  },
  {
    pergunta: "E se eu desistir depois de me inscrever?",
    resposta:
      "Devolvemos o valor integral se você pedir até 7 dias antes do início da turma.",
  },
  {
    pergunta: "O responsável também cozinha no Kids?",
    resposta:
      "Sim. Cada criança participa com 1 responsável, e os dois cozinham na aula. O valor é por dupla.",
  },
  {
    pergunta: "Posso informar alergias e restrições alimentares?",
    resposta: "Sim. O formulário tem um campo para isso, na etapa 3.",
  },
] as const;

// Imagens geradas por IA (Higgsfield, Z Image). São ilustrativas: não mostram
// aulas reais, alunos nem a instrutora. Sem rostos e sem texto dentro da imagem.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const IMAGENS = {
  ingredientes: {
    src: `${BASE}/imagens/ingredientes.webp`,
    alt: "Tábua de madeira com dois tomates, folhas de manjericão, um monte de farinha e uma colher de pau sobre um pano de linho.",
    width: 1200,
    height: 900,
  },
  massaMaos: {
    src: `${BASE}/imagens/massa-maos.webp`,
    alt: "Mãos de uma pessoa sovando massa de pão sobre uma mesa de madeira coberta de farinha.",
    width: 1200,
    height: 900,
  },
  duplaMassa: {
    src: `${BASE}/imagens/dupla-massa.webp`,
    alt: "Mãos de uma criança e de um adulto, ambos de avental, misturando massa juntas em uma tigela grande.",
    width: 1200,
    height: 900,
  },
  paes: {
    src: `${BASE}/imagens/paes.webp`,
    alt: "Dois pães redondos dourados e uma tigela pequena de azeite sobre um pano de linho.",
    width: 1200,
    height: 900,
  },
} as const;
