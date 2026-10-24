# Registro de regras não aplicadas e conflitos

Exigido pelo briefing para responder ao formulário. Registre aqui toda regra do material de apoio que não foi aplicada, ou que conflita com o briefing, e o motivo. O briefing prevalece em caso de conflito.

| Seção | Regra | Decisão | Motivo |
|---|---|---|---|
| §5 | Falha de rede tem mensagem clara e "Tentar novamente" | Não se aplica | Sem back-end (regra técnica 2 do briefing), o formulário não faz requisição de rede, então não existe falha de rede a tratar. Simular o erro seria enganoso. |
| §5 | Captcha com alternativa acessível | Não se aplica | A página não usa captcha. Sem back-end, não há envio a proteger. |
| §6 | Vídeo com legendas, transcrição e audiodescrição; janela de Libras | Não se aplica (por ora) | A página não tem vídeo. Rever se algum vídeo for adicionado. |
| §8 | Banner de cookies com aceitar e recusar de mesmo peso | Não se aplica | A página não usa cookies nem rastreamento. |
| §10 | Sinais de credibilidade: contato real | Conflito com o briefing | O briefing fornece endereço, WhatsApp e e-mail fictícios. Usados como estão, identificados como dados de exemplo. |
| §10 | Link de WhatsApp funcional (sem links mortos, §9) | Aplicado com ressalva | O link usa o número fictício do briefing, (00) 00000-0000, e não leva a uma conversa real. O rodapé informa que os contatos são dados de exemplo. |
| §10 | Depoimentos e prova social | Não aplicado | O briefing não traz depoimentos, notas nem número de alunos. A credibilidade vem da instrutora, do certificado, do reembolso e do contato. |
| §6 | Imagens em formato moderno, `loading="lazy"`, `width`/`height` | Não se aplica | A página usa só ilustrações em SVG inline (`src/components/ilustracoes.tsx`), sem imagens raster. Cada SVG tem `role="img"` e `aria-label`. |
| §5 | Falha de rede com "Tentar novamente" | Não se aplica (reforço) | O envio é simulado com um atraso de 800 ms no navegador. A confirmação diz de forma visível que é uma demonstração e que nada foi enviado nem guardado. |
| §5 | Etapas sem perder dados | Aplicado | Todo o estado fica em um só componente cliente; voltar, editar pela revisão e trocar de curso preservam o que foi digitado. |
| §3 | Item do menu da seção atual indicado | Aplicado | `aria-current="true"` via `IntersectionObserver` em `src/components/cabecalho.tsx`. |
| §11 | Teste com leitor de tela (NVDA/VoiceOver) | Pendente | Ainda não foi feito. A estrutura usa rótulos, `aria-invalid`, `aria-describedby`, `fieldset`/`legend` e região `output`, mas isso não substitui ouvir a página. |
| §11 | Lighthouse, axe ou WAVE | Pendente | Ainda não rodados. Foram feitos só: lint do Biome, `tsc`, build, detector do Impeccable e testes manuais no navegador (teclado básico, 375 px e 320 px, fluxo completo do formulário). |
| §11 | Revisão cruzada com outra ferramenta de IA | Pendente | Ainda não feita. A crítica de design foi feita com o mesmo modelo que gerou o código. |
| §11 | Checklist da NBR 17225 e zoom de 200% | Pendente | Não percorridos. Itens que não se aplicam (vídeo, captcha, cookies) estão listados acima. |
| §10 | Política de privacidade | Aplicado em resumo | Bloco expansível no rodapé. O texto descreve o comportamento atual (nada enviado) e é identificado como exemplo, já que a escola é fictícia. |
| §6 | Imagem informativa com alt equivalente | Aplicado | As 4 fotos (`public/imagens/`) têm `alt` descritivo em `src/lib/conteudo.ts` (`IMAGENS`), `width`/`height` definidos e WebP leve (40 a 114 KB). O hero usa `priority`; as demais carregam sob demanda. |
| §10 | Prova social e credibilidade com imagens | Aplicado com ressalva | As fotos foram geradas por IA (Higgsfield, modelo Z Image) e não mostram rostos, alunos nem a instrutora, para não sugerir depoimentos ou aulas reais. O rodapé diz que as fotos são ilustrativas e geradas por IA. |
