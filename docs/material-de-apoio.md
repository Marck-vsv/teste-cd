# Material de apoio de UX/UI e acessibilidade para desenvolvimento de interfaces assistido por IA generativa

> Versão em texto (.md) do PDF "Material de apoio.docx.pdf", para uso como contexto em ferramentas de IA (exigência do briefing). Conteúdo transcrito sem alterações.

Este documento tem dois usos: é material de leitura e consulta para quem desenvolve ou projeta a página e é instrução para a IA que vai gerá-la. As mesmas regras servem aos dois.

**Para quem desenvolve ou projeta (dev/designer):**

- Leia antes de começar. Cada seção traz as referências de origem entre colchetes, um parágrafo de por que importa e as regras.
- Use o documento para planejar a página, escrever prompts mais precisos e, principalmente, avaliar com olhar crítico o que a IA propõe. A IA pode afirmar que seguiu uma regra sem ter seguido.
- Depois da geração, revise a página: pela IA e também por conta própria, seguindo a verificação técnica da §11.
- As regras são o padrão, não sugestões opcionais. Se, no seu contexto, uma regra não fizer sentido, você pode não aplicá-la; registre o motivo.
- As referências entre colchetes permitem aprofundar cada regra na fonte original (veja a tabela abaixo).

## Referências usadas

| Sigla | Referência | Do que trata |
|---|---|---|
| N1–N10 | 10 Heurísticas de Nielsen | Princípios gerais de usabilidade de interfaces |
| S1–S8 | 8 Regras de Ouro de Shneiderman | Princípios de projeto da interação entre pessoa e sistema |
| Norman | Don Norman, The Design of Everyday Things | Como as pessoas entendem e usam objetos e interfaces: significantes, restrições, feedback, modelos mentais e erros |
| LoUX | Laws of UX, Jon Yablonski | Leis e efeitos da psicologia aplicados ao design (inclui os princípios de Gestalt de percepção visual) |
| WCAG | WCAG 2.2, W3C (níveis A e AA) | Critérios técnicos de acessibilidade web, identificados pelo número (ex.: 1.4.3) |
| NBR | ABNT NBR 17225 | Norma brasileira de acessibilidade web, elaborada com base na WCAG 2.2 |
| ISO 9241-11 | Ergonomia da interação humano-sistema: usabilidade | Define usabilidade como eficácia, eficiência e satisfação em um contexto de uso |
| ISO 9241-210 | Design centrado no ser humano | Processo de projeto baseado em usuários, tarefas, contexto e avaliação |
| ISO 25010 | Modelo de qualidade de produto de software | Características de qualidade: adequação funcional, desempenho, compatibilidade, confiabilidade, segurança, manutenibilidade, flexibilidade |
| Morville | Honeycomb de Peter Morville | Sete facetas da experiência: útil, usável, desejável, encontrável, acessível, crível e valiosa |
| LGPD | Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais) | Tratamento de dados pessoais, com regras específicas para dados sensíveis (como saúde) e dados de crianças |

## 0. Antes de gerar: contexto de uso

[ISO 9241-210 (incl. princípio 5: experiência como um todo) · ISO 9241-11 · Norman: design centrado no humano e duplo diamante]

**Por que importa:** Sem saber quem usa a página, para quê e em que condições, as decisões viram gosto pessoal. Sem esse contexto, a IA tende a projetar para um usuário genérico: jovem, experiente e sem deficiência.

- Escreva em 2–3 frases, antes do código: quem é o público (inclua pessoas 50+ e pessoas com deficiência visual, auditiva e motora), qual a tarefa principal do visitante (a conversão que a página busca) e em que contexto (dispositivo predominante, conexão, ambiente).
- Derive os requisitos do briefing. Liste os que você inferiu e as suposições feitas.
- Defina um objetivo principal e um CTA primário. Todo o resto da página serve a esse objetivo.
- A página é boa se o visitante atinge o objetivo com eficácia (consegue), eficiência (sem esforço nem erro desnecessários) e satisfação, naquele contexto.
- Garanta que o problema certo está sendo resolvido antes de refinar a solução visual.
- Projete a experiência como um todo, não só a tela: o que o visitante sabe antes de chegar, o que faz na página e o que acontece depois da conversão (ver §5, "Depois do envio").

