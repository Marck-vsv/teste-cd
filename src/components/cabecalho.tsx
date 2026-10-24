"use client";

import { useEffect, useRef, useState } from "react";
import { MENU } from "@/lib/conteudo";

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [atual, setAtual] = useState<string | null>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);

  // Indica no menu a seção que está na tela (§3).
  useEffect(() => {
    const secoes = MENU.map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.find((e) => e.isIntersecting);
        if (visivel) setAtual(`#${visivel.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const secao of secoes) observador.observe(secao);
    return () => observador.disconnect();
  }, []);

  // Esc fecha o menu e devolve o foco ao botão que o abriu (§3).
  useEffect(() => {
    if (!aberto) return;
    function aoTeclar(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setAberto(false);
      botaoRef.current?.focus();
    }
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <header className="escuro bg-oliva text-creme">
      <div className="conteudo flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <a
          href="#topo"
          className="fonte-titulo inline-flex min-h-11 items-center gap-[0.28em] text-[1.6rem] !text-creme no-underline"
        >
          Ateliê <span className="text-mostarda">do</span> Sabor
        </a>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${aberto ? "block" : "hidden"} order-3 w-full min-[1100px]:order-none min-[1100px]:block min-[1100px]:w-auto`}
        >
          <ul className="m-0 flex list-none flex-col gap-1 rounded-[14px] border-2 border-creme p-1.5 min-[1100px]:flex-row min-[1100px]:border-0 min-[1100px]:p-0">
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={atual === item.href ? "true" : undefined}
                  onClick={() => setAberto(false)}
                  className="block px-3 py-3 font-bold !text-creme no-underline hover:!text-mostarda aria-[current=true]:shadow-[inset_0_-3px_0_var(--color-mostarda)]"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pre-inscricao"
            className="btn btn-primario !px-3.5 !text-base min-[1100px]:!px-6 min-[1100px]:!text-lg"
          >
            Fazer pré-inscrição
          </a>
          <button
            ref={botaoRef}
            type="button"
            className="btn btn-secundario min-[1100px]:hidden"
            aria-expanded={aberto}
            aria-controls="menu-principal"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? "Fechar menu" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
