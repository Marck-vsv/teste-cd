import { CURSOS } from "@/lib/conteudo";
import type { Turma } from "@/lib/turmas";
import {
  type Dados,
  type Etapa,
  formatarTelefone,
  perfilDe,
  temResponsavel,
} from "./validacao";

export function turmaEscolhida(dados: Dados, turmas: Turma[]) {
  return turmas.find((t) => t.id === dados.turmaId);
}

type Grupo = {
  titulo: string;
  etapa: Etapa;
  linhas: { rotulo: string; valor: string }[];
};

export function montarGrupos(dados: Dados, turmas: Turma[]): Grupo[] {
  const curso = dados.cursoId ? CURSOS[dados.cursoId] : null;
  const turma = turmaEscolhida(dados, turmas);
  const perfil = perfilDe(dados);
  const comResponsavel = temResponsavel(perfil);

  const grupos: Grupo[] = [
    {
      titulo: "Curso e turma",
      etapa: 1,
      linhas: [
        { rotulo: "Curso", valor: curso?.nome ?? "-" },
        {
          rotulo: "Turma",
          valor: turma
            ? `${turma.nome} (${turma.quando.toLowerCase()}), ${turma.duracao}`
            : "-",
        },
        { rotulo: "Início", valor: turma?.inicio ?? "-" },
        { rotulo: "Valor", valor: curso?.valor ?? "-" },
      ],
    },
    {
      titulo: comResponsavel ? "Participante e responsável" : "Seus dados",
      etapa: 2,
      linhas: [
        {
          rotulo: comResponsavel ? "Participante" : "Nome",
          valor: `${dados.participanteNome.trim()}, ${dados.participanteIdade.trim()} anos`,
        },
        ...(comResponsavel
          ? [{ rotulo: "Responsável", valor: dados.responsavelNome.trim() }]
          : []),
        { rotulo: "E-mail", valor: dados.email.trim() },
        { rotulo: "WhatsApp", valor: formatarTelefone(dados.telefone) },
      ],
    },
    {
      titulo: "Alergias e restrições",
      etapa: 3,
      linhas: [
        {
          rotulo: "Informado",
          valor:
            dados.temAlergias === "sim"
              ? dados.alergias.trim()
              : "Nenhuma alergia ou restrição informada",
        },
      ],
    },
  ];
  return grupos;
}

export function ResumoDaInscricao({
  dados,
  turmas,
  aoEditar,
}: {
  dados: Dados;
  turmas: Turma[];
  aoEditar?: (etapa: Etapa) => void;
}) {
  const grupos = montarGrupos(dados, turmas);
  return (
    <div className="grid gap-4">
      {grupos.map((g) => (
        <section
          key={g.titulo}
          aria-label={g.titulo}
          className="rounded-xl border-2 border-tinta bg-creme p-4"
        >
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h4 className="fonte-titulo text-xl">{g.titulo}</h4>
            {aoEditar ? (
              <button
                type="button"
                onClick={() => aoEditar(g.etapa)}
                className="btn btn-secundario !min-h-11 !px-4 !text-base"
              >
                Editar<span className="sr-only">: {g.titulo}</span>
              </button>
            ) : null}
          </div>
          <dl className="m-0 grid gap-x-4 gap-y-1 [grid-template-columns:minmax(90px,auto)_1fr]">
            {g.linhas.map((l) => (
              <div key={l.rotulo} className="contents">
                <dt className="font-bold">{l.rotulo}</dt>
                <dd className="m-0 break-words">{l.valor}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
