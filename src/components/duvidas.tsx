import { FAQ } from "@/lib/conteudo";

export function Duvidas() {
  return (
    <section id="duvidas" className="secao border-y-2 border-tinta bg-areia">
      <div className="conteudo max-w-[868px]">
        <h2 className="titulo-secao">Dúvidas frequentes</h2>
        {FAQ.map((item, i) => (
          <details
            key={item.pergunta}
            className={`border-t-2 border-tinta py-3 ${i === FAQ.length - 1 ? "border-b-2" : ""}`}
          >
            <summary>{item.pergunta}</summary>
            <p className="mt-2">{item.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
