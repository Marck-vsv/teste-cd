import { escola } from "@/conteudo/cursos";

export function Rodape() {
  const { contato } = escola;
  return (
    <footer className="rodape" id="contato" aria-labelledby="titulo-contato">
      <div className="conteiner">
        <h2 id="titulo-contato">Contato</h2>
        <p>Tire dúvidas antes de se inscrever. Respondemos em {escola.prazoRetorno}.</p>
        <ul className="contato">
          <li>
            WhatsApp: <a href={contato.whatsappLink}>{contato.whatsapp}</a>
          </li>
          <li>
            E-mail: <a href={`mailto:${contato.email}`}>{contato.email}</a>
          </li>
          <li>
            Endereço: <address>{contato.endereco}</address>
          </li>
        </ul>

        <details className="privacidade">
          <summary>Política de privacidade</summary>
          <p>
            Esta página é um protótipo. Os dados digitados no formulário de pré-inscrição não são
            enviados nem guardados: tudo acontece apenas no seu navegador e é descartado quando você
            fecha a página.
          </p>
          <p>
            Numa versão real, os dados seriam usados só para confirmar a vaga e combinar o pagamento.
            Alergias e restrições alimentares, e os dados de crianças, seriam usados só para preparar
            as aulas com segurança, com o consentimento do responsável.
          </p>
        </details>

        <p className="rodape__nota">
          O Ateliê do Sabor é uma escola fictícia. Endereço, telefone e e-mail são dados de exemplo.
        </p>
      </div>
    </footer>
  );
}
