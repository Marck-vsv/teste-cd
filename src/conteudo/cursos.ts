import type { RegraInicio } from "@/lib/datas";

export type Turma = {
  id: string;
  nome: string;
  dias: string;
  horario: string;
  duracao: string;
  inicio: RegraInicio;
  regraInicio: string;
};

export type Curso = {
  id: "essencial" | "kids";
  nome: string;
  paraQuem: string;
  idade: string;
  participantes: string;
  aulas: string;
  vagas: string;
  valorVista: number;
  parcelas: number;
  valorParcela: number;
  unidadeValor: string;
  incluso: string;
  modulos: string[];
  turmas: Turma[];
};

const SEGUNDA = 1;
const TERCA = 2;
const SABADO = 6;
const MESES_SABADO = [2, 4, 6, 8, 10];
const REGRA_SABADO =
  "A cada 2 meses, no primeiro sábado de fevereiro, abril, junho, agosto e outubro";

export const cursos: Curso[] = [
  {
    id: "essencial",
    nome: "Culinária Essencial",
    paraQuem: "Adolescentes, adultos e idosos que querem aprender a cozinhar do zero.",
    idade: "A partir de 13 anos, sem limite de idade. Menores de 18 anos precisam de um responsável na pré-inscrição.",
    participantes: "Cada pessoa se inscreve individualmente. Não precisa ter experiência.",
    aulas: "8 aulas presenciais de 3 horas",
    vagas: "12 vagas por turma",
    valorVista: 480,
    parcelas: 4,
    valorParcela: 130,
    unidadeValor: "por pessoa",
    incluso: "Ingredientes e avental",
    modulos: [
      "Higiene e segurança na cozinha",
      "Cortes e técnicas básicas",
      "Caldos e molhos",
      "Massas e pães simples",
      "Sobremesas",
    ],
    turmas: [
      {
        id: "essencial-manha",
        nome: "Manhã",
        dias: "Segundas e quartas",
        horario: "8h às 11h",
        duracao: "4 semanas",
        inicio: { tipo: "mensal", diaSemana: SEGUNDA },
        regraInicio: "Todo mês, na primeira segunda-feira",
      },
      {
        id: "essencial-noite",
        nome: "Noite",
        dias: "Terças e quintas",
        horario: "19h às 22h",
        duracao: "4 semanas",
        inicio: { tipo: "mensal", diaSemana: TERCA },
        regraInicio: "Todo mês, na primeira terça-feira",
      },
      {
        id: "essencial-sabado",
        nome: "Sábado",
        dias: "Sábados",
        horario: "14h às 17h",
        duracao: "8 semanas",
        inicio: { tipo: "meses", meses: MESES_SABADO, diaSemana: SABADO },
        regraInicio: REGRA_SABADO,
      },
    ],
  },
  {
    id: "kids",
    nome: "Culinária Kids",
    paraQuem: "Crianças que cozinham junto com um adulto da família.",
    idade: "Crianças de 6 a 12 anos.",
    participantes:
      "Cada criança participa com 1 responsável, que também cozinha na aula. A inscrição é por dupla.",
    aulas: "8 aulas presenciais de 2 horas",
    vagas: "8 duplas por turma",
    valorVista: 560,
    parcelas: 4,
    valorParcela: 150,
    unidadeValor: "por dupla (criança + responsável)",
    incluso: "Ingredientes e aventais da criança e do responsável",
    modulos: [
      "Higiene e segurança na cozinha",
      "Lanches saudáveis",
      "Massas e pães divertidos",
      "Sobremesas",
    ],
    turmas: [
      {
        id: "kids-sabado",
        nome: "Sábado",
        dias: "Sábados",
        horario: "9h às 11h",
        duracao: "8 semanas",
        inicio: { tipo: "meses", meses: MESES_SABADO, diaSemana: SABADO },
        regraInicio: REGRA_SABADO,
      },
    ],
  },
];

export const escola = {
  nome: "Ateliê do Sabor",
  instrutora: {
    nome: "Chef Helena Duarte",
    experiencia: "15 anos de experiência em cozinha profissional",
  },
  certificado: "Certificado de conclusão para quem tiver pelo menos 75% de presença, nos dois cursos.",
  reembolso: "Reembolso integral se você cancelar até 7 dias antes do início da turma.",
  prazoRetorno: "até 2 dias úteis",
  contato: {
    endereco: "Rua das Palmeiras, 85, Centro",
    whatsapp: "(00) 00000-0000",
    whatsappLink: "https://wa.me/5500000000000",
    email: "contato@ateliedosabor.example",
  },
};
