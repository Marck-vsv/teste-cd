import { cacheLife } from "next/cache";
import { calcularTurmas, hojeEmSaoPaulo, type Turma } from "./turmas";

/**
 * Turmas com a próxima data de início a partir de hoje (fuso de São Paulo).
 * O resultado é cacheado por algumas horas: a data só muda uma vez por dia.
 */
export async function turmasDeHoje(): Promise<Turma[]> {
  "use cache";
  cacheLife("hours");
  return calcularTurmas(hojeEmSaoPaulo(new Date()));
}
