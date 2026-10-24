import { CURSOS, REGRA_DE_INICIO } from "@/lib/conteudo";
import type { Turma } from "@/lib/turmas";

const LINHAS_MODULOS = (modulos: string[]) =>
  modulos.map((m, i) => `${i + 1}. ${m}`);

export function CursosETurmas({ turmas }: { turmas: Turma[] }) {
  const { essencial, kids } = CURSOS;
  const manha = turmas.find((t) => t.id === "manha");
  const turmasEssencial = turmas.filter((t) => t.curso === "essencial");
  const turmasKids = turmas.filter((t) => t.curso === "kids");

  const linhas: {
    rotulo: string;
    essencial: React.ReactNode;
    kids: React.ReactNode;
  }[] = [
    { rotulo: "Para quem", essencial: essencial.paraQuem, kids: kids.paraQuem },
    { rotulo: "Aulas", essencial: essencial.aulas, kids: kids.aulas },
    { rotulo: "Vagas", essencial: essencial.vagas, kids: kids.vagas },
    {
      rotulo: "Turmas",
      essencial: turmasEssencial.map((t) => (
        <span key={t.id} className="block">
          {t.nome} ({t.quando.toLowerCase()}, {t.duracao})
        </span>
      )),
      kids: turmasKids.map((t) => (
        <span key={t.id} className="block">
          {t.nome} ({t.quando.toLowerCase()}, {t.duracao})
        </span>
      )),
    },
    {
      rotulo: "Valor",
      essencial: <strong>{essencial.valor}</strong>,
      kids: <strong>{kids.valor}</strong>,
    },
    { rotulo: "Incluso", essencial: essencial.incluso, kids: kids.incluso },
    {
      rotulo: "Módulos",
      essencial: LINHAS_MODULOS(essencial.modulos).map((m) => (
        <span key={m} className="block">
          {m}
        </span>
      )),
      kids: LINHAS_MODULOS(kids.modulos).map((m) => (
        <span key={m} className="block">
          {m}
        </span>
      )),
    },
  ];

  return (
    <section id="cursos" className="secao border-y-2 border-tinta bg-areia">
      <div className="conteudo">
        <h2 className="titulo-secao">Cursos e turmas</h2>
        <p className="lide">
          Os dois cursos lado a lado, com os mesmos itens na mesma ordem. Você
          confirma a turma no formulário.
        </p>
        <div className="overflow-hidden rounded-[20px] border-2 border-tinta bg-creme">
          <table className="comparativo">
            <caption className="sr-only">
              Comparação entre Culinária Essencial e Culinária Kids
            </caption>
            <thead>
              <tr>
                <td />
                <th
                  scope="col"
                  id="curso-essencial"
                  className="fonte-titulo bg-oliva text-2xl text-creme"
                >
                  {essencial.nome}
                </th>
                <th
                  scope="col"
                  id="curso-kids"
                  className="fonte-titulo bg-mostarda text-2xl"
                >
                  {kids.nome}
                </th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((l) => (
                <tr key={l.rotulo}>
                  <th scope="row">{l.rotulo}</th>
                  <td data-rotulo="Essencial">{l.essencial}</td>
                  <td data-rotulo="Kids">{l.kids}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-base text-mudo">
          Quando começa: {REGRA_DE_INICIO}
          {manha ? (
            <>
              {" "}
              Reembolso integral até 7 dias antes do início (por exemplo, até{" "}
              {manha.reembolsoAte} para a turma da Manhã que começa em{" "}
              {manha.inicio}).
            </>
          ) : null}
        </p>
      </div>
    </section>
  );
}
