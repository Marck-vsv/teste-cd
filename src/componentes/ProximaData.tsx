"use client";

import { useSyncExternalStore } from "react";
import {
  formatarData,
  limiteReembolso,
  proximoInicio,
  type RegraInicio,
} from "@/lib/datas";

const semAssinatura = () => () => {};
const hojeNoNavegador = () => new Date().toDateString();
const semDataNoServidor = () => null;

/**
 * Mostra a próxima data de início calculada no navegador, para não ficar
 * desatualizada numa página estática. Sem JavaScript, a regra de início
 * (sempre visível ao lado) continua informando quando a turma começa.
 */
export function ProximaData({ regra }: { regra: RegraInicio }) {
  const hoje = useSyncExternalStore(semAssinatura, hojeNoNavegador, semDataNoServidor);
  if (!hoje) return null;

  const inicio = proximoInicio(regra, new Date(hoje));
  return (
    <>
      <dt>Próximo início</dt>
      <dd>
        <strong>{formatarData(inicio)}</strong>
        <br />
        Reembolso integral até {formatarData(limiteReembolso(inicio))}
      </dd>
    </>
  );
}