## 1. Estrutura e hierarquia

[N8 · S8 · LoUX: Hick, Miller, Chunking, Carga Cognitiva, Sobrecarga de Escolha, Navalha de Occam, Posição Serial, Atenção Seletiva · Gestalt · WCAG 1.3.1, 1.3.2, 2.4.6]

**Por que importa:** O visitante decide em poucos segundos se continua lendo. Uma estrutura clara reduz o esforço mental e é também o que torna a página navegável por leitor de tela.

- Ordene as seções pela ordem de decisão do visitante: o que é → para quem e quais benefícios → prova e credibilidade → como funciona → opções, turmas e preços → CTA → contato/FAQ.
- Cada seção tem um propósito. Remova o que não ajuda a decidir; informação secundária vai para divulgação progressiva (FAQ, "saiba mais"). Minimalismo é relevância, não "pouca coisa".
- Agrupe listas longas em blocos com significado (chunking), para que o visitante consiga percorrê-las. O número de itens não é um limite fixo; o que importa é que a lista seja fácil de escanear.
- Sobrecarga de escolha: quando houver várias opções (produtos, planos, turmas, horários), apresente-as em formato comparável, com os mesmos atributos na mesma ordem (preço, duração, horário, para quem é), e deixe as diferenças evidentes. Ajude a decidir por perfil ("Para quem é") em vez de despejar todas as combinações de uma vez. Não force a escolha antes da hora: o visitante entende as opções primeiro e escolhe no formulário.
- Primeiro e último itens de listas e menus são os mais lembrados: coloque ali o mais importante.
- Gestalt: espaço entre grupos maior que dentro do grupo (proximidade); mesma função = mesmo estilo (semelhança); cards e fundos agrupam (região comum); prefira layouts simples (Prägnanz).
- Informação crítica nunca pode parecer anúncio (banner blindness).
- HTML semântico: um único h1, hierarquia de títulos sem pular níveis, landmarks (header, nav, main, footer), listas como ul/ol. A ordem do DOM é a ordem de leitura visual.

## 2. Hero e CTA

[Norman: affordances, significantes, descobribilidade · LoUX: Von Restorff, Fitts · N4 · WCAG 1.4.1, 1.4.3, 1.4.11, 2.5.8]

**Por que importa:** A página existe para levar o visitante a uma ação. Se ele não percebe o que é clicável nem qual é o próximo passo, a página falha no seu único objetivo.

- O hero responde em poucos segundos: o que é, para quem, e qual o próximo passo.
- Um CTA visualmente dominante por seção, destacado por contraste, tamanho e posição, nunca só por cor. Se tudo é destaque, nada é.
- Rótulo do CTA com verbo de ação específico ("Agendar demonstração", não "Enviar" ou "OK").
- Todo elemento clicável parece clicável (cor sólida, borda, sublinhado em links, cursor: pointer). Nada estático parece botão. Link navega (`<a>`); botão executa ação (`<button>`).
- Estados visíveis e distintos: default, hover, focus, active, disabled, loading.
- Alvos com no mínimo 24×24 px; em toque, prefira 44×44 px. Ações frequentes grandes e perto de onde o polegar/cursor já está.
- Contraste: 4.5:1 para texto normal, 3:1 para texto grande (≥ 24 px, ou ≥ 18,66 px em negrito) e para bordas, ícones e estados.
- Ícone sem rótulo só se for universal; senão, texto visível.

## 3. Navegação

[N4 · S1 · LoUX: Jakob, Modelo Mental, Hick · Norman: mapeamento · WCAG 2.4.1, 2.4.2, 2.4.4, 2.4.11, 3.1.1, 3.2.3]

**Por que importa:** As pessoas chegam com expectativas aprendidas em outros sites. Navegação fora do padrão custa tempo e pode excluir quem usa teclado ou leitor de tela.

