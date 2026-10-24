import type { RefObject } from "react";
import { CURSOS, ESCOLA } from "@/lib/conteudo";
import type { Turma } from "@/lib/turmas";
import { ResumoDaInscricao, turmaEscolhida } from "./resumo";
import { type Dados, perfilDe, temResponsavel } from "./validacao";

export function Confirmacao({
  dados,
  turmas,
  tituloRef,
  aoRecomecar,
}: {
  dados: Dados;
  turmas: Turma[];
  tituloRef: RefObject<HTMLHeadingElement | null>;
  aoRecomecar: () => void;
}) {
  const turma = turmaEscolhida(dados, turmas);
  const curso = dados.cursoId ? CURSOS[dados.cursoId] : null;
  const responsavel = temResponsavel(perfilDe(dados));
  const contato = responsavel
    ? dados.responsavelNome.trim()
    : dados.participanteNome.trim();

  return (
    <div>
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="mb-3 size-16"
        fill="none"
      >
        <circle
          className="selo-circulo"
          cx="32"
          cy="32"
          r="29"
          fill="#F0B73C"
          stroke="#1D1A12"
          strokeWidth="4"
        />
        <path
          className="selo-visto"
          d="M19 33l9 9 17-19"
          stroke="#1D1A12"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
      </svg>
      <h3
        ref={tituloRef}
        tabIndex={-1}
        className="fonte-titulo mb-3 text-[1.8rem] leading-tight"
      >
        Pré-inscrição enviada
      </h3>
      <p className="mb-4 text-lg">
        Pronto, {contato.split(" ")[0]}. Recebemos a pré-inscrição de{" "}
        <strong>{dados.participanteNome.trim()}</strong> no{" "}
        <strong>{curso?.nome}</strong>, turma <strong>{turma?.nome}</strong>,
        com início em <strong>{turma?.inicio}</strong>.
      </p>

      <p className="mb-6 rounded-xl border-2 border-tinta bg-mostarda p-4 text-base">
        <strong>Página de demonstração:</strong> nenhum dado foi enviado nem
        guardado. Esta tela mostra o que o visitante veria depois do envio.
      </p>

      <h4 className="fonte-titulo mb-2 text-xl">O que acontece agora</h4>
      <ol className="mb-6 list-decimal pl-6">
        <li className="mb-1">
          A escola entra em contato pelo WhatsApp ou e-mail informado, em até 2
          dias úteis, para confirmar a vaga.
        </li>
        <li className="mb-1">
          O pagamento só acontece depois da confirmação: {curso?.valor}.
        </li>
        <li className="mb-1">
          Reembolso integral se você pedir até 7 dias antes do início
          {turma ? ` (até ${turma.reembolsoAte})` : ""}.
        </li>
        <li>Certificado de conclusão com 75% de presença.</li>
      </ol>

      <h4 className="fonte-titulo mb-2 text-xl">O que você escolheu</h4>
      <div className="mb-6">
        <ResumoDaInscricao dados={dados} turmas={turmas} />
      </div>

      <div className="flex flex-wrap gap-4">
        <a href={ESCOLA.whatsappLink} className="btn btn-primario">
          Falar no WhatsApp
        </a>
        <a href="#topo" className="btn btn-secundario">
          Voltar ao início
        </a>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={aoRecomecar}
        >
          Fazer outra pré-inscrição
        </button>
      </div>
    </div>
  );
}
