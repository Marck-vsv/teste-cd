import { calcularTurmas, hojeEmSaoPaulo, type Turma } from "./turmas";

/**
 * Turmas com a próxima data de início a partir de hoje (fuso de São Paulo).
 * A página é estática: a data é calculada no build. O workflow do GitHub Pages
 * reconstrói o site todo dia para as datas não ficarem desatualizadas.
 */
export function turmasDeHoje(): Turma[] {
  return calcularTurmas(hojeEmSaoPaulo(new Date()));
}
