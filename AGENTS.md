<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ateliê do Sabor: instruções do projeto

Landing page de página única, inteira em português (pt-BR), para a escola de culinária fictícia Ateliê do Sabor. Objetivo: levar o visitante à pré-inscrição nos cursos Culinária Essencial e Culinária Kids.

## Documentos obrigatórios

Leia antes de planejar, gerar layout ou escrever código:

- `docs/briefing.md`: o que a página deve conter e as regras técnicas. As informações obrigatórias do briefing prevalecem sobre o material de apoio.
- `docs/material-de-apoio.md`: regras de UX/UI e acessibilidade (seções 0 a 12). As regras são o padrão, não sugestões.
- `docs/planejamento.md`: contexto de uso, objetivo, CTA primário, requisitos e suposições (seção 0).
- `docs/registro-de-regras.md`: regras do material não aplicadas e conflitos com o briefing, com o motivo.

## Como trabalhar

- Quando um pedido citar uma seção ("siga a seção 5"), aplique todas as regras dela e diga, regra por regra, onde no código cada uma foi atendida.
- Não deixe de aplicar uma regra em silêncio. Se uma regra não fizer sentido, ou conflitar com o briefing, siga o briefing e adicione uma linha em `docs/registro-de-regras.md` com a regra e o motivo.
- Não invente depoimentos, notas, números de alunos nem urgência (§10). Use só os dados do briefing.
- Sem back-end: nenhum dado do formulário é enviado ou armazenado. Validação, erros e confirmação acontecem na própria página.
- Datas, valores e telefones no formato pt-BR (§4): 24/09/2026, R$ 480,00, (00) 00000-0000.
- Use elementos HTML nativos e semânticos antes de ARIA (§1, §3, §8). Pouco JavaScript no cliente (§9): prefira Server Components e use `"use client"` só onde houver interação.
