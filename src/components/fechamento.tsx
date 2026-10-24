import Image from "next/image";
import { ESCOLA, IMAGENS } from "@/lib/conteudo";
import { Seta } from "./seta";

export function Fechamento() {
  const foto = IMAGENS.paes;

  return (
    <section
      aria-labelledby="fechamento"
      className="escuro secao bg-oliva text-creme"
    >
      <div className="conteudo grid items-center gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <div>
          <h2 id="fechamento" className="titulo-secao">
            Ainda com dúvida? Fale com a gente.
          </h2>
          <p className="lide text-[#E8E1CC]">
            Respondemos pelo WhatsApp e pelo e-mail. Se já decidiu, a
            pré-inscrição leva poucos minutos e não cobra nada.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={ESCOLA.whatsappLink}
              className="btn btn-secundario btn-grande"
            >
              Falar no WhatsApp
            </a>
            <a href="#pre-inscricao" className="btn btn-primario btn-grande">
              Fazer pré-inscrição
              <Seta />
            </a>
          </div>
        </div>
        <figure className="revela-surge m-0 overflow-hidden rounded-[20px] border-2 border-mostarda">
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.width}
            height={foto.height}
            sizes="(min-width: 860px) 45vw, 92vw"
            className="block aspect-[4/3] h-auto w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
