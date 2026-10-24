import Image from "next/image";
import { IMAGENS } from "@/lib/conteudo";
import { indice } from "@/lib/movimento";

export function ParaQuem() {
  return (
    <section id="para-quem" className="secao !pt-[clamp(2rem,5vw,3.5rem)]">
      <div className="conteudo">
        <h2 className="titulo-secao">Para quem é</h2>
        <p className="lide">
          Escolha o perfil que parece com você. Cada um leva ao curso certo.
        </p>
        <div className="grid overflow-hidden rounded-[20px] border-2 border-tinta [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
          <div
            style={indice(0)}
            className="revela bg-creme p-[clamp(1.5rem,4vw,2.5rem)]"
          >
            <figure className="revela-surge mb-5 overflow-hidden rounded-[14px] border-2 border-tinta">
              <Image
                src={IMAGENS.massaMaos.src}
                alt={IMAGENS.massaMaos.alt}
                width={IMAGENS.massaMaos.width}
                height={IMAGENS.massaMaos.height}
                sizes="(min-width: 860px) 40vw, 90vw"
                className="block aspect-[4/3] h-auto w-full object-cover"
              />
            </figure>
            <h3 className="fonte-titulo mb-3 text-[1.8rem] leading-[1.15]">
              Quero aprender do zero
            </h3>
            <p className="mb-5">
              Sem pré-requisito de experiência e sem limite de idade. Você
              começa na higiene e segurança da cozinha e chega às sobremesas.
            </p>
            <a
              href="#curso-essencial"
              className="inline-flex min-h-11 items-center font-bold"
            >
              Ver Culinária Essencial
            </a>
          </div>
          <div
            style={indice(1)}
            className="revela border-t-2 border-tinta bg-mostarda p-[clamp(1.5rem,4vw,2.5rem)] min-[860px]:border-t-0 min-[860px]:border-l-2"
          >
            <figure className="revela-surge mb-5 overflow-hidden rounded-[14px] border-2 border-tinta">
              <Image
                src={IMAGENS.duplaMassa.src}
                alt={IMAGENS.duplaMassa.alt}
                width={IMAGENS.duplaMassa.width}
                height={IMAGENS.duplaMassa.height}
                sizes="(min-width: 860px) 40vw, 90vw"
                className="block aspect-[4/3] h-auto w-full object-cover"
              />
            </figure>
            <h3 className="fonte-titulo mb-3 text-[1.8rem] leading-[1.15]">
              Quero cozinhar com meu filho
            </h3>
            <p className="mb-5">
              Para crianças de 6 a 12 anos. Cada uma vem com 1 responsável, e os
              dois cozinham na aula.
            </p>
            <a
              href="#curso-kids"
              className="inline-flex min-h-11 items-center font-bold !text-tinta"
            >
              Ver Culinária Kids
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
