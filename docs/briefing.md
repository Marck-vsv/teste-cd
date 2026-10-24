# Briefing: Ateliê do Sabor (grupo 2)

> Versão em texto (.md) do PDF "Briefing grupo 2.pdf". Conteúdo transcrito sem alterações.

## Contexto e Tarefa

Você foi contratado(a) como dev/designer para prototipar, sozinho(a), a landing page de um cliente fictício. Você vai usar apoio de IA generativa (LMMs) durante todo o processo, geração de conteúdo, layout e até código, mas as decisões de UX/UI, parte dos requisitos, as seções, a estrutura e o visual da página e as escolhas finais são suas.

Use seu conhecimento técnico para decidir o que é melhor para o cliente e, principalmente, para quem vai usar a página, o resultado final deve funcionar bem na prática, não só atender ao que foi pedido.

## Como você deve trabalhar (processo)

- Use IA generativa em todo o processo (ex: planejamento, design, código, textos, revisão), com as três ferramentas indicadas: ChatGPT (OpenAI), Gemini (Google) e Claude (Anthropic)
- Use o material de apoio em todo o processo, conforme a seção “Material de apoio: como usar”, abaixo.
- Você pode gerar uma versão em cada ferramenta, comparar e refinar. Ao final, escolha apenas uma versão para entregar.
- Pode usar seu conhecimento e experiência profissional para orientar, ajustar e decidir. A escolha da versão final é sua.
- Guarde o histórico das conversas com as ferramentas (prompts e respostas) e o registro das regras do material que você não aplicou, com o motivo, para responder ao formulário.

## Material de apoio: como usar

Junto com este briefing, você recebe o documento “Material de apoio de UX/UI e acessibilidade para desenvolvimento de interfaces assistido por IA generativa”. O uso desse material é obrigatório neste projeto: ele orienta as suas decisões e também serve de instrução para as ferramentas de IA.

Todas as seções do material se aplicam à página. A lista abaixo indica em que etapa do trabalho cada seção deve ser consultada.

### 1. Planejamento (antes de gerar layout ou código)

- Seção 0 – Contexto de uso: escreva em 2–3 frases quem é o público, qual é a tarefa principal do visitante e em que contexto a página será usada. Liste os requisitos que você derivou deste briefing e as suposições que fez.
- Defina o objetivo principal e o CTA primário da página antes de pedir layout ou código às ferramentas.

### 2. Estrutura e conteúdo da página

- Seção 1 – Estrutura e hierarquia: ordem das seções, agrupamento das informações e forma de apresentar os cursos e as turmas.
- Seção 3 – Navegação: menu, links e convenções de navegação.
- Seção 4 – Conteúdo e linguagem: textos, formatos de data e valor e explicação das regras dos cursos antes do formulário.
- Seção 10 – Credibilidade, ajuda e ética: contato, ajuda e ausência de padrões enganosos.

### 3. Design visual e componentes

- Seção 2 – Hero e CTA
- Seção 6 – Imagens, mídia e movimento
- Seção 7 – Visual: tipografia, cor e espaçamento

### 4. Formulário de pré-inscrição

- Seção 5 – Formulário de contato ou captação (inteira): os campos pedidos neste briefing (curso e turma, alergias e restrições, dados da criança e do responsável), a validação e as mensagens de erro e de confirmação devem seguir essa seção.

### 5. Implementação (código)

- Seção 8 – Interação, teclado e controle do usuário
- Seção 9 – Responsividade, desempenho e qualidade do produto
- Regras de HTML semântico das seções 1 e 3.

### 6. Revisão antes de entregar

- Seção 11 – Verificação técnica: teclado, zoom, leitor de tela, validação automática, contraste, checklist da NBR 17225 e revisão cruzada com outra ferramenta. Registre o que verificou e o que corrigiu.
- Seção 12 – Honeycomb de Morville: responda “sim” a cada uma das sete facetas ou corrija. Um “não” sem justificativa é pendência.

