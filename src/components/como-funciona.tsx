import { indice } from "@/lib/movimento";

const PASSOS = [
  { destaque: "Escolha o curso", texto: " e a turma." },
  { destaque: "Faça a pré-inscrição.", texto: " Não cobra nada." },
  {
    destaque: "A escola confirma a vaga",
    texto: " por WhatsApp ou e-mail, em até 2 dias úteis.",
  },
  { destaque: "Pague e comece", texto: " a cozinhar." },
] as const;

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="secao">
      <div className="conteudo">
        <h2 className="titulo-secao">Como funciona</h2>
        <ol className="m-0 grid list-none gap-7 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
          {PASSOS.map((p, i) => (
            <li key={p.destaque} className="revela" style={indice(i)}>
              <span
                aria-hidden="true"
                className="revela-surge fonte-titulo block text-[3.5rem] leading-none text-tomate"
                style={indice(i + 1)}
              >
                {i + 1}
              </span>
              <p className="mt-2">
                <strong>{p.destaque}</strong>
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
