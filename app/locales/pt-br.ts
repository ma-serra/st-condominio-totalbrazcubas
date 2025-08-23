const pt_br = {
  Chat: {
    SubTitle: (count: number) => `${count} mensagens`,
    Actions: {
      ChatList: "Ir para Lista de Chats",
      Copy: "Copiar",
      Delete: "Deletar",
    },
    InputActions: {
      Stop: "Parar geração",
      Clear: "Limpar Contexto",
    },
    Thinking: "Pensando…",
    InputMobile: "Enter para enviar",
    Input:
      "Enter para enviar, Shift + Enter para quebrar linha, insira URLs para adicionar PDF ou documento HTML ao contexto",
    Send: "Enviar",
    IsContext: "Prompt Contextual",
    LoadingURL: "Carregando conteúdo...",
    LLMError:
      "Houve um erro ao chamar a API OpenAI. Tente novamente mais tarde.",
  },
  Upload: {
    Invalid: (acceptTypes: string) =>
      `Tipo de arquivo inválido. Selecione um arquivo com um destes formatos: ${acceptTypes}`,
    SizeExceeded: (limitSize: number) =>
      `Tamanho do arquivo excedido. Limite é ${limitSize} MB`,
    Failed: (e: string) => `Erro no upload do arquivo: ${e}`,
    ParseDataURLFailed: "Não foi possível ler o arquivo: Verifique se está criptografado.",
    UnknownFileType: "Tipo de arquivo desconhecido",
    ModelDoesNotSupportImages: (acceptTypes: string) =>
      `Upload de imagem não é suportado para este modelo. Faça upload de um dos tipos suportados: ${acceptTypes}`,
  },
  Export: {
    Image: {
      Modal: "Pressione e segure ou clique com o botão direito para salvar a imagem",
    },
  },
  Memory: {
    Title: "Prompt de Memória",
    Send: "Enviar Memória",
  },
  Home: {
    Github: "Github",
    Logout: "Sair",
    Settings: "Configurações",
  },
  Settings: {
    Title: "Configurações",
    SubTitle: "Todas as Configurações",
    Danger: {
      Clear: {
        Title: "Limpar Todos os Dados",
        SubTitle: "Resetar todos os bots e limpar todas as mensagens",
        Action: "Limpar",
        Confirm: "Confirmar limpeza de todos os dados?",
      },
    },

    Model: "Modelo",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Um valor maior torna a saída mais aleatória",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Não altere este valor junto com a temperatura",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Comprimento máximo de tokens de entrada e tokens gerados",
    },
    Backup: {
      Download: {
        Title: "Backup de Bots",
        SutTitle: "Baixe o estado dos seus bots para um arquivo JSON",
      },
      Upload: {
        Title: "Restaurar Bots",
        SutTitle: "Faça upload do estado dos seus bots de um arquivo JSON",
        Success: "Bots restaurados com sucesso do arquivo JSON",
        Failed: (e: string) => `Erro ao importar arquivo JSON: ${e}`,
      },
    },
  },
  Store: {
    DefaultBotName: "Novo Bot",
    BotHello: "Olá! Como posso ajudá-lo hoje?",
  },
  Copy: {
    Success: "Copiado para a área de transferência",
    Failed: "Falha ao copiar",
  },
  Legal: {
    Analysis: {
      Title: "Análise Jurídica Condominial",
      Objective: "Objetivo",
      ModulesExecuted: "Módulos Executados",
      Summary: "Resumo",
      Recommendations: "Recomendações",
      Objectives: {
        InternalRegulation: "Confecção de Regimento Interno",
        PenaltyAnalysis: "Análise de Penalidades",
        ComplianceReview: "Revisão de Conformidade",
        GeneralOptimization: "Otimização Geral",
      },
      Modules: {
        Module1: "Extração Jurídica Inteligente",
        Module2: "Mapeamento Hierárquico Normativo",
        Module3: "Matriz de Conformidade Legal",
        Module4: "Otimização e Deduplicação",
        Module5: "Gerador de Minuta Técnica",
      },
      Instructions: "Para usar este sistema, anexe sua convenção ou regimento condominial e especifique: OBJETIVO: [confecção regimento interno | análise penalidades | revisão conformidade | otimização geral]",
      SupportedFormats: "Formatos suportados: PDF, DOCX, DOC, RTF, TXT, HTML, MD, XLSX, XLS, CSV, JSON, XML, PNG, JPG, JPEG (via OCR)",
      LegalBasis: "Base Legal: Lei 4.591/64, Código Civil arts. 1.331-1.358, jurisprudência consolidada STJ/STF",
    },
  },
};

export default pt_br;