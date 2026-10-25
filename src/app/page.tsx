import { Cabecalho } from "@/components/cabecalho";
import { ComoFunciona } from "@/components/como-funciona";
import { CursosETurmas } from "@/components/cursos-e-turmas";
import { Duvidas } from "@/components/duvidas";
import { Fechamento } from "@/components/fechamento";
import { Hero } from "@/components/hero";
import { OndaDivisoria } from "@/components/ilustracoes";
import { ParaQuem } from "@/components/para-quem";
import { PreInscricao } from "@/components/pre-inscricao/pre-inscricao";
import { QuemEnsina } from "@/components/quem-ensina";
import { Rodape } from "@/components/rodape";
import { turmasDeHoje } from "@/lib/turmas-hoje";

export default function Home() {
  const turmas = turmasDeHoje();

  return (
    <>
      <div aria-hidden="true" className="progresso" />
      <a
        href="#conteudo"
        className="absolute top-[-80px] left-4 z-10 bg-mostarda px-4 py-3 font-bold !text-tinta focus:top-3"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Hero turmas={turmas} />
        <OndaDivisoria />
        <ParaQuem />
        <QuemEnsina />
        <CursosETurmas turmas={turmas} />
        <ComoFunciona />
        <section id="pre-inscricao" className="secao !pt-0">
          <div className="conteudo">
            <h2 className="titulo-secao">Pré-inscrição</h2>
            <p className="lide !mb-3">
              São 3 etapas curtas. Não cobra nada. Depois do envio, a escola
              entra em contato em até 2 dias úteis para confirmar a vaga.
            </p>
            <p className="mb-7 text-mudo">
              Nada é enviado nem guardado: a validação e a confirmação acontecem
              aqui na página.
            </p>
            <PreInscricao turmas={turmas} />
          </div>
        </section>
        <Duvidas />
        <Fechamento />
      </main>
      <Rodape />
    </>
  );
}
