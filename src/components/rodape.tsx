import { ESCOLA } from "@/lib/conteudo";

export function Rodape() {
  return (
    <footer id="contato" className="escuro bg-tinta py-12 text-creme">
      <div className="conteudo flex flex-wrap justify-between gap-x-12 gap-y-8">
        <p className="fonte-titulo m-0 flex-[1_1_240px] text-[1.6rem]">
          {ESCOLA.nome}
        </p>
        <address className="flex-[1_1_280px] not-italic">
          <p className="mb-2 font-bold">Contato</p>
          <p className="m-0">{ESCOLA.endereco}</p>
          <p className="m-0">
            <a href={ESCOLA.whatsappLink} className="!text-mostarda">
              WhatsApp {ESCOLA.whatsappExibicao}
            </a>
          </p>
          <p className="m-0">
            <a href={`mailto:${ESCOLA.email}`} className="!text-mostarda">
              {ESCOLA.email}
            </a>
          </p>
        </address>
        <div className="flex-[1_1_260px] text-base text-[#E8E1CC]">
          <p className="mb-3">
            Endereço, telefone e e-mail são dados de exemplo. As fotos são
            ilustrativas, geradas por IA, e não mostram aulas reais. Esta página
            não envia nem guarda os dados do formulário.
          </p>
          <details>
            <summary className="!min-h-11 !text-base">
              Privacidade, em resumo
            </summary>
            <p className="mt-2">
              O formulário roda só no seu navegador. Nada é enviado nem
              armazenado. Se esta fosse uma escola real, usaríamos seus dados só
              para confirmar a vaga, e os dados de saúde e de crianças só com o
              consentimento do responsável.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
