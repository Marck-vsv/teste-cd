export type CursoId = "essencial" | "kids";
export type TurmaId = "manha" | "noite" | "sabado" | "kids-sabado";

type Dia = { ano: number; mes: number; dia: number };

type TurmaBase = {
  id: TurmaId;
  curso: CursoId;
  nome: string;
  quando: string;
  duracao: string;
  // Dia da semana (0 = domingo) e meses de início permitidos.
  diaSemana: number;
  meses: number[] | "todos";
};

export type Turma = TurmaBase & {
  inicio: string;
  reembolsoAte: string;
  reembolsoAberto: boolean;
};

const TODOS_OS_MESES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MESES_SABADO = [2, 4, 6, 8, 10];

const TURMAS_BASE: TurmaBase[] = [
  {
    id: "manha",
    curso: "essencial",
    nome: "Manhã",
    quando: "Segundas e quartas, 8h às 11h",
    duracao: "4 semanas",
    diaSemana: 1,
    meses: "todos",
  },
  {
    id: "noite",
    curso: "essencial",
    nome: "Noite",
    quando: "Terças e quintas, 19h às 22h",
    duracao: "4 semanas",
    diaSemana: 2,
    meses: "todos",
  },
  {
    id: "sabado",
    curso: "essencial",
    nome: "Sábado",
    quando: "Sábados, 14h às 17h",
    duracao: "8 semanas",
    diaSemana: 6,
    meses: MESES_SABADO,
  },
  {
    id: "kids-sabado",
    curso: "kids",
    nome: "Sábado",
    quando: "Sábados, 9h às 11h",
    duracao: "8 semanas",
    diaSemana: 6,
    meses: MESES_SABADO,
  },
];

function paraUtc({ ano, mes, dia }: Dia) {
  return Date.UTC(ano, mes - 1, dia);
}

function dePartesUtc(ms: number): Dia {
  const d = new Date(ms);
  return {
    ano: d.getUTCFullYear(),
    mes: d.getUTCMonth() + 1,
    dia: d.getUTCDate(),
  };
}

/** Primeiro dia da semana `diaSemana` (0 = domingo) no mês indicado. */
function primeiroDiaDaSemana(ano: number, mes: number, diaSemana: number): Dia {
  const primeiroDoMes = new Date(Date.UTC(ano, mes - 1, 1)).getUTCDay();
  const dia = 1 + ((diaSemana - primeiroDoMes + 7) % 7);
  return { ano, mes, dia };
}

/** Próximo início estritamente depois de `hoje`. */
export function proximoInicio(turma: TurmaBase, hoje: Dia): Dia {
  const meses = turma.meses === "todos" ? TODOS_OS_MESES : turma.meses;
  const hojeMs = paraUtc(hoje);
  for (let ano = hoje.ano; ano <= hoje.ano + 1; ano++) {
    for (const mes of meses) {
      const candidato = primeiroDiaDaSemana(ano, mes, turma.diaSemana);
      if (paraUtc(candidato) > hojeMs) return candidato;
    }
  }
  throw new Error(`Sem próximo início para a turma ${turma.id}`);
}

export function formatarData({ ano, mes, dia }: Dia) {
  const d = String(dia).padStart(2, "0");
  const m = String(mes).padStart(2, "0");
  return `${d}/${m}/${ano}`;
}

/** Data de hoje em São Paulo, independente do fuso do servidor. */
export function hojeEmSaoPaulo(agora: Date): Dia {
  const partes = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(agora);
  const [ano, mes, dia] = partes.split("-").map(Number);
  return { ano, mes, dia };
}

export function calcularTurmas(hoje: Dia): Turma[] {
  const hojeMs = paraUtc(hoje);
  return TURMAS_BASE.map((base) => {
    const inicio = proximoInicio(base, hoje);
    const limite = dePartesUtc(paraUtc(inicio) - 7 * 24 * 60 * 60 * 1000);
    return {
      ...base,
      inicio: formatarData(inicio),
      reembolsoAte: formatarData(limite),
      reembolsoAberto: paraUtc(limite) >= hojeMs,
    };
  });
}