- Siga convenções da web: logo no canto superior esquerdo levando ao topo, menu no header, contato no rodapé. Não invente metáforas novas.
- Poucos itens no menu (ideal até ~5–7), com nomes iguais aos títulos das seções. O item correspondente à seção atual fica indicado.
- Link "Pular para o conteúdo" como primeiro elemento focável.
- Texto de link diz para onde leva ("Ver planos", não "Clique aqui").
- Menu mobile: `<button>` com aria-expanded e aria-controls, fecha com Esc e devolve o foco ao botão.
- Header fixo não pode cobrir o elemento em foco nem o título da âncora: use scroll-padding-top.
- `<html lang="pt-BR">` e `<title>` descritivo e único.
- O botão voltar do navegador funciona como esperado com âncoras.

## 4. Conteúdo e linguagem

[N2 · N6 · LoUX: Carga Cognitiva, Modelo Mental · Norman: conhecimento no mundo, modelo conceitual, golfo de execução · WCAG 1.3.3, 1.4.5, 3.1.2]

**Por que importa:** Jargão, informação escondida e regras descobertas tarde geram dúvida, erro e desistência, principalmente para quem tem menos familiaridade com o digital.

- Linguagem simples, não jargão técnico ou interno. Frases curtas, voz ativa.
- Formatos locais pt-BR: 24/09/2026, R$ 1.234,56, (86) 99999-9999.
- Terminologia única em toda a página: se é "Plano", não vira "Pacote" em outra seção.
- O que o visitante precisa saber para agir está visível na página (preço, prazo, próximo passo), não escondido nem dependente de memória.
- Modelo conceitual: a página explica como a oferta funciona, para que a ideia que o visitante forma coincida com a realidade: quem participa, o que está incluso, quanto custa e o que o valor cobre, como é a inscrição e o que acontece depois. Regras especiais (idade mínima, participação de mais de uma pessoa, acompanhante, turmas com datas de início diferentes) ficam explícitas antes do formulário, nunca descobertas só ao preenchê-lo.
- Golfo de execução: o visitante sabe, olhando a página, o que precisa fazer para atingir o objetivo e onde fazer. Se a resposta for "depende", a página explica do que depende.
- Instruções não dependem só de forma, cor ou posição ("o botão verde à direita" é insuficiente).
- Texto real, nunca imagem de texto (exceto logotipo). Trechos em outro idioma marcados com lang.

## 5. Formulário de contato ou captação

[N1 · N5 · N9 · S3 · S4 · S5 · Norman: restrições, slips e mistakes, modelo conceitual, golfos de execução e avaliação · LoUX: Postel, Tesler, Gradiente de Meta, Zeigarnik, Pico-Fim · ISO 9241-210 (princípio 5) · WCAG 1.3.5, 3.2.2, 3.3.1–3.3.4, 3.3.7, 4.1.3 · NBR 5.9.11, 5.9.15 · ISO 25010: segurança · LGPD arts. 11 e 14]

**Por que importa:** O formulário é onde a conversão acontece e onde mais se erra. Cada campo confuso ou erro mal explicado é uma inscrição perdida.

