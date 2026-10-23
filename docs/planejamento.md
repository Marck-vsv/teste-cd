# Planejamento (seção 0 do material de apoio)

> Rascunho inicial preparado com apoio do Claude a partir do briefing. As decisões finais são do dev/designer: revise, ajuste e marque o que confirmar.

## Contexto de uso

O público são adultos e idosos (incluindo pessoas 50+) que querem aprender a cozinhar do zero e famílias com crianças de 6 a 12 anos, considerando também pessoas com deficiência visual, auditiva e motora e pessoas com pouca familiaridade com o digital. A tarefa principal do visitante é entender qual curso e qual turma servem para ele e fazer a pré-inscrição. O acesso deve acontecer principalmente pelo celular, muitas vezes chegando por um link de WhatsApp ou rede social, com conexão móvel que pode ser instável, em momentos de pausa em casa ou no trabalho.

## Objetivo e CTA primário

- **Objetivo principal:** pré-inscrição concluída no formulário da página.
- **CTA primário:** "Fazer pré-inscrição" (âncora para o formulário). No formulário, o botão final é "Enviar pré-inscrição".
- CTAs secundários (sem competir visualmente com o primário): "Ver cursos e turmas", "Falar no WhatsApp".

## Requisitos derivados do briefing

### Conteúdo obrigatório
- Os dois cursos com: formato presencial, número e duração das aulas, vagas por turma, módulos, turmas e horários, duração em semanas, valor à vista e parcelado, o que está incluso e faixa de idade.
- Regra do Kids: cada criança participa com 1 responsável, que também cozinha. O valor é por dupla.
- Calendário de início: Manhã na primeira segunda-feira de cada mês; Noite na primeira terça-feira de cada mês; Sábado e Kids no primeiro sábado de fevereiro, abril, junho, agosto e outubro.
- Reembolso integral até 7 dias antes do início; certificado com 75% de presença; Chef Helena Duarte (15 anos de experiência); endereço, WhatsApp e e-mail.

### Formulário
- Escolher curso e turma.
- Informar alergias e restrições alimentares.
- Kids, ou participante menor de 18 anos no Essencial: dados da criança/participante (nome e idade) e do responsável.
- Validação, mensagens de erro e confirmação na própria página; sem envio nem armazenamento de dados.

### Técnicos
- Página única, toda em pt-BR. Imagens livres ou ilustrações, com texto alternativo e carregamento otimizado.

## Requisitos inferidos

- O Essencial aceita a partir de 13 anos: se o participante tiver de 13 a 17 anos, o formulário pede os dados do responsável; menos de 13 anos é bloqueado com mensagem que sugere o Kids (se tiver de 6 a 12 anos).
- O Kids tem uma única turma, então a turma é preenchida automaticamente ao escolher o curso, com explicação.
- A próxima data de início de cada turma é calculada na página a partir da data atual e mostrada nos cards e no resumo antes do envio (ex.: em 23/10/2026: Manhã 02/11/2026, Noite 03/11/2026, Sábado e Kids 06/02/2027).
- A data-limite de reembolso (7 dias antes do início) aparece junto com a data de início.
- Consentimento LGPD separado para dados de saúde (alergias) e, quando houver, dados da criança, dado pelo responsável e nunca pré-marcado.
- Página "Política de privacidade" resumida na própria página (seção ou bloco expansível), por ser sinal de credibilidade (§10) e exigência de consentimento informado (§5).

## Suposições (a confirmar)

- Depois da pré-inscrição, a escola entra em contato pelo WhatsApp ou e-mail informado em até 2 dias úteis para confirmar a vaga e combinar o pagamento. **O briefing não define prazo nem canal.**
- O pagamento acontece só depois da confirmação da vaga; a pré-inscrição não cobra nada.
- O link do WhatsApp usa o número fictício do briefing e é marcado como exemplo.
- Não há dados de depoimentos, notas ou número de alunos, então a página não terá prova social (§10).
- Como não há back-end, o envio é simulado no navegador: nenhum dado sai da página.

## Ordem das seções proposta (§1)

1. Header com logo, menu (Cursos, Como funciona, Instrutora, Dúvidas, Contato) e CTA "Fazer pré-inscrição".
2. Hero: o que é, para quem e o próximo passo.
3. Para quem é: dois perfis (quero aprender do zero / quero cozinhar com meu filho), cada um levando ao curso certo.
4. Instrutora e credibilidade: Chef Helena Duarte, certificado, reembolso, ingredientes inclusos.
5. Como funciona: escolha o curso, faça a pré-inscrição, a escola confirma a vaga, pagamento, primeira aula.
6. Cursos e turmas: os dois cursos em cards com os mesmos atributos na mesma ordem, e as turmas em tabela comparável com a próxima data de início.
7. Formulário de pré-inscrição (CTA).
8. Dúvidas frequentes (FAQ).
9. Rodapé com contato, endereço e política de privacidade.

## Estrutura do formulário proposta (§5)

O formulário passa de 8 campos, então a proposta é dividir em 3 etapas com indicador "Etapa X de 3":

1. **Curso e turma:** curso, turma (com data de início e valor visíveis).
2. **Pessoas:** seus dados (nome, e-mail, WhatsApp); opção "Sou o participante" (Essencial) ou dados da criança e do responsável (Kids), com campos condicionais explicados.
3. **Saúde e revisão:** alergias e restrições, consentimentos, resumo editável e botão "Enviar pré-inscrição".

Confirmação com `role="status"`, resumo do que foi escolhido, próximos passos e regra de reembolso.
