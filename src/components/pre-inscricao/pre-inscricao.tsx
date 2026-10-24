"use client";

import { useEffect, useRef, useState } from "react";
import { CURSOS } from "@/lib/conteudo";
import type { CursoId, Turma } from "@/lib/turmas";
import {
  CampoAreaTexto,
  CampoCheckbox,
  CampoSelect,
  CampoTexto,
  GrupoRadio,
} from "./campos";
import { Confirmacao } from "./confirmacao";
import { ResumoDaInscricao } from "./resumo";
import {
  type Campo,
  DADOS_VAZIOS,
  type Dados,
  type Erros,
  type Etapa,
  formatarTelefone,
  perfilDe,
  sugerirEmail,
  TURMA_DO_KIDS,
  temResponsavel,
  validarCampo,
  validarEtapa,
  validarTudo,
} from "./validacao";

const NOMES_DAS_ETAPAS: Record<Etapa, string> = {
  1: "Curso e turma",
  2: "Pessoas",
  3: "Saúde e revisão",
};

const ETAPAS: Etapa[] = [1, 2, 3];

type Fase = Etapa | "enviado";

export function PreInscricao({ turmas }: { turmas: Turma[] }) {
  const [fase, setFase] = useState<Fase>(1);
  const [dados, setDados] = useState<Dados>(DADOS_VAZIOS);
  const [erros, setErros] = useState<Erros>({});
  const [foco, setFoco] = useState<{ campo: Campo | null; n: number }>({
    campo: null,
    n: 0,
  });
  const [enviando, setEnviando] = useState(false);
  const [voltarParaRevisao, setVoltarParaRevisao] = useState(false);
  const [sugestaoEmail, setSugestaoEmail] = useState<string | null>(null);

  const tituloRef = useRef<HTMLHeadingElement>(null);
  const resumoErrosRef = useRef<HTMLDivElement>(null);
  const faseAnterior = useRef<Fase>(1);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  const perfil = perfilDe(dados);
  const comResponsavel = temResponsavel(perfil);
  const ehKids = dados.cursoId === "kids";

  // Move o foco para o título da etapa quando ela muda (teclado e leitor de tela).
  useEffect(() => {
    if (faseAnterior.current === fase) return;
    faseAnterior.current = fase;
    tituloRef.current?.focus();
  }, [fase]);

  // Depois de uma tentativa que falhou: um erro leva o foco ao campo; vários, ao resumo.
  useEffect(() => {
    if (foco.n === 0) return;
    if (foco.campo) document.getElementById(`campo-${foco.campo}`)?.focus();
    else resumoErrosRef.current?.focus();
  }, [foco]);

  useEffect(
    () => () => {
      if (temporizador.current) clearTimeout(temporizador.current);
    },
    [],
  );

  function atualizar<K extends keyof Dados>(campo: K, valor: Dados[K]) {
    setDados((anterior) => ({ ...anterior, [campo]: valor }));
    setErros((anterior) => {
      if (!anterior[campo]) return anterior;
      const { [campo]: _removido, ...resto } = anterior;
      return resto;
    });
    if (campo === "email") setSugestaoEmail(null);
  }

  function escolherCurso(id: CursoId) {
    setDados((anterior) => ({
      ...anterior,
      cursoId: id,
      turmaId: id === "kids" ? TURMA_DO_KIDS : "",
    }));
    setErros((anterior) => {
      const {
        cursoId: _c,
        turmaId: _t,
        participanteIdade: _i,
        ...resto
      } = anterior;
      return resto;
    });
  }

  function aoSair(campo: Campo, valor: Dados = dados) {
    const mensagem = validarCampo(campo, valor);
    setErros((anterior) => {
      const { [campo]: _antigo, ...resto } = anterior;
      return mensagem ? { ...resto, [campo]: mensagem } : resto;
    });
  }

  function aoSairDoEmail() {
    aoSair("email");
    setSugestaoEmail(sugerirEmail(dados.email));
  }

  function aoSairDoTelefone() {
    const formatado = formatarTelefone(dados.telefone);
    const novo = { ...dados, telefone: formatado };
    if (formatado !== dados.telefone) setDados(novo);
    aoSair("telefone", novo);
  }

  function pedirFoco(encontrados: Erros) {
    const campos = Object.keys(encontrados) as Campo[];
    setFoco((anterior) => ({
      campo: campos.length === 1 ? campos[0] : null,
      n: anterior.n + 1,
    }));
  }

  function irPara(etapa: Etapa) {
    setErros({});
    setFase(etapa);
  }

  function continuar(etapa: Etapa) {
    const encontrados = validarEtapa(etapa, dados);
    if (Object.keys(encontrados).length > 0) {
      setErros(encontrados);
      pedirFoco(encontrados);
      return;
    }
    setErros({});
    if (voltarParaRevisao) {
      setVoltarParaRevisao(false);
      setFase(3);
      return;
    }
    setFase((etapa + 1) as Etapa);
  }

  function editar(etapa: Etapa) {
    setVoltarParaRevisao(true);
    irPara(etapa);
  }

  function enviar() {
    const encontrados = validarTudo(dados);
    if (Object.keys(encontrados).length > 0) {
      const primeira = ETAPAS.find(
        (e) => Object.keys(validarEtapa(e, dados)).length > 0,
      );
      setErros(encontrados);
      if (primeira && primeira !== 3) setFase(primeira);
      pedirFoco(encontrados);
      return;
    }
    setEnviando(true);
    // Sem back-end: o envio é simulado e nenhum dado sai do navegador.
    temporizador.current = setTimeout(() => {
      setEnviando(false);
      setFase("enviado");
    }, 800);
  }

  function recomecar() {
    setDados(DADOS_VAZIOS);
    setErros({});
    setVoltarParaRevisao(false);
    setSugestaoEmail(null);
    setFase(1);
  }

  const etapaAtual = fase === "enviado" ? null : fase;
  const camposComErro = Object.entries(erros).filter(([, m]) => m) as [
    Campo,
    string,
  ][];

  function focarCampo(campo: Campo) {
    document.getElementById(`campo-${campo}`)?.focus();
  }

  const turmasDoEssencial = turmas.filter((t) => t.curso === "essencial");
  const turmaKids = turmas.find((t) => t.id === TURMA_DO_KIDS);

  return (
    <div className="flex flex-wrap items-start gap-7">
      {etapaAtual ? (
        <ol
          aria-label="Etapas da pré-inscrição"
          className="m-0 min-w-[220px] flex-[0_1_260px] list-none p-0"
        >
          {ETAPAS.map((n) => {
            const atual = n === etapaAtual;
            return (
              <li
                key={n}
                aria-current={atual ? "step" : undefined}
                className="flex items-center gap-3 py-2.5"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full font-bold ${
                    atual ? "bg-oliva text-creme" : "border-2 border-tinta"
                  }`}
                >
                  {n}
                </span>
                <span className={atual ? "font-bold" : ""}>
                  {NOMES_DAS_ETAPAS[n]}
                  {atual ? (
                    <span className="font-normal"> (etapa atual)</span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ol>
      ) : null}

      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        aria-busy={enviando}
        className="min-w-0 flex-[1_1_420px] rounded-[20px] border-2 border-tinta bg-white p-[clamp(1.25rem,4vw,2rem)]"
      >
        {/* Região viva: anuncia a confirmação para leitores de tela (§5). */}
        <output className="block">
          {fase === "enviado" ? (
            <Confirmacao
              dados={dados}
              turmas={turmas}
              tituloRef={tituloRef}
              aoRecomecar={recomecar}
            />
          ) : null}
        </output>

        {etapaAtual ? (
          <>
            <h3
              ref={tituloRef}
              tabIndex={-1}
              className="fonte-titulo mb-1 text-[1.6rem] leading-tight"
            >
              Etapa {etapaAtual} de 3: {NOMES_DAS_ETAPAS[etapaAtual]}
            </h3>
            {voltarParaRevisao ? (
              <p className="mb-4 text-base text-mudo">
                Você está editando. Depois de salvar, voltamos à revisão.
              </p>
            ) : (
              <p className="mb-4 text-base text-mudo">
                Campos com (obrigatório) precisam ser preenchidos.
              </p>
            )}

            {camposComErro.length > 1 ? (
              <div
                ref={resumoErrosRef}
                tabIndex={-1}
                role="alert"
                className="erro-entra mb-6 rounded-xl border-[3px] border-erro bg-[#FFF1EE] p-4"
              >
                <p className="mb-2 font-bold text-erro">
                  Há {camposComErro.length} campos para corrigir:
                </p>
                <ul className="m-0 list-disc pl-6">
                  {camposComErro.map(([campo, mensagem]) => (
                    <li key={campo}>
                      <a
                        href={`#campo-${campo}`}
                        onClick={(e) => {
                          e.preventDefault();
                          focarCampo(campo);
                        }}
                        className="!text-erro"
                      >
                        {mensagem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </>
        ) : null}

        {fase === 1 ? (
          <div className="etapa-entra">
            <GrupoRadio
              id="campo-cursoId"
              nome="curso"
              legenda="Curso"
              colunas
              value={dados.cursoId}
              erro={erros.cursoId}
              onChange={(v) => escolherCurso(v as CursoId)}
              opcoes={(["essencial", "kids"] as const).map((id) => ({
                valor: id,
                titulo: CURSOS[id].nome,
                detalhe: `${CURSOS[id].descricaoCurta} ${CURSOS[id].valorResumo}.`,
              }))}
            />

            {dados.cursoId === "essencial" ? (
              <CampoSelect
                id="campo-turmaId"
                rotulo="Turma"
                vazio="Escolha uma turma"
                value={dados.turmaId}
                erro={erros.turmaId}
                onChange={(v) => atualizar("turmaId", v as Dados["turmaId"])}
                onBlur={() => aoSair("turmaId")}
                dica="Mostramos dias, horário e a próxima data de início de cada turma."
                opcoes={turmasDoEssencial.map((t) => ({
                  valor: t.id,
                  texto: `${t.nome} (${t.quando.toLowerCase()}), início ${t.inicio}`,
                }))}
              />
            ) : null}

            {ehKids && turmaKids ? (
              <div
                className="mb-5 rounded-xl border-2 border-tinta bg-creme p-4"
                role="note"
              >
                <p className="mb-1 font-bold">Turma do Kids</p>
                <p className="m-0">
                  O Kids tem uma única turma, escolhida automaticamente:{" "}
                  {turmaKids.quando.toLowerCase()}, {turmaKids.duracao}, com
                  início em <strong>{turmaKids.inicio}</strong>. Cada criança
                  participa com 1 responsável, que também cozinha.
                </p>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-primario"
                onClick={() => continuar(1)}
              >
                {voltarParaRevisao
                  ? "Salvar e voltar à revisão"
                  : "Continuar para a etapa 2"}
              </button>
            </div>
          </div>
        ) : null}

        {fase === 2 ? (
          <div className="etapa-entra">
            <fieldset className="mb-2 min-w-0 border-0 p-0">
              <legend className="fonte-titulo mb-3 p-0 text-xl">
                {ehKids ? "Criança" : "Participante"}
              </legend>
              <CampoTexto
                id="campo-participanteNome"
                rotulo={
                  ehKids
                    ? "Nome da criança"
                    : comResponsavel
                      ? "Nome do participante"
                      : "Nome completo"
                }
                value={dados.participanteNome}
                onChange={(e) => atualizar("participanteNome", e.target.value)}
                onBlur={() => aoSair("participanteNome")}
                erro={erros.participanteNome}
                autoComplete={comResponsavel ? "off" : "name"}
              />
              <CampoTexto
                id="campo-participanteIdade"
                rotulo={ehKids ? "Idade da criança" : "Idade"}
                dica={
                  ehKids
                    ? "O Kids é para crianças de 6 a 12 anos. Só números."
                    : "O Essencial é a partir de 13 anos. Só números."
                }
                inputMode="numeric"
                autoComplete="off"
                maxLength={3}
                value={dados.participanteIdade}
                onChange={(e) => atualizar("participanteIdade", e.target.value)}
                onBlur={() => aoSair("participanteIdade")}
                erro={erros.participanteIdade}
                acao={
                  erros.participanteIdade &&
                  dados.cursoId === "essencial" &&
                  Number(dados.participanteIdade) >= 6 &&
                  Number(dados.participanteIdade) <= 12 ? (
                    <button
                      type="button"
                      className="btn btn-secundario mt-2 !min-h-11 !text-base"
                      onClick={() => escolherCurso("kids")}
                    >
                      Mudar para o Culinária Kids
                    </button>
                  ) : erros.participanteIdade &&
                    dados.cursoId === "kids" &&
                    Number(dados.participanteIdade) >= 13 ? (
                    <button
                      type="button"
                      className="btn btn-secundario mt-2 !min-h-11 !text-base"
                      onClick={() => escolherCurso("essencial")}
                    >
                      Mudar para o Culinária Essencial
                    </button>
                  ) : undefined
                }
              />
            </fieldset>

            <output className="mb-3 block text-base">
              {perfil === "menor"
                ? "Como o participante tem menos de 18 anos, pedimos também os dados de um responsável."
                : ""}
            </output>

            <fieldset className="mb-2 min-w-0 border-0 p-0">
              <legend className="fonte-titulo mb-3 p-0 text-xl">
                {comResponsavel ? "Responsável" : "Seus dados de contato"}
              </legend>
              {ehKids ? (
                <p className="mb-4 text-base text-mudo">
                  O responsável participa da aula e recebe o contato da escola.
                </p>
              ) : null}
              {comResponsavel ? (
                <CampoTexto
                  id="campo-responsavelNome"
                  rotulo="Nome do responsável"
                  value={dados.responsavelNome}
                  onChange={(e) => atualizar("responsavelNome", e.target.value)}
                  onBlur={() => aoSair("responsavelNome")}
                  erro={erros.responsavelNome}
                  autoComplete="name"
                />
              ) : null}
              <CampoTexto
                id="campo-email"
                rotulo={comResponsavel ? "E-mail do responsável" : "Seu e-mail"}
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                value={dados.email}
                onChange={(e) => atualizar("email", e.target.value)}
                onBlur={aoSairDoEmail}
                erro={erros.email}
                acao={
                  sugestaoEmail ? (
                    <p className="mt-2 text-base">
                      Você quis dizer <strong>{sugestaoEmail}</strong>?{" "}
                      <button
                        type="button"
                        className="font-bold text-tomate underline underline-offset-4"
                        onClick={() => {
                          atualizar("email", sugestaoEmail);
                          setSugestaoEmail(null);
                        }}
                      >
                        Usar este e-mail
                      </button>
                    </p>
                  ) : undefined
                }
              />
              <CampoTexto
                id="campo-telefone"
                rotulo={
                  comResponsavel ? "WhatsApp do responsável" : "Seu WhatsApp"
                }
                dica="Com DDD, com ou sem espaços e traços. Ex.: (86) 99999-9999."
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={dados.telefone}
                onChange={(e) => atualizar("telefone", e.target.value)}
                onBlur={aoSairDoTelefone}
                erro={erros.telefone}
              />
            </fieldset>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-secundario"
                onClick={() => irPara(1)}
              >
                Voltar para a etapa 1
              </button>
              <button
                type="button"
                className="btn btn-primario"
                onClick={() => continuar(2)}
              >
                {voltarParaRevisao
                  ? "Salvar e voltar à revisão"
                  : "Continuar para a etapa 3"}
              </button>
            </div>
          </div>
        ) : null}

        {fase === 3 ? (
          <div className="etapa-entra">
            <GrupoRadio
              id="campo-temAlergias"
              nome="alergias"
              legenda="Há alergias ou restrições alimentares?"
              colunas
              value={dados.temAlergias}
              erro={erros.temAlergias}
              onChange={(v) =>
                atualizar("temAlergias", v as Dados["temAlergias"])
              }
              opcoes={[
                { valor: "nao", titulo: "Não" },
                { valor: "sim", titulo: "Sim" },
              ]}
            />
            {dados.temAlergias === "sim" ? (
              <CampoAreaTexto
                id="campo-alergias"
                rotulo="Quais alergias ou restrições?"
                dica="Escreva o que a cozinha precisa saber. Ex.: alergia a amendoim, sem lactose, vegetariano."
                value={dados.alergias}
                erro={erros.alergias}
                onChange={(v) => atualizar("alergias", v)}
                onBlur={() => aoSair("alergias")}
              />
            ) : null}

            <fieldset className="mb-6 min-w-0 border-0 p-0">
              <legend className="fonte-titulo mb-1 p-0 text-xl">
                Autorizações
              </legend>
              <p className="mb-3 text-base text-mudo">
                Cada autorização é separada e começa desmarcada.
              </p>
              {dados.temAlergias === "sim" ? (
                <CampoCheckbox
                  id="campo-consenteSaude"
                  checked={dados.consenteSaude}
                  erro={erros.consenteSaude}
                  onChange={(v) => atualizar("consenteSaude", v)}
                >
                  Autorizo o uso das informações de alergias e restrições
                  alimentares apenas para preparar as aulas. São dados de saúde,
                  por isso esta autorização é separada das demais.
                </CampoCheckbox>
              ) : null}
              {comResponsavel ? (
                <CampoCheckbox
                  id="campo-consenteResponsavel"
                  checked={dados.consenteResponsavel}
                  erro={erros.consenteResponsavel}
                  onChange={(v) => atualizar("consenteResponsavel", v)}
                >
                  Sou o responsável legal pelo participante e autorizo o uso do
                  nome e da idade dele apenas para esta pré-inscrição.
                </CampoCheckbox>
              ) : null}
              <CampoCheckbox
                id="campo-consenteContato"
                checked={dados.consenteContato}
                erro={erros.consenteContato}
                onChange={(v) => atualizar("consenteContato", v)}
              >
                Concordo que a escola entre em contato pelo WhatsApp ou e-mail
                informado sobre esta pré-inscrição.
              </CampoCheckbox>
            </fieldset>

            <h4 className="fonte-titulo mb-1 text-xl">
              Revise antes de enviar
            </h4>
            <p className="mb-3 text-base text-mudo">
              Confira os dados. Você pode editar qualquer parte sem perder o
              resto.
            </p>
            <div className="mb-6">
              <ResumoDaInscricao
                dados={dados}
                turmas={turmas}
                aoEditar={editar}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-secundario"
                onClick={() => irPara(2)}
              >
                Voltar para a etapa 2
              </button>
              <button
                type="button"
                className="btn btn-primario btn-grande"
                onClick={enviar}
                disabled={enviando}
              >
                {enviando ? "Enviando…" : "Enviar pré-inscrição"}
              </button>
            </div>
            {enviando ? <MensagemCarregando /> : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}

function MensagemCarregando() {
  return (
    <p className="mt-3 text-base text-mudo">
      Enviando a pré-inscrição. Aguarde um instante.
    </p>
  );
}
