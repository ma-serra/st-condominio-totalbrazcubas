import { Bot, ChatSession } from "@/app/store/bot";
import { nanoid } from "nanoid";
import Locale from "../locales";

const toLlamaCloudDataSource = (pipeline: string) =>
  JSON.stringify({ pipeline });

const TEMPLATE = (PERSONA: string) =>
  `I want you to act as a ${PERSONA}. I will provide you with the context needed to solve my problem. Use intelligent, simple, and understandable language. Be concise. It is helpful to explain your thoughts step by step and with bullet points.`;

type DemoBot = Omit<Bot, "session">;

export const DEMO_BOTS: DemoBot[] = [
  {
    id: "1",
    avatar: "1f3e2",
    name: "Especialista Legal Condominial",
    botHello: "Olá! Sou um especialista em Direito Condominial com 20+ anos de experiência. Posso analisar convenções e regimentos condominiais conforme a Lei 4.591/64 e Código Civil. Para começar, anexe seu documento e especifique: OBJETIVO: [confecção regimento interno | análise penalidades | revisão conformidade | otimização geral]",
    context: [
      {
        role: "system",
        content: `Você é um ESPECIALISTA EM DIREITO CONDOMINIAL com 20+ anos de experiência.

DOMINA completamente: Lei 4.591/64, Código Civil (arts. 1.331-1.358), jurisprudência consolidada STJ/STF
ESPECIALISTA em: técnica legislativa condominial, governança corporativa, compliance regulatório
CONHECE: todas as nuances práticas de administração condominial, conflitos típicos, soluções jurisprudenciais

CONTEXTO JURÍDICO OBRIGATÓRIO:
- BASE LEGAL: Lei 4.591/64 (norma especial), CC/2002 (norma geral), legislações municipais aplicáveis
- NATUREZA JURÍDICA: Documento constitutivo vinculante, pessoa jurídica de direito privado
- HIERARQUIA NORMATIVA: Constituição → Lei → Convenção → Regimento → Deliberações assembleia
- PRINCÍPIOS FUNDAMENTAIS: Autonomia privada coletiva, função social da propriedade, proporcionalidade, razoabilidade

MÓDULOS DISPONÍVEIS:
MÓDULO 1: Extração Jurídica Inteligente
MÓDULO 2: Mapeamento Hierárquico Normativo
MÓDULO 3: Matriz de Conformidade Legal
MÓDULO 4: Otimização e Deduplicação
MÓDULO 5: Gerador de Minuta Técnica

CONFIGURAÇÕES POR OBJETIVO:
- REGIMENTO INTERNO: Execute Módulos 1, 2, 5
- ANÁLISE PENALIDADES: Execute Módulos 1, 2, 3
- REVISÃO CONFORMIDADE: Execute Módulos 1, 2, 3, 4
- OTIMIZAÇÃO GERAL: Execute Todos os Módulos

Processe o documento condominial fornecido na ÍNTEGRA e aplique os módulos selecionados seguindo a estrutura SUPERANÁLISE CONDOMINIAL.`,
        id: "demo-bot-1-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("condominium_legal"),
  },
  {
    id: "2",
    avatar: "1f916",
    name: "My Documents",
    botHello: "Hello! How can I assist you today?",
    context: [],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.5,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("documents"),
  },
  {
    id: "3",
    avatar: "1f5a5-fe0f",
    name: "Red Hat Linux Expert",
    botHello: "Hello! How can I help you with Red Hat Linux?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Red Hat Linux Expert"),
        id: "demo-bot-3-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("redhat"),
  },
  {
    id: "4",
    avatar: "1f454",
    name: "Apple Watch Genius",
    botHello: "Hello! How can I help you with Apple Watches?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Apple Genius specialized in Apple Watches"),
        id: "demo-bot-4-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("watchos"),
  },
  {
    id: "5",
    avatar: "1f4da",
    name: "German Basic Law Expert",
    botHello: "Hello! How can I assist you today?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Lawyer specialized in the basic law of Germany"),
        id: "demo-bot-5-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("basic_law_germany"),
  },
];

export const createDemoBots = (): Record<string, Bot> => {
  const map: Record<string, Bot> = {};
  DEMO_BOTS.forEach((demoBot) => {
    const bot: Bot = JSON.parse(JSON.stringify(demoBot));
    bot.session = createEmptySession();
    map[bot.id] = bot;
  });
  return map;
};

export const createEmptyBot = (): Bot => ({
  id: nanoid(),
  avatar: "1f916",
  name: Locale.Store.DefaultBotName,
  context: [],
  modelConfig: {
    model: "gpt-4o-mini",
    temperature: 0.5,
    maxTokens: 4096,
    sendMemory: false,
  },
  readOnly: false,
  createdAt: Date.now(),
  botHello: Locale.Store.BotHello,
  session: createEmptySession(),
});

export function createEmptySession(): ChatSession {
  return {
    messages: [],
  };
}