- Peça o mínimo. Cada campo extra é custo para o usuário. Decida conscientemente o que o sistema absorve.
- A estrutura do formulário espelha o modelo conceitual: se a inscrição envolve mais de uma pessoa ou regras por opção escolhida, agrupe os campos por pessoa ou assunto (fieldset + legend, ex.: "Seus dados", "Dados do participante") e mostre campos condicionais só quando a escolha os exigir, explicando por que apareceram. Revelar campos na mesma página não é mudança de contexto, mas o novo grupo deve ficar visível e anunciado de forma não intrusiva.
- Progresso (Gradiente de Meta e Zeigarnik): se o formulário tiver mais de ~6–8 campos ou grupos distintos, divida em etapas curtas com indicador textual "Etapa 2 de 3: Dados do participante", comece pela etapa mais fácil, permita voltar sem perder dados e mostre o que falta. Com poucas etapas, prefira uma página só, bem agrupada. O progresso deve ser honesto: nada de etapas escondidas nem percentual inflado.
- Rótulo visível e persistente acima de cada campo; placeholder é exemplo, nunca rótulo. Obrigatórios indicados em texto ("obrigatório") ou com símbolo explicado. Instruções de formato antes do campo.
- autocomplete correto nos campos com dados de quem preenche (name, email, tel), com type e inputmode adequados. Em campos de outra pessoa (criança, participante), não use os mesmos tokens: use autocomplete="off" ou um token de seção diferente, para o navegador não preencher ali os dados de quem está preenchendo.
- Restrinja por design (tipo de campo, máscara tolerante) e seja liberal no que aceita: telefone com ou sem máscara, espaços extras. Normalize internamente.
- Se o botão ficar desabilitado, diga o que falta. Alternativa preferível: botão sempre ativo; ao clicar, foco vai para o primeiro erro.
- Validação ao sair do campo e no envio, não a cada tecla. Mudar um valor nunca muda de contexto sozinho.
- Erro em três partes: o que aconteceu, por que (se útil) e como resolver. Perto do campo, com ícone + cor + texto, associado via aria-describedby e aria-invalid="true". Nunca culpe o usuário.
- Com vários erros: resumo no topo com links para cada campo e foco movido para ele.
- Nunca apague o que foi digitado. Sugira a correção quando conhecida ("Você quis dizer gmail.com?").
- Revisão antes do envio: mostre um resumo do que foi escolhido (opção, turma, data de início, valor, participantes), com opção de editar cada item sem perder o restante. Quem envia precisa poder conferir e corrigir antes de se comprometer.
- Não peça o mesmo dado duas vezes. Se quem preenche também é o participante ou o responsável, ofereça uma opção (ex.: "Sou o responsável") que reaproveite os dados já informados.
- Envio: botão entra em estado de carregamento em até ~400 ms e bloqueia duplo envio.
- Fechamento: confirmação específica ("Recebemos seu contato. Respondemos em até 2 dias úteis."), anunciada por leitor de tela com role="status". É o momento que fecha o golfo de avaliação: o visitante precisa ter certeza de que funcionou.
- Depois do envio: a confirmação resume o que foi escolhido (opção, turma, participantes) e diz o que acontece a seguir: quem entra em contato, por qual canal, em que prazo, o que falta para concluir (pagamento, documentos), o que preparar e as regras de cancelamento ou reembolso. Ofereça um próximo passo útil (canal de contato, voltar à página). Como o fim é o que mais se lembra (Pico-Fim), ele precisa ser claro e tranquilizador.
- Falha de rede tem mensagem clara e "Tentar novamente", preservando os dados.
- Consentimento (LGPD) explícito, em linguagem simples, nunca pré-marcado. Dados de saúde (alergias, restrições alimentares, condições médicas) e dados de crianças são sensíveis: peça só o necessário, explique para que serão usados e peça consentimento específico do responsável, separado de qualquer outro aceite.
- Captcha, se existir, precisa de alternativa acessível (item crítico da NBR 17225). Prefira soluções sem desafio ao usuário (honeypot, verificação no servidor).

## 6. Imagens, mídia e movimento

[WCAG 1.1.1, 1.2.x, 1.4.2, 2.2.2, 2.3.1 · NBR: Libras, conteúdo de terceiros · LoUX: Atenção Seletiva · S7]

**Por que importa:** Imagens e mídia sem alternativa deixam de fora pessoas cegas e surdas. Movimento automático distrai e pode causar desconforto ou mal-estar.

- Imagem informativa tem alt equivalente ao conteúdo; imagem decorativa tem alt="" ou é fundo CSS.
- Vídeo com áudio tem legendas e transcrição. Vídeo com informação visual não narrada tem audiodescrição (obrigatória: WCAG 1.2.5 e NBR 17225, item 5.14.4). Janela de Libras é recomendada conforme o público.
- Nada de áudio automático. Vídeo nunca começa com som.
- Carrosséis: evite (conteúdo após o primeiro slide é pouco visto). Se usar, sem avanço automático, ou com botão de pausa visível; operável por teclado.
- Nada pisca mais de 3 vezes por segundo. Respeite prefers-reduced-motion.
- Texto sobre imagem mantém contraste mínimo (use sobreposição escura/clara).
- Embeds de terceiros (mapas, vídeos, chat) também precisam ser acessíveis.

## 7. Visual: tipografia, cor e espaçamento

