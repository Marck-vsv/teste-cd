import { MenuPrincipal, type ItemMenu } from "./MenuPrincipal";

// §3: nomes iguais aos títulos das seções, na mesma ordem da página.
const itensMenu: ItemMenu[] = [
  { href: "#para-quem", rotulo: "Para quem é" },
  { href: "#instrutora", rotulo: "Instrutora" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#cursos", rotulo: "Cursos e turmas" },
  { href: "#duvidas", rotulo: "Dúvidas" },
  { href: "#contato", rotulo: "Contato" },
];

const cta: ItemMenu = { href: "#pre-inscricao", rotulo: "Fazer pré-inscrição" };

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <a className="pular-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="cabecalho__interno">
        <a className="logo" href="#topo">
          Ateliê do Sabor
        </a>
        <MenuPrincipal itens={itensMenu} cta={cta} />
        <a className="botao botao--primario cabecalho__cta" href={cta.href}>
          {cta.rotulo}
        </a>
      </div>
    </header>
  );
}
