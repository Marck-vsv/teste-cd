import { ESCOLA } from "@/lib/conteudo";
import { indice } from "@/lib/movimento";
import { AtivoNaTela } from "./ativo-na-tela";
import { IlustracaoChef } from "./ilustracoes";

const GARANTIAS = [
  { destaque: "75%", texto: "de presença para o certificado de conclusão" },
  { destaque: "7 dias", texto: "antes do início para o reembolso integral" },
  { destaque: "Inclusos", texto: "ingredientes e aventais" },
] as const;

export function QuemEnsina() {
  return (
    <section id="quem-ensina" className="secao !pt-[clamp(1rem,3vw,2rem)]">
      <div className="conteudo grid items-center gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
        <AtivoNaTela className="flex justify-center">
          <IlustracaoChef className="revela-surge h-auto w-full max-w-[300px]" />
        </AtivoNaTela>
        <div>
          <h2 className="titulo-secao">Quem ensina: {ESCOLA.instrutora}</h2>
          <p className="lide !mb-7">
            15 anos de experiência em cozinha profissional. É ela quem conduz as
            aulas dos dois cursos.
          </p>
          <ul className="m-0 grid list-none gap-5 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr))]">
            {GARANTIAS.map((g, i) => (
              <li
                key={g.destaque}
                className="revela border-t-2 border-tinta pt-3"
                style={indice(i)}
              >
                <b className="fonte-titulo block text-[2.2rem] leading-[1.1]">
                  {g.destaque}
                </b>
                {g.texto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