[N8 · LoUX: Estética-Usabilidade, Von Restorff · Norman: design emocional · Morville: desejável · WCAG 1.4.1, 1.4.3, 1.4.4, 1.4.11, 1.4.12]

**Por que importa:** Contraste, tamanho e espaçamento decidem se o texto é legível para pessoas com baixa visão e para o público 50+. A estética também influencia a confiança na página.

- Escala tipográfica clara (tamanho, peso, espaçamento). Corpo de texto com no mínimo 16 px e altura de linha ~1.5 (importante para o público 50+).
- Escala de espaçamento consistente e grid alinhado. Tokens de cor e tipografia centralizados.
- Cor nunca é o único meio de transmitir informação (erro, obrigatório, link, status).
- Nada quebra com zoom de texto de 200% nem com espaçamento aumentado pelo usuário (altura de linha 1.5, letras 0.12em, palavras 0.16em). Evite alturas fixas em blocos de texto.
- Identidade visual própria e coerente com a marca do briefing, evitando o visual genérico de template. Cuide dos três níveis de Norman: visceral (primeira impressão), comportamental (uso fluido) e reflexivo (significado, confiança).
- Uma página bonita parece mais fácil de usar e disfarça problemas: beleza não substitui as regras deste documento.

## 8. Interação, teclado e controle do usuário

[N3 · N7 · S2 · S6 · S7 · LoUX: Paradoxo do Usuário Ativo · WCAG 1.4.13, 2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.5.1–2.5.3, 3.2.1, 4.1.2]

**Por que importa:** Muitas pessoas navegam sem mouse (teclado, leitor de tela, comando de voz), e toda interação precisa funcionar para elas. Comportamentos inesperados tiram o controle de quem usa.

- Tudo operável 100% por teclado, em ordem lógica. Use elementos nativos (button, a, input) antes de recriar com div. Sem tabindex positivo.
- Foco sempre visível: nunca outline: none sem substituto. Use :focus-visible com indicador de ≥ 2 px e contraste 3:1.
- Receber foco nunca abre, navega ou envia nada sozinho.
- O usuário inicia as ações: sem pop-ups não solicitados, sem modal ao entrar na página, sem redirecionamentos inesperados.
- Modal (se houver): fecha com botão visível e Esc; foco entra, fica contido e volta ao elemento de origem.
- Tooltips e conteúdo em hover: fecham com Esc, permitem mover o ponteiro até eles e não somem sozinhos.
- Banner de cookies não bloqueia o conteúdo nem cobre o foco; aceitar e recusar têm o mesmo peso visual.
- Ação dispara ao soltar o clique; gestos complexos têm alternativa com clique simples. O nome acessível contém o texto visível.
- Componentes customizados expõem nome, papel, estado e valor. Primeira regra do ARIA: se existe elemento nativo, use-o.
- Ensine no contexto (texto de apoio no próprio campo ou seção), não com tutoriais: as pessoas não leem antes de usar.

## 9. Responsividade, desempenho e qualidade do produto

[ISO 25010 · LoUX: Doherty, Fitts, Pareto · WCAG 1.3.4, 1.4.10]

**Por que importa:** Grande parte dos acessos acontece pelo celular, muitas vezes com conexão instável. Uma página bonita que quebra, demora ou tem links mortos não cumpre sua função.

- Mobile first. Funciona em 320 px de largura sem rolagem horizontal e em retrato e paisagem. CTA na zona de alcance do polegar.
- Adequação funcional: todo link e botão funciona; nada de "lorem ipsum", links # mortos ou seções vazias. Otimize primeiro o que a maioria dos visitantes usa.
- Eficiência de desempenho: imagens em formato moderno e dimensionadas, loading="lazy" abaixo da dobra, width/height definidos (sem saltos de layout), fontes com font-display: swap, pouco JavaScript. Interações respondem em até ~400 ms.
- Compatibilidade: funciona nos navegadores atuais e com tecnologias assistivas (leitor de tela, zoom, alto contraste/forced-colors).
- Confiabilidade: falhas de rede e dados ausentes têm estado tratado, nunca tela quebrada.
- Segurança: nenhum dado sensível em URL, console ou código-fonte.
- Manutenibilidade e flexibilidade: componentes reutilizáveis, sem duplicação, textos centralizados, layout que suporta textos mais longos.

