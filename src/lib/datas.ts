/** Regra de início de uma turma, como descrita no briefing. */
export type RegraInicio =
  | { tipo: "mensal"; diaSemana: number }
  | { tipo: "meses"; meses: number[]; diaSemana: number };

const DIAS_REEMBOLSO = 7;

function primeiroDiaDaSemana(ano: number, mes: number, diaSemana: number) {
  const data = new Date(ano, mes, 1);
  while (data.getDay() !== diaSemana) data.setDate(data.getDate() + 1);
  return data;
}

/** Próxima data de início estritamente depois de `hoje`. */
export function proximoInicio(regra: RegraInicio, hoje: Date): Date {
  const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  for (let i = 0; i < 24; i++) {
    const ano = base.getFullYear() + Math.floor((base.getMonth() + i) / 12);
    const mes = (base.getMonth() + i) % 12;
    if (regra.tipo === "meses" && !regra.meses.includes(mes + 1)) continue;
    const data = primeiroDiaDaSemana(ano, mes, regra.diaSemana);
    if (data > base) return data;
  }
  throw new Error("Regra de início sem data nos próximos 24 meses");
}

export function limiteReembolso(inicio: Date): Date {
  const limite = new Date(inicio);
  limite.setDate(limite.getDate() - DIAS_REEMBOLSO);
  return limite;
}

const formatoData = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

/** 24/09/2026 (§4 do material de apoio). */
export function formatarData(data: Date): string {
  return formatoData.format(data);
}

const formatoMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** R$ 1.234,56 (§4 do material de apoio). */
export function formatarValor(valor: number): string {
  return formatoMoeda.format(valor);
}
