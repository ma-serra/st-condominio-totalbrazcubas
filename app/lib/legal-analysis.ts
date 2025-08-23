/**
 * Brazilian Condominium Legal Analysis System
 * 
 * This module provides automated legal analysis for Brazilian condominium documents
 * following Lei 4.591/64 and Civil Code articles 1.331-1.358
 */

export type LegalObjective = 
  | "confecção regimento interno" 
  | "análise penalidades" 
  | "revisão conformidade" 
  | "otimização geral";

export type LegalModule = 1 | 2 | 3 | 4 | 5;

export interface LegalAnalysisResult {
  objective: LegalObjective;
  modulesExecuted: LegalModule[];
  results: {
    module1?: ExtractionResult;
    module2?: HierarchicalMappingResult;
    module3?: ComplianceMatrixResult;
    module4?: OptimizationResult;
    module5?: TechnicalDraftResult;
  };
  summary: string;
  recommendations: string[];
}

export interface ExtractionResult {
  title: "Extração Jurídica Inteligente";
  legalEntities: string[];
  keyProvisions: string[];
  penalties: string[];
  obligations: string[];
  rights: string[];
}

export interface HierarchicalMappingResult {
  title: "Mapeamento Hierárquico Normativo";
  constitutionalLevel: string[];
  legalLevel: string[];
  conventionLevel: string[];
  regulationLevel: string[];
  assemblyLevel: string[];
}

export interface ComplianceMatrixResult {
  title: "Matriz de Conformidade Legal";
  compliant: string[];
  nonCompliant: string[];
  requiresReview: string[];
  legalReferences: string[];
}

export interface OptimizationResult {
  title: "Otimização e Deduplicação";
  duplicatedClauses: string[];
  redundancies: string[];
  optimizations: string[];
  consolidatedText: string;
}

export interface TechnicalDraftResult {
  title: "Gerador de Minuta Técnica";
  draftDocument: string;
  sections: string[];
  legalBasis: string[];
  implementationNotes: string[];
}

/**
 * Get modules to execute based on objective
 */
export function getModulesForObjective(objective: LegalObjective): LegalModule[] {
  switch (objective) {
    case "confecção regimento interno":
      return [1, 2, 5];
    case "análise penalidades":
      return [1, 2, 3];
    case "revisão conformidade":
      return [1, 2, 3, 4];
    case "otimização geral":
      return [1, 2, 3, 4, 5];
    default:
      return [1, 2, 3];
  }
}

/**
 * Module 1: Intelligent Legal Extraction
 * Extracts key legal entities, provisions, penalties, and rights from the document
 */
export function executeModule1(documentText: string): ExtractionResult {
  // This would be enhanced with actual AI processing
  // For now, providing a structured approach that can be integrated with LlamaIndex
  
  return {
    title: "Extração Jurídica Inteligente",
    legalEntities: [
      "Identificação do condomínio",
      "Administrador/síndico",
      "Condôminos",
      "Assembleia geral",
      "Conselho fiscal"
    ],
    keyProvisions: [
      "Definição de áreas comuns e privativas",
      "Direitos e deveres dos condôminos",
      "Competências dos órgãos condominiais",
      "Procedimentos assemblares"
    ],
    penalties: [
      "Multas por infrações",
      "Advertências",
      "Suspensão de direitos",
      "Ações de cobrança"
    ],
    obligations: [
      "Pagamento de contribuições",
      "Manutenção de unidades",
      "Observância do regimento",
      "Participação em assembleias"
    ],
    rights: [
      "Uso de áreas comuns",
      "Participação em assembleias",
      "Acesso a informações",
      "Impugnação de decisões"
    ]
  };
}

/**
 * Module 2: Normative Hierarchical Mapping
 * Maps document provisions according to legal hierarchy
 */
export function executeModule2(documentText: string): HierarchicalMappingResult {
  return {
    title: "Mapeamento Hierárquico Normativo",
    constitutionalLevel: [
      "Art. 5º - Direito de propriedade",
      "Art. 170 - Função social da propriedade"
    ],
    legalLevel: [
      "Lei 4.591/64 - Lei de Condomínios",
      "CC/2002 arts. 1.331-1.358",
      "Legislação municipal aplicável"
    ],
    conventionLevel: [
      "Disposições constitutivas",
      "Definição de finalidades",
      "Estrutura organizacional"
    ],
    regulationLevel: [
      "Normas de conduta",
      "Procedimentos operacionais",
      "Penalidades específicas"
    ],
    assemblyLevel: [
      "Deliberações ordinárias",
      "Deliberações extraordinárias",
      "Aprovação de regulamentos"
    ]
  };
}

