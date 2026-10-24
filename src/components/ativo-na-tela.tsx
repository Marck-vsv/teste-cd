"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Marca `data-ativo="true"` enquanto o conteúdo está visível na tela.
 * O CSS usa isso para animações em loop só rodarem quando alguém as vê.
 */
export function AtivoNaTela({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(([entrada]) =>
      setAtivo(entrada.isIntersecting),
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <div ref={ref} data-ativo={ativo} className={className}>
      {children}
    </div>
  );
}