## Como usar o material com as ferramentas de IA

- No início do trabalho, forneça o material completo a cada uma das três ferramentas: anexe o arquivo ou cole o texto no chat, ou adicione-o como contexto permanente (projeto, Gem, arquivo de instruções como GEMINI.md, CLAUDE.md ou AGENTS.md). Em ambientes de terminal ou IDE, use a versão em texto (.md) do material.
- Nos pedidos de cada etapa, indique a seção correspondente (ex.: “siga a seção 5 do material de apoio”).
- Se uma regra não fizer sentido no seu contexto, você pode não aplicá-la, desde que registre qual regra e o motivo. Esse registro será usado no formulário.
- As informações obrigatórias deste briefing prevalecem sobre o material. Se encontrar algum conflito, siga o briefing e registre o conflito.

## O cenário

O Ateliê do Sabor é uma escola de culinária fictícia. O cliente quer uma landing page para apresentar dois cursos, Culinária Essencial e Culinária Kids, e levar os interessados a fazer a pré-inscrição.

- Público: adultos e idosos que querem aprender a cozinhar do zero e famílias com crianças.

## O que a página deve conter

Todas as informações abaixo devem constar na página.

### Culinária Essencial

- Curso presencial com 8 aulas de 3 horas e 12 vagas por turma.
- Módulos: 1) Higiene e segurança na cozinha, 2) Cortes e técnicas básicas; 3) Caldos e molhos; 4) Massas e pães simples; 5) Sobremesas.
- Turmas:
  - Manhã: segundas e quartas, 8h–11h, duração de 4 semanas.
  - Noite: terças e quintas, 19h–22h, duração de 4 semanas.
  - Sábado: sábados, 14h–17h, duração de 8 semanas.
- Valor: R$ 480 à vista ou 4x de R$ 130 no cartão. Ingredientes e avental inclusos.
- Idade: a partir de 13 anos, sem limite de idade e sem pré-requisito de experiência.

### Culinária Kids

- Curso presencial com 8 aulas de 2 horas e 8 duplas por turma.
- Formato: cada criança participa acompanhada de 1 responsável, que também cozinha na aula.
- Idade: de 6 a 12 anos.
- Turma: sábados, 9h–11h, duração de 8 semanas.
- Módulos: 1) Higiene e segurança na cozinha; 2) Lanches saudáveis; 3) Massas e pães divertidos; 4) Sobremesas.
- Valor: R$ 560 por dupla (criança + responsável), à vista ou 4x de R$ 150 no cartão. Ingredientes e aventais (da criança e do responsável) inclusos.

### Informações gerais

- Inicio das turmas:
  - Manhã: todo mês, na primeira segunda-feira
  - Noite: todo mês, na primeira terça-feira
  - Sábado e Kids: a cada 2 meses, no primeiro sábado de fevereiro, abril, junho, agosto e outubro
- Reembolso: integral até 7 dias antes do início.
- Certificado: de conclusão, com 75% de presença, para os dois cursos.
- Instrutora: Chef Helena Duarte (fictícia), 15 anos de experiência em cozinha profissional.
- Contato:
  - Rua das Palmeiras, 85, Centro (endereço fictício)
  - WhatsApp (00) 00000-0000
  - contato@ateliedosabor.example

## Formulário de pré-inscrição

O formulário deve permitir também:

- escolher o curso e a turma;
- informar alergias e restrições alimentares;
- para a turma Kids e menores de idade: informar também os dados da criança (nome e idade) e do responsável.

## Regras técnicas

1. Página única, inteira em português.
2. Pode ou não ser usado back-end: se não usado, nenhum dado é enviado ou armazenado. A validação e a mensagem de confirmação e erro do formulário devem acontecer na própria página.
3. Se a pessoa preencher alguma informação de forma incorreta, o formulário deve exibir uma mensagem de feedback sobre o erro.
4. Imagens: pode usar imagens livres ou ilustrações. O texto alternativo e o carregamento das imagens ficam por sua conta.
