import type { CursoId, TurmaId } from "@/lib/turmas";

export type Dados = {
  cursoId: CursoId | "";
  turmaId: TurmaId | "";
  participanteNome: string;
  participanteIdade: string;
  responsavelNome: string;
  email: string;
  telefone: string;
  temAlergias: "" | "sim" | "nao";
  alergias: string;
  consenteSaude: boolean;
  consenteResponsavel: boolean;
  consenteContato: boolean;
};

export type Campo = keyof Dados;
export type Erros = Partial<Record<Campo, string>>;

export const DADOS_VAZIOS: Dados = {
  cursoId: "",
  turmaId: "",
  participanteNome: "",
  participanteIdade: "",
  responsavelNome: "",
  email: "",
  telefone: "",
  temAlergias: "",
  alergias: "",
  consenteSaude: false,
  consenteResponsavel: false,
  consenteContato: false,
};

export const TURMA_DO_KIDS: TurmaId = "kids-sabado";

/** Quem preenche: define quais campos aparecem e como se chamam. */
export type Perfil = "adulto" | "menor" | "kids" | "indefinido";

export function lerIdade(texto: string): number | null {
  const limpo = texto.trim();
  if (!/^\d{1,3}$/.test(limpo)) return null;
  return Number(limpo);
}

export function perfilDe(dados: Dados): Perfil {
  if (dados.cursoId === "kids") return "kids";
  const idade = lerIdade(dados.participanteIdade);
  if (idade === null || idade < 13) return "indefinido";
  return idade < 18 ? "menor" : "adulto";
}

/** Há responsável quando o participante é criança ou menor de 18 anos. */
export function temResponsavel(perfil: Perfil) {
  return perfil === "kids" || perfil === "menor";
}

export function normalizarTelefone(texto: string): string {
  let digitos = texto.replace(/\D/g, "");
  if (digitos.startsWith("55") && digitos.length > 11)
    digitos = digitos.slice(2);
  return digitos;
}

export function formatarTelefone(texto: string): string {
  const d = normalizarTelefone(texto);
  if (d.length === 11)
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return texto.trim();
}

const DOMINIOS_COMUNS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gamil.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmal.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "yahho.com": "yahoo.com",
};

export function sugerirEmail(email: string): string | null {
  const [usuario, dominio] = email.trim().toLowerCase().split("@");
  if (!usuario || !dominio) return null;
  const certo = DOMINIOS_COMUNS[dominio];
  return certo ? `${usuario}@${certo}` : null;
}

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validarCampo(campo: Campo, dados: Dados): string | undefined {
  const perfil = perfilDe(dados);
  const nome = dados[campo];

  switch (campo) {
    case "cursoId":
      return dados.cursoId
        ? undefined
        : "Escolha um curso para continuar. Assim mostramos as turmas certas.";

    case "turmaId":
      if (dados.cursoId !== "essencial") return undefined;
      return dados.turmaId
        ? undefined
        : "Escolha uma turma. Cada uma tem dias, horário e data de início diferentes.";

    case "participanteNome": {
      const texto = String(nome).trim();
      if (texto.length >= 3) return undefined;
      return perfil === "kids" || perfil === "menor"
        ? "Informe o nome completo do participante. Usamos para reservar a vaga."
        : "Informe seu nome completo. Usamos para reservar a vaga.";
    }

    case "participanteIdade": {
      const texto = String(nome).trim();
      if (!texto) {
        return "Informe a idade em anos, só com números. Ex.: 34.";
      }
      const idade = lerIdade(texto);
      if (idade === null) {
        return "Use só números na idade, por exemplo 34.";
      }
      if (dados.cursoId === "kids" && (idade < 6 || idade > 12)) {
        return idade > 12
          ? "O Culinária Kids é para crianças de 6 a 12 anos. Para 13 anos ou mais, escolha o Culinária Essencial."
          : "O Culinária Kids é para crianças de 6 a 12 anos. Confira a idade informada.";
      }
      if (dados.cursoId === "essencial" && idade < 13) {
        return idade >= 6
          ? "O Culinária Essencial é a partir de 13 anos. Para essa idade, escolha o Culinária Kids, em que a criança cozinha com um responsável."
          : "O Culinária Essencial é a partir de 13 anos e o Kids é de 6 a 12 anos. Confira a idade informada.";
      }
      if (idade > 120)
        return "Confira a idade informada. Ela parece alta demais.";
      return undefined;
    }

    case "responsavelNome":
      if (!temResponsavel(perfil)) return undefined;
      return String(nome).trim().length >= 3
        ? undefined
        : "Informe o nome completo do responsável. Ele recebe o contato da escola.";

    case "email": {
      const texto = String(nome).trim();
      if (!texto) {
        return "Informe um e-mail para a escola confirmar a vaga. Ex.: nome@email.com.";
      }
      return EMAIL_VALIDO.test(texto)
        ? undefined
        : "Esse e-mail parece incompleto. Confira se tem @ e o final, como .com. Ex.: nome@email.com.";
    }

    case "telefone": {
      const digitos = normalizarTelefone(String(nome));
      if (!digitos) {
        return "Informe um WhatsApp para a escola entrar em contato. Ex.: (86) 99999-9999.";
      }
      return digitos.length === 10 || digitos.length === 11
        ? undefined
        : "Informe o DDD e o número, com 10 ou 11 dígitos. Ex.: (86) 99999-9999.";
    }

    case "temAlergias":
      return dados.temAlergias
        ? undefined
        : "Diga se há alergias ou restrições alimentares. Escolha Não se não houver.";

    case "alergias":
      if (dados.temAlergias !== "sim") return undefined;
      return dados.alergias.trim().length >= 3
        ? undefined
        : "Descreva as alergias ou restrições. Ex.: alergia a amendoim, sem lactose.";

    case "consenteSaude":
      if (dados.temAlergias !== "sim") return undefined;
      return dados.consenteSaude
        ? undefined
        : "Marque a caixa para autorizar o uso das informações de saúde. Sem isso não conseguimos considerá-las nas aulas.";

    case "consenteResponsavel":
      if (!temResponsavel(perfil)) return undefined;
      return dados.consenteResponsavel
        ? undefined
        : "O responsável precisa marcar esta caixa para autorizar o uso dos dados do participante.";

    case "consenteContato":
      return dados.consenteContato
        ? undefined
        : "Marque a caixa para a escola poder entrar em contato e confirmar a vaga.";

    default:
      return undefined;
  }
}

export type Etapa = 1 | 2 | 3;

export const CAMPOS_POR_ETAPA: Record<Etapa, Campo[]> = {
  1: ["cursoId", "turmaId"],
  2: [
    "participanteNome",
    "participanteIdade",
    "responsavelNome",
    "email",
    "telefone",
  ],
  3: [
    "temAlergias",
    "alergias",
    "consenteSaude",
    "consenteResponsavel",
    "consenteContato",
  ],
};

export function validarEtapa(etapa: Etapa, dados: Dados): Erros {
  const erros: Erros = {};
  for (const campo of CAMPOS_POR_ETAPA[etapa]) {
    const mensagem = validarCampo(campo, dados);
    if (mensagem) erros[campo] = mensagem;
  }
  return erros;
}

export function validarTudo(dados: Dados): Erros {
  return {
    ...validarEtapa(1, dados),
    ...validarEtapa(2, dados),
    ...validarEtapa(3, dados),
  };
}