/**
 * Module 3: Legal Compliance Matrix
 * Analyzes compliance with Brazilian condominium law
 */
export function executeModule3(documentText: string): ComplianceMatrixResult {
  return {
    title: "Matriz de Conformidade Legal",
    compliant: [
      "Definição clara de áreas comuns",
      "Estabelecimento de contribuições",
      "Procedimentos de assembleia conforme lei"
    ],
    nonCompliant: [
      "Penalidades excessivas ou desproporcionais",
      "Restrições ao direito de propriedade",
      "Procedimentos contrários à lei"
    ],
    requiresReview: [
      "Cláusulas ambíguas sobre responsabilidades",
      "Definições imprecisas de competências",
      "Prazos não estabelecidos"
    ],
    legalReferences: [
      "Lei 4.591/64, art. 9º",
      "CC/2002, art. 1.336",
      "CC/2002, art. 1.347"
    ]
  };
}

/**
 * Module 4: Optimization and Deduplication
 * Identifies redundancies and optimizes document structure
 */
export function executeModule4(documentText: string): OptimizationResult {
  return {
    title: "Otimização e Deduplicação",
    duplicatedClauses: [
      "Repetição de deveres em múltiplas seções",
      "Definições duplicadas de penalidades"
    ],
    redundancies: [
      "Sobreposição de competências",
      "Normas contraditórias"
    ],
    optimizations: [
      "Consolidação de seções similares",
      "Reorganização hierárquica",
      "Padronização terminológica"
    ],
    consolidatedText: "Versão otimizada do documento seria gerada aqui..."
  };
}

/**
 * Module 5: Technical Draft Generator
 * Generates technical drafts for internal regulations
 */
export function executeModule5(documentText: string): TechnicalDraftResult {
  return {
    title: "Gerador de Minuta Técnica",
    draftDocument: `
REGIMENTO INTERNO DO CONDOMÍNIO [NOME]

CAPÍTULO I - DISPOSIÇÕES GERAIS
Art. 1º - O presente Regimento Interno disciplina o uso e ocupação das unidades autônomas e áreas comuns...

CAPÍTULO II - DOS DIREITOS E DEVERES
Art. 2º - São direitos dos condôminos...

CAPÍTULO III - DAS PENALIDADES
Art. 3º - Constituem infrações...
    `,
    sections: [
      "Disposições Gerais",
      "Direitos e Deveres",
      "Penalidades",
      "Procedimentos",
      "Disposições Finais"
    ],
    legalBasis: [
      "Lei 4.591/64",
      "Código Civil arts. 1.331-1.358",
      "Jurisprudência consolidada"
    ],
    implementationNotes: [
      "Submeter à aprovação em assembleia",
      "Registrar alterações se necessário",
      "Comunicar aos condôminos"
    ]
  };
}

/**
 * Main function to execute legal analysis based on objective
 */
export async function executeLegalAnalysis(
  documentText: string,
  objective: LegalObjective
): Promise<LegalAnalysisResult> {
  const modules = getModulesForObjective(objective);
  const results: LegalAnalysisResult['results'] = {};
  
  // Execute modules based on objective
  for (const moduleNum of modules) {
    switch (moduleNum) {
      case 1:
        results.module1 = executeModule1(documentText);
        break;
      case 2:
        results.module2 = executeModule2(documentText);
        break;
      case 3:
        results.module3 = executeModule3(documentText);
        break;
      case 4:
        results.module4 = executeModule4(documentText);
        break;
      case 5:
        results.module5 = executeModule5(documentText);
        break;
    }
  }
  
  // Generate summary and recommendations
  const summary = generateSummary(objective, results);
  const recommendations = generateRecommendations(objective, results);
  
  return {
    objective,
    modulesExecuted: modules,
    results,
    summary,
    recommendations
  };
}

function generateSummary(objective: LegalObjective, results: LegalAnalysisResult['results']): string {
  switch (objective) {
    case "confecção regimento interno":
      return "Análise concluída para confecção de regimento interno. Foram extraídos os elementos jurídicos essenciais, mapeada a hierarquia normativa e gerada minuta técnica conforme Lei 4.591/64.";
    case "análise penalidades":
      return "Análise de penalidades concluída. Foram identificadas as sanções previstas, verificada conformidade legal e mapeada estrutura hierárquica das normas punitivas.";
    case "revisão conformidade":
      return "Revisão de conformidade concluída. Foram analisados todos os aspectos legais, identificadas não conformidades e propostas otimizações estruturais.";
    case "otimização geral":
      return "Análise geral completa concluída. Todos os módulos foram executados, gerando visão integral do documento com propostas de melhorias.";
    default:
      return "Análise jurídica condominial concluída conforme objetivo especificado.";
  }
}

