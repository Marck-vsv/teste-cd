"use client";

import { useEffect, useRef, useState } from "react";

export type ItemMenu = { href: `#${string}`; rotulo: string };

export function MenuPrincipal({ itens, cta }: { itens: ItemMenu[]; cta: ItemMenu }) {
  const [aberto, setAberto] = useState(false);
  const [atual, setAtual] = useState<string | null>(null);
  const botao = useRef<HTMLButtonElement>(null);

  // §3: Esc fecha o menu mobile e devolve o foco ao botão.
  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key !== "Escape") return;
      setAberto(false);
      botao.current?.focus();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  // §3: indica no menu a seção que está na tela.
  useEffect(() => {
    const secoes = itens
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((secao): secao is HTMLElement => secao !== null);
    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.find((entrada) => entrada.isIntersecting);
        if (visivel) setAtual(`#${visivel.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    secoes.forEach((secao) => observador.observe(secao));
    return () => observador.disconnect();
  }, [itens]);

  return (
    <nav aria-label="Principal" className="menu">
      <button
        ref={botao}
        type="button"
        className="menu__botao"
        aria-expanded={aberto}
        aria-controls="menu-lista"
        onClick={() => setAberto((valor) => !valor)}
      >
        Menu
      </button>
      <ul id="menu-lista" className="menu__lista" data-aberto={aberto}>
        {itens.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={atual === item.href ? "location" : undefined}
              onClick={() => setAberto(false)}
            >
              {item.rotulo}
            </a>
          </li>
        ))}
        {/* Em telas estreitas o CTA do header não cabe; ele aparece no fim do menu. */}
        <li className="menu__cta">
          <a className="botao botao--primario" href={cta.href} onClick={() => setAberto(false)}>
            {cta.rotulo}
          </a>
        </li>
      </ul>
    </nav>
  );
}
