import Image from "next/image";
import { IMAGENS } from "@/lib/conteudo";
import { indice } from "@/lib/movimento";
import type { Turma } from "@/lib/turmas";
import { AtivoNaTela } from "./ativo-na-tela";
import { IngredientesFlutuantes } from "./ilustracoes";
import { Seta } from "./seta";

export function Hero({ turmas }: { turmas: Turma[] }) {
  const foto = IMAGENS.ingredientes;

  return (
    <section
      id="topo"
      className="escuro relative bg-oliva pt-[clamp(2rem,6vw,3.5rem)] pb-[clamp(2.5rem,7vw,4.5rem)] text-creme"
    >
      <div className="conteudo flex flex-wrap items-end gap-x-12 gap-y-10">
        <div className="min-w-0 flex-[1_1_460px]">
          <h1
            style={indice(0)}
            className="entrada fonte-titulo mb-6 text-[clamp(2.3rem,8vw,4.25rem)] leading-[1.04] tracking-[-0.02em]"
          >
            Cozinhar se aprende fazendo. Sozinho ou com seu filho.
          </h1>
          <p
            style={indice(1)}
            className="entrada mb-7 max-w-[32em] text-[clamp(1.125rem,2.4vw,1.3rem)] text-[#E8E1CC]"
          >
            Aulas presenciais com a Chef Helena Duarte. Culinária Essencial para
            quem começa do zero, a partir de 13 anos. Culinária Kids para a
            criança e um responsável cozinharem juntos.
          </p>
          <div style={indice(2)} className="entrada mb-5 flex flex-wrap gap-4">
            <a href="#pre-inscricao" className="btn btn-primario btn-grande">
              Fazer pré-inscrição
              <Seta />
            </a>
            <a href="#cursos" className="btn btn-secundario">
              Ver cursos e turmas
            </a>
          </div>
          <p style={indice(3)} className="entrada m-0 text-base text-[#E8E1CC]">
            A pré-inscrição não cobra nada. A escola confirma a vaga com você
            antes de qualquer pagamento.
          </p>
        </div>

        <div className="relative min-w-0 max-w-[560px] flex-[1_1_320px]">
          <AtivoNaTela className="pointer-events-none absolute -top-9 -right-3 z-10 hidden w-[150px] min-[1000px]:block">
            <IngredientesFlutuantes className="h-auto w-full" />
          </AtivoNaTela>
          <figure
            style={indice(1)}
            className="entrada m-0 overflow-hidden rounded-[20px] border-2 border-mostarda"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.width}
              height={foto.height}
              priority
              sizes="(min-width: 1184px) 460px, (min-width: 768px) 45vw, 92vw"
              className="block h-auto w-full"
            />
          </figure>
          <aside
            style={indice(2)}
            aria-labelledby="proximas-datas"
            className="entrada relative z-[1] -mt-10 ml-4 rounded-[20px] border-2 border-mostarda bg-creme p-6 text-tinta"
          >
            <h2 id="proximas-datas" className="fonte-titulo mb-3 text-2xl">
              Próximas datas de início
            </h2>
            <ul className="m-0 list-none p-0">
              {turmas.map((t, i) => (
                <li
                  key={t.id}
                  style={indice(4 + i)}
                  className="entrada border-t-2 border-tinta py-2.5"
                >
                  <div className="flex justify-between gap-3">
                    <strong>
                      {t.curso === "kids" ? "Kids" : "Essencial"} {t.nome}
                    </strong>
                    <strong>{t.inicio}</strong>
                  </div>
                  <div className="text-base text-mudo">{t.quando}</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