## 10. Credibilidade, ajuda e ética

[Morville: crível · N10 · WCAG 3.2.6 · LoUX: Gradiente de Meta, Zeigarnik (uso ético)]

**Por que importa:** Ninguém se inscreve onde não confia. Técnicas de pressão podem até converter no curto prazo, mas minam a confiança e prejudicam quem é mais vulnerável.

- Sinais de credibilidade: contato real, política de privacidade, identidade consistente, sem erros de digitação. Em cliente fictício, dados de exemplo claramente plausíveis e coerentes.
- Depoimentos, avaliações, notas e números de alunos só com dados fornecidos pelo cliente. Se o briefing não traz esses dados, não invente: construa a credibilidade com o que o briefing oferece (instrutor ou equipe, certificado, política de reembolso, endereço e contato). Se quiser mostrar o componente de depoimentos, identifique-o visivelmente como ilustrativo.
- Ajuda e contato fáceis de achar e sempre no mesmo lugar (rodapé e/ou header). FAQ responde às objeções reais do público.
- Sem dark patterns: nada de urgência falsa, contador regressivo falso, estoque falso, prova social inventada (ver item acima), confirmshaming, consentimento pré-marcado, "recusar" escondido ou progresso inflado para pressionar a conclusão.

## 11. Verificação técnica

[WCAG 2.2 · NBR 17225 (checklist) · ISO 9241-210 · LoUX: Viés Cognitivo]

**Por que importa:** A IA pode afirmar que seguiu uma regra sem ter seguido, e uma página pode parecer correta na tela e ainda falhar para quem usa teclado, zoom ou leitor de tela. Só a verificação mostra o que de fato foi entregue.

- Não aceite a afirmação da IA como prova. Para cada regra que a IA disser ter seguido, confira na página ou no código.
- Teclado: percorra a página inteira só com Tab, Shift+Tab, Enter, Espaço e Esc. O foco fica sempre visível, segue a ordem visual e nunca fica preso; o formulário pode ser preenchido e enviado sem mouse.
- Zoom e largura: teste com zoom de 200% e com largura de 320 px. Nada se sobrepõe, desaparece ou exige rolagem horizontal.
- Leitor de tela: ouça ao menos o hero, o menu e o formulário inteiro, incluindo uma mensagem de erro e a confirmação, com NVDA (Windows), VoiceOver (macOS/iOS) ou TalkBack (Android). Cada campo é anunciado com rótulo, obrigatoriedade e erro.
- Validação automática: rode Lighthouse, axe DevTools ou WAVE e corrija o que for apontado. Esses validadores encontram só parte dos problemas; uma página sem alertas ainda pode ter barreiras.
- Contraste: confira com um verificador as combinações de texto e fundo, os estados (hover, foco, erro, desabilitado) e o texto sobre imagens.
- Checklist da NBR 17225: use como roteiro final e registre os itens que não se aplicam à página.
- Revisão cruzada: peça a uma ferramenta de IA diferente da que gerou o código que procure falhas, e não que confirme acertos. Quem gerou tende a defender o que gerou (viés de confirmação).
- Registre o que verificou, o resultado e o que corrigiu.

## 12. Antes de entregar: Honeycomb de Morville

[Morville · ISO 9241-210]

**Por que importa:** Uma página pode atender a todos os critérios técnicos e ainda assim não servir a quem a usa. O Honeycomb verifica a experiência como um todo.

Responda "sim" a cada faceta ou corrija. Um "não" sem justificativa é pendência, não detalhe.

- Útil: resolve a necessidade do público descrita no briefing?
- Usável: o visitante atinge o objetivo sem erro nem ajuda externa?
- Desejável: tem cuidado estético e identidade, não só função?
- Encontrável: a informação e o CTA são fáceis de localizar?
- Acessível: funciona com teclado, leitor de tela, zoom, baixa visão e para pessoas 50+?
- Crível: transmite confiança, sem padrões enganosos?
- Valiosa: gera resultado para o visitante e para o cliente?
