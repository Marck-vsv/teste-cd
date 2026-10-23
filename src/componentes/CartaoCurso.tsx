import type { Curso } from "@/conteudo/cursos";
import { formatarValor } from "@/lib/datas";
import { ProximaData } from "./ProximaData";

export function textoValor(curso: Curso) {
  const total = curso.parcelas * curso.valorParcela;
  return `${formatarValor(curso.valorVista)} à vista ou ${curso.parcelas}x de ${formatarValor(curso.valorParcela)} no cartão (total de ${formatarValor(total)}), ${curso.unidadeValor}`;
}

// §1: os dois cursos com os mesmos atributos, na mesma ordem.
export function CartaoCurso({ curso }: { curso: Curso }) {
  return (
    <article className="cartao" id={`curso-${curso.id}`} aria-labelledby={`titulo-${curso.id}`}>
      <h3 id={`titulo-${curso.id}`}>{curso.nome}</h3>
      <dl className="atributos">
        <dt>Para quem é</dt>
        <dd>{curso.paraQuem}</dd>
        <dt>Idade</dt>
        <dd>{curso.idade}</dd>
        <dt>Como participa</dt>
        <dd>{curso.participantes}</dd>
        <dt>Aulas</dt>
        <dd>{curso.aulas}</dd>
        <dt>Vagas</dt>
        <dd>{curso.vagas}</dd>
        <dt>Valor</dt>
        <dd>{textoValor(curso)}</dd>
        <dt>Incluso</dt>
        <dd>{curso.incluso}</dd>
        <dt>Módulos</dt>
        <dd>
          <ol className="modulos">
            {curso.modulos.map((modulo) => (
              <li key={modulo}>{modulo}</li>
            ))}
          </ol>
        </dd>
      </dl>

      <h4>{curso.turmas.length > 1 ? "Turmas" : "Turma"}</h4>
      <ul className="turmas">
        {curso.turmas.map((turma) => (
          <li key={turma.id} className="turma">
            <p className="turma__nome">Turma {turma.nome}</p>
            <dl className="atributos atributos--compacto">
              <dt>Dias e horário</dt>
              <dd>
                {turma.dias}, das {turma.horario}
              </dd>
              <dt>Duração</dt>
              <dd>{turma.duracao}</dd>
              <dt>Início</dt>
              <dd>{turma.regraInicio}</dd>
              <ProximaData regra={turma.inicio} />
            </dl>
          </li>
        ))}
      </ul>
    </article>
  );
}
