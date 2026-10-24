import type { CSSProperties } from "react";

/** Índice na sequência de entrada: o CSS usa `--i` para o atraso/escalonamento. */
export function indice(n: number): CSSProperties {
  return { "--i": n } as CSSProperties;
}