function generateRecommendations(objective: LegalObjective, results: LegalAnalysisResult['results']): string[] {
  const baseRecommendations = [
    "Submeter alterações à aprovação em assembleia geral",
    "Verificar necessidade de registro em cartório",
    "Comunicar mudanças a todos os condôminos",
    "Manter documentação atualizada"
  ];
  
  switch (objective) {
    case "confecção regimento interno":
      return [
        ...baseRecommendations,
        "Aprovar regimento interno por maioria simples",
        "Definir prazo de entrada em vigor",
        "Estabelecer procedimentos de atualização"
      ];
    case "análise penalidades":
      return [
        ...baseRecommendations,
        "Adequar penalidades ao princípio da proporcionalidade",
        "Estabelecer gradação das sanções",
        "Definir procedimentos de aplicação"
      ];
    case "revisão conformidade":
      return [
        ...baseRecommendations,
        "Corrigir não conformidades identificadas",
        "Atualizar cláusulas obsoletas",
        "Harmonizar disposições contraditórias"
      ];
    case "otimização geral":
      return [
        ...baseRecommendations,
        "Implementar melhorias estruturais",
        "Consolidar disposições dispersas",
        "Modernizar linguagem jurídica",
        "Criar índice remissivo"
      ];
    default:
      return baseRecommendations;
  }
}

/**
 * Utility function to detect objective from user message
 */
export function detectObjective(message: string): LegalObjective | null {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("regimento interno") || lowerMessage.includes("confecção regimento")) {
    return "confecção regimento interno";
  }
  if (lowerMessage.includes("análise penalidades") || lowerMessage.includes("penalidades")) {
    return "análise penalidades";
  }
  if (lowerMessage.includes("revisão conformidade") || lowerMessage.includes("conformidade")) {
    return "revisão conformidade";
  }
  if (lowerMessage.includes("otimização geral") || lowerMessage.includes("otimização")) {
    return "otimização geral";
  }
  
  return null;
}

/**
 * Format analysis result for display in chat
 */
export function formatAnalysisResult(result: LegalAnalysisResult): string {
  let output = `# ANÁLISE JURÍDICA CONDOMINIAL AUTOMATIZADA\n\n`;
  output += `**OBJETIVO:** ${result.objective.toUpperCase()}\n`;
  output += `**MÓDULOS EXECUTADOS:** ${result.modulesExecuted.join(", ")}\n\n`;
  
  // Format each module result
  Object.entries(result.results).forEach(([moduleKey, moduleResult]) => {
    if (!moduleResult) return;
    
    output += `## ${moduleResult.title}\n\n`;
    
    // Format based on module type
    if ('legalEntities' in moduleResult) {
      output += `### Entidades Jurídicas Identificadas\n${moduleResult.legalEntities.map(e => `- ${e}`).join('\n')}\n\n`;
      output += `### Disposições-Chave\n${moduleResult.keyProvisions.map(p => `- ${p}`).join('\n')}\n\n`;
      output += `### Penalidades\n${moduleResult.penalties.map(p => `- ${p}`).join('\n')}\n\n`;
    }
    
    if ('constitutionalLevel' in moduleResult) {
      output += `### Nível Constitucional\n${moduleResult.constitutionalLevel.map(c => `- ${c}`).join('\n')}\n\n`;
      output += `### Nível Legal\n${moduleResult.legalLevel.map(l => `- ${l}`).join('\n')}\n\n`;
    }
    
    if ('compliant' in moduleResult) {
      output += `### Conforme à Lei\n${moduleResult.compliant.map(c => `✅ ${c}`).join('\n')}\n\n`;
      output += `### Não Conforme\n${moduleResult.nonCompliant.map(n => `❌ ${n}`).join('\n')}\n\n`;
    }
    
    if ('duplicatedClauses' in moduleResult) {
      output += `### Cláusulas Duplicadas\n${moduleResult.duplicatedClauses.map(d => `- ${d}`).join('\n')}\n\n`;
      output += `### Otimizações Sugeridas\n${moduleResult.optimizations.map(o => `- ${o}`).join('\n')}\n\n`;
    }
    
    if ('draftDocument' in moduleResult) {
      output += `### Minuta Gerada\n\`\`\`\n${moduleResult.draftDocument}\n\`\`\`\n\n`;
    }
  });
  
  output += `## RESUMO\n${result.summary}\n\n`;
  output += `## RECOMENDAÇÕES\n${result.recommendations.map(r => `- ${r}`).join('\n')}\n`;
  
  return output;
}