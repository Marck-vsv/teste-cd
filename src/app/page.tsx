import { Cabecalho } from "@/componentes/Cabecalho";
import { CartaoCurso } from "@/componentes/CartaoCurso";
import { Rodape } from "@/componentes/Rodape";
import { cursos, escola } from "@/conteudo/cursos";

// §10: dúvidas que respondem às objeções do público, só com dados do briefing.
const duvidas = [
  {
    pergunta: "Preciso saber cozinhar para fazer o curso?",
    resposta:
      "Não. A Culinária Essencial começa do zero, pela higiene e segurança na cozinha. Não há pré-requisito de experiência.",
  },
  {
    pergunta: "Existe idade máxima?",
    resposta: "Não. A Culinária Essencial aceita pessoas a partir de 13 anos, sem limite de idade.",
  },
  {
    pergunta: "Tenho entre 13 e 17 anos. Posso fazer a Culinária Essencial?",
    resposta:
      "Pode. Na pré-inscrição, um responsável informa os dados dele junto com os seus.",
  },
  {
    pergunta: "Meu filho tem menos de 13 anos. Qual curso ele pode fazer?",
    resposta:
      "A Culinária Kids, para crianças de 6 a 12 anos. A criança participa com um responsável, que também cozinha na aula.",
  },
  {
    pergunta: "No Kids, o valor é por criança?",
    resposta:
      "Não. O valor de R$ 560,00 é por dupla: a criança e o responsável. Os aventais dos dois e os ingredientes estão inclusos.",
  },
  {
    pergunta: "Preciso levar ingredientes ou avental?",
    resposta: "Não. Os ingredientes e o avental estão inclusos nos dois cursos.",
  },
  {
    pergunta: "E se eu precisar desistir?",
    resposta: `${escola.reembolso} A data-limite aparece junto com a data de início de cada turma.`,
  },
  {
    pergunta: "Recebo certificado?",
    resposta: escola.certificado,
  },
  {
    pergunta: "Tenho alergia ou restrição alimentar. Posso participar?",
    resposta:
      "Informe a alergia ou restrição na pré-inscrição. A informação serve para a instrutora preparar as aulas com segurança.",
  },
];

export default function Home() {
  const [essencial, kids] = cursos;

  return (
    <>
      <Cabecalho />
      <main id="conteudo" tabIndex={-1}>
        <section className="hero" id="topo" aria-labelledby="titulo-pagina">
          <div className="conteiner">
            <p className="hero__marca">Escola de culinária Ateliê do Sabor</p>
            <h1 id="titulo-pagina">Aprenda a cozinhar do zero, com aulas presenciais e práticas</h1>
            <p className="hero__texto">
              Cursos para adultos e idosos que estão começando, e para crianças de 6 a 12 anos que
              cozinham junto com um responsável.
            </p>
            <ul className="hero__fatos">
              <li>8 aulas presenciais</li>
              <li>Ingredientes e avental inclusos</li>
              <li>Certificado de conclusão</li>
            </ul>
            <div className="acoes">
              <a className="botao botao--primario botao--grande" href="#pre-inscricao">
                Fazer pré-inscrição
              </a>
              <a className="link-secundario" href="#cursos">
                Ver cursos e turmas
              </a>
            </div>
            <p className="hero__nota">A pré-inscrição é gratuita. Você só paga depois que a vaga for confirmada.</p>
          </div>
        </section>

        <section className="secao" id="para-quem" aria-labelledby="titulo-para-quem">
          <div className="conteiner">
            <h2 id="titulo-para-quem">Para quem é</h2>
            <ul className="perfis">
              <li className="cartao">
                <h3>Quero aprender a cozinhar do zero</h3>
                <p>
                  Para quem tem 13 anos ou mais, de qualquer idade, sem experiência. Você aprende do
                  básico até sobremesas, em turmas de manhã, à noite ou aos sábados.
                </p>
                <a href={`#curso-${essencial.id}`}>Ver {essencial.nome}</a>
              </li>
              <li className="cartao">
                <h3>Quero cozinhar junto com uma criança</h3>
                <p>
                  Para crianças de 6 a 12 anos acompanhadas de um responsável, que também cozinha. As
                  aulas são aos sábados de manhã.
                </p>
                <a href={`#curso-${kids.id}`}>Ver {kids.nome}</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="secao secao--destaque" id="instrutora" aria-labelledby="titulo-instrutora">
          <div className="conteiner">
            <h2 id="titulo-instrutora">Instrutora</h2>
            <p className="instrutora__nome">{escola.instrutora.nome}</p>
            <p>
              Todas as aulas são conduzidas pela {escola.instrutora.nome}, com{" "}
              {escola.instrutora.experiencia}.
            </p>
            <ul className="garantias">
              <li>
                <strong>Turmas pequenas:</strong> até 12 pessoas no Essencial e até 8 duplas no Kids.
              </li>
              <li>
                <strong>Certificado:</strong> {escola.certificado}
              </li>
              <li>
                <strong>Reembolso:</strong> {escola.reembolso}
              </li>
            </ul>
          </div>
        </section>

        <section className="secao" id="como-funciona" aria-labelledby="titulo-como-funciona">
          <div className="conteiner">
            <h2 id="titulo-como-funciona">Como funciona</h2>
            <ol className="passos">
              <li>
                <strong>Escolha o curso e a turma.</strong> Veja os horários e as datas de início em
                Cursos e turmas.
              </li>
              <li>
                <strong>Faça a pré-inscrição.</strong> Leva poucos minutos e não tem custo.
              </li>
              <li>
                <strong>A escola confirma a vaga.</strong> Entramos em contato por WhatsApp ou e-mail
                em {escola.prazoRetorno}.
              </li>
              <li>
                <strong>Faça o pagamento.</strong> À vista ou em 4 vezes no cartão, depois da
                confirmação.
              </li>
              <li>
                <strong>Venha para a primeira aula.</strong> Ingredientes e avental já estão
                inclusos.
              </li>
            </ol>
          </div>
        </section>

        <section className="secao secao--destaque" id="cursos" aria-labelledby="titulo-cursos">
          <div className="conteiner">
            <h2 id="titulo-cursos">Cursos e turmas</h2>
            <p>
              Compare os dois cursos. Você escolhe o curso e a turma no formulário de pré-inscrição.
            </p>
            <div className="cursos">
              {cursos.map((curso) => (
                <CartaoCurso key={curso.id} curso={curso} />
              ))}
            </div>
            <div className="acoes">
              <a className="botao botao--primario" href="#pre-inscricao">
                Fazer pré-inscrição
              </a>
            </div>
          </div>
        </section>

        <section className="secao" id="pre-inscricao" aria-labelledby="titulo-pre-inscricao">
          <div className="conteiner">
            <h2 id="titulo-pre-inscricao">Pré-inscrição</h2>
            <h3>Antes de se inscrever</h3>
            <ul className="regras">
              <li>A pré-inscrição é gratuita e não garante a vaga. A escola confirma a vaga em {escola.prazoRetorno}, por WhatsApp ou e-mail.</li>
              <li>O pagamento só é feito depois da confirmação: à vista ou em 4 vezes no cartão.</li>
              <li>Culinária Essencial: a partir de 13 anos. De 13 a 17 anos, um responsável também informa os dados dele.</li>
              <li>Culinária Kids: crianças de 6 a 12 anos, sempre com 1 responsável que cozinha junto. Você informa os dados da criança e do responsável.</li>
              <li>Cada turma tem uma data de início diferente. A próxima data aparece em Cursos e turmas.</li>
              <li>{escola.reembolso}</li>
              <li>Você pode informar alergias e restrições alimentares, para a instrutora preparar as aulas com segurança.</li>
            </ul>
            {/* TODO: formulário de pré-inscrição (etapa 4, §5 do material de apoio). */}
            <p className="aviso">
              O formulário de pré-inscrição está sendo construído. Enquanto isso, fale com a escola
              pelos canais em Contato.
            </p>
          </div>
        </section>

        <section className="secao secao--destaque" id="duvidas" aria-labelledby="titulo-duvidas">
          <div className="conteiner">
            <h2 id="titulo-duvidas">Dúvidas</h2>
            <div className="duvidas">
              {duvidas.map(({ pergunta, resposta }) => (
                <details key={pergunta}>
                  <summary>{pergunta}</summary>
                  <p>{resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
}
