# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Adultos e idosos (inclui pessoas 50+) que querem aprender a cozinhar do zero, e famílias com crianças de 6 a 12 anos. Também pessoas com deficiência visual, auditiva e motora e pessoas com pouca familiaridade com o digital. Acesso principalmente pelo celular, muitas vezes chegando por um link de WhatsApp ou rede social, com conexão móvel que pode ser instável, em pausas em casa ou no trabalho. A tarefa: entender qual curso e qual turma servem para si e fazer a pré-inscrição.

## Product Purpose

Landing page de página única, toda em português (pt-BR), para a escola de culinária fictícia Ateliê do Sabor. Apresenta dois cursos presenciais, Culinária Essencial e Culinária Kids, e leva o visitante à pré-inscrição. É um projeto de teste: o cliente é fictício e o trabalho segue um briefing e um material de apoio de UX/UI e acessibilidade (`docs/briefing.md`, `docs/material-de-apoio.md`). Sucesso: pré-inscrição concluída no formulário da própria página. CTA primário: "Fazer pré-inscrição".

## Positioning

Cursos presenciais em que o adulto aprende do zero (sem pré-requisito nem limite de idade) e a criança cozinha lado a lado com 1 responsável, que também cozinha. Ingredientes e avental inclusos. Instrutora: Chef Helena Duarte, 15 anos de experiência em cozinha profissional.

## Operating Context

Cursos presenciais na Rua das Palmeiras, 85, Centro (endereço fictício). Turmas com início calculado a partir da data atual: Manhã na primeira segunda-feira de cada mês; Noite na primeira terça-feira; Sábado e Kids a cada 2 meses, no primeiro sábado de fevereiro, abril, junho, agosto e outubro. Depois da pré-inscrição, a escola confirma a vaga por WhatsApp ou e-mail em até 2 dias úteis; o pagamento vem só depois da confirmação (suposição aprovada, não consta no briefing).

## Capabilities and Constraints

- Culinária Essencial: 8 aulas de 3 horas, 12 vagas por turma, a partir de 13 anos. Turmas Manhã (seg e qua, 8h às 11h, 4 semanas), Noite (ter e qui, 19h às 22h, 4 semanas) e Sábado (14h às 17h, 8 semanas). R$ 480 à vista ou 4x de R$ 130 no cartão.
- Culinária Kids: 8 aulas de 2 horas, 8 duplas por turma, crianças de 6 a 12 anos com 1 responsável. Turma única: sábados, 9h às 11h, 8 semanas. R$ 560 por dupla, à vista ou 4x de R$ 150.
- Reembolso integral até 7 dias antes do início. Certificado de conclusão com 75% de presença, nos dois cursos.
- Sem back-end: nenhum dado do formulário é enviado ou armazenado. Validação, erros e confirmação acontecem na própria página; o envio é simulado e a confirmação diz isso.
- Formulário: escolha de curso e turma, alergias e restrições alimentares, e, para o Kids e menores de idade, dados da criança (nome e idade) e do responsável. Essencial com 13 a 17 anos pede responsável; menos de 13 no Essencial é bloqueado, com sugestão do Kids.
- Formatos pt-BR: 24/09/2026, R$ 480,00, (00) 00000-0000.
- Stack existente: Next.js (App Router, `cacheComponents`), React, Tailwind v4, Biome, pnpm.

## Brand Commitments

Nome: Ateliê do Sabor. Tom em linguagem simples, frases curtas, voz ativa. A direção visual escolhida (oliva e mostarda, Young Serif com Atkinson Hyperlegible, ilustrações próprias em SVG) está registrada no código e pode ser documentada à parte; não é fato de produto.

## Evidence on Hand

Dados do briefing (cursos, turmas, valores, instrutora, contato fictício). Não há depoimentos, avaliações, notas nem número de alunos, e a página não deve inventá-los nem criar urgência falsa. Contato (endereço, WhatsApp, e-mail) é de exemplo e deve ser identificado assim.

## Product Principles

1. O visitante entende regras especiais (idade, acompanhante, datas de início) antes do formulário, nunca ao preenchê-lo.
2. Credibilidade vem do que o briefing oferece (instrutora, certificado, reembolso, contato), sem prova social inventada.
3. Pedir o mínimo no formulário; dados de saúde e de crianças só com consentimento específico do responsável.
4. Informação para agir (preço, prazo, próximo passo) fica visível na página, não escondida.
5. Nada de padrões enganosos: sem urgência falsa, consentimento pré-marcado ou progresso inflado.

## Accessibility & Inclusion

Padrão obrigatório: WCAG 2.2 nível AA e ABNT NBR 17225. Foco em público 50+, baixa visão, teclado, leitor de tela e pessoas com pouca familiaridade digital. Corpo de texto com pelo menos 16 px, contraste mínimo de 4.5:1, alvos de toque de pelo menos 44 px, funcionamento em 320 px e com zoom de 200%, respeito a `prefers-reduced-motion`.
