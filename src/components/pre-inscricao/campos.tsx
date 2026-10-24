import type { InputHTMLAttributes, ReactNode } from "react";

const BORDA_BASE =
  "w-full rounded-[10px] bg-white px-3 text-lg text-tinta min-h-[52px]";

function borda(erro?: string) {
  return erro ? "border-[3px] border-erro" : "border-2 border-tinta";
}

export function MensagemErro({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <p
      id={id}
      className="erro-entra mt-1.5 flex items-start gap-2 font-bold text-erro"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        className="mt-0.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v6M12 17h.01" />
      </svg>
      <span>{children}</span>
    </p>
  );
}

function ids(id: string, dica?: ReactNode, erro?: string) {
  return {
    dicaId: dica ? `${id}-dica` : undefined,
    erroId: erro ? `${id}-erro` : undefined,
    descricao:
      [dica ? `${id}-dica` : null, erro ? `${id}-erro` : null]
        .filter(Boolean)
        .join(" ") || undefined,
  };
}

type TextoProps = {
  id: string;
  rotulo: string;
  dica?: ReactNode;
  erro?: string;
  obrigatorio?: boolean;
  acao?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className">;

export function CampoTexto({
  id,
  rotulo,
  dica,
  erro,
  obrigatorio = true,
  acao,
  ...entrada
}: TextoProps) {
  const { dicaId, erroId, descricao } = ids(id, dica, erro);
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1 block font-bold">
        {rotulo}{" "}
        <span className="font-normal text-mudo">
          {obrigatorio ? "(obrigatório)" : "(opcional)"}
        </span>
      </label>
      {dica ? (
        <p id={dicaId} className="mb-1.5 text-base text-mudo">
          {dica}
        </p>
      ) : null}
      <input
        id={id}
        name={id}
        aria-invalid={erro ? true : undefined}
        aria-describedby={descricao}
        aria-required={obrigatorio}
        className={`${BORDA_BASE} ${borda(erro)}`}
        {...entrada}
      />
      {erro ? <MensagemErro id={erroId as string}>{erro}</MensagemErro> : null}
      {acao}
    </div>
  );
}

export function CampoAreaTexto({
  id,
  rotulo,
  dica,
  erro,
  value,
  onChange,
  onBlur,
}: {
  id: string;
  rotulo: string;
  dica?: ReactNode;
  erro?: string;
  value: string;
  onChange: (valor: string) => void;
  onBlur: () => void;
}) {
  const { dicaId, erroId, descricao } = ids(id, dica, erro);
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1 block font-bold">
        {rotulo} <span className="font-normal text-mudo">(obrigatório)</span>
      </label>
      {dica ? (
        <p id={dicaId} className="mb-1.5 text-base text-mudo">
          {dica}
        </p>
      ) : null}
      <textarea
        id={id}
        name={id}
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={erro ? true : undefined}
        aria-describedby={descricao}
        aria-required
        autoComplete="off"
        className={`${BORDA_BASE} ${borda(erro)} py-2`}
      />
      {erro ? <MensagemErro id={erroId as string}>{erro}</MensagemErro> : null}
    </div>
  );
}

export function CampoSelect({
  id,
  rotulo,
  dica,
  erro,
  value,
  onChange,
  onBlur,
  opcoes,
  vazio,
}: {
  id: string;
  rotulo: string;
  dica?: ReactNode;
  erro?: string;
  value: string;
  onChange: (valor: string) => void;
  onBlur: () => void;
  opcoes: { valor: string; texto: string }[];
  vazio: string;
}) {
  const { dicaId, erroId, descricao } = ids(id, dica, erro);
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1 block font-bold">
        {rotulo} <span className="font-normal text-mudo">(obrigatório)</span>
      </label>
      {dica ? (
        <p id={dicaId} className="mb-1.5 text-base text-mudo">
          {dica}
        </p>
      ) : null}
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={erro ? true : undefined}
        aria-describedby={descricao}
        aria-required
        className={`${BORDA_BASE} ${borda(erro)}`}
      >
        <option value="">{vazio}</option>
        {opcoes.map((o) => (
          <option key={o.valor} value={o.valor}>
            {o.texto}
          </option>
        ))}
      </select>
      {erro ? <MensagemErro id={erroId as string}>{erro}</MensagemErro> : null}
    </div>
  );
}

export type OpcaoRadio = { valor: string; titulo: string; detalhe?: string };

export function GrupoRadio({
  id,
  legenda,
  erro,
  value,
  onChange,
  nome,
  opcoes,
  colunas = false,
}: {
  id: string;
  legenda: string;
  erro?: string;
  value: string;
  onChange: (valor: string) => void;
  nome: string;
  opcoes: OpcaoRadio[];
  colunas?: boolean;
}) {
  const erroId = erro ? `${id}-erro` : undefined;
  return (
    <fieldset
      className="mb-5 min-w-0 border-0 p-0"
      aria-describedby={erroId}
      aria-invalid={erro ? true : undefined}
    >
      <legend className="mb-2 p-0 font-bold">
        {legenda} <span className="font-normal text-mudo">(obrigatório)</span>
      </legend>
      <div
        className={
          colunas
            ? "grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]"
            : "grid gap-3"
        }
      >
        {opcoes.map((o, i) => {
          const marcada = value === o.valor;
          return (
            <label
              key={o.valor}
              className={`opcao flex cursor-pointer gap-3 rounded-xl p-4 ${
                marcada
                  ? "border-[3px] border-oliva bg-creme"
                  : "border-2 border-tinta"
              } ${erro && !value ? "!border-erro" : ""}`}
            >
              <input
                type="radio"
                name={nome}
                id={i === 0 ? id : undefined}
                value={o.valor}
                checked={marcada}
                onChange={() => onChange(o.valor)}
                className="mt-0.5 size-6 shrink-0 accent-oliva"
              />
              <span>
                <strong>{o.titulo}</strong>
                {o.detalhe ? (
                  <>
                    <br />
                    <span className="text-base">{o.detalhe}</span>
                  </>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {erro ? <MensagemErro id={erroId as string}>{erro}</MensagemErro> : null}
    </fieldset>
  );
}

export function CampoCheckbox({
  id,
  checked,
  onChange,
  erro,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (marcado: boolean) => void;
  erro?: string;
  children: ReactNode;
}) {
  const erroId = erro ? `${id}-erro` : undefined;
  return (
    <div className="mb-4">
      <label
        className={`opcao flex cursor-pointer gap-3 rounded-xl p-4 ${
          erro ? "border-[3px] border-erro" : "border-2 border-tinta"
        }`}
      >
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={erro ? true : undefined}
          aria-describedby={erroId}
          aria-required
          className="mt-0.5 size-6 shrink-0 accent-oliva"
        />
        <span>{children}</span>
      </label>
      {erro ? <MensagemErro id={erroId as string}>{erro}</MensagemErro> : null}
    </div>
  );
}
