import { 
  detectObjective, 
  executeLegalAnalysis, 
  getModulesForObjective,
  formatAnalysisResult 
} from '@/app/lib/legal-analysis';

// Test objective detection
console.log('Testing objective detection...');
console.log('Regimento interno:', detectObjective('Preciso de confecção regimento interno'));
console.log('Análise penalidades:', detectObjective('Faça análise penalidades do documento'));
console.log('Revisão conformidade:', detectObjective('Solicito revisão conformidade'));
console.log('Otimização geral:', detectObjective('Execute otimização geral completa'));

// Test module selection
console.log('\nTesting module selection...');
console.log('Regimento interno modules:', getModulesForObjective('confecção regimento interno'));
console.log('Análise penalidades modules:', getModulesForObjective('análise penalidades'));
console.log('Revisão conformidade modules:', getModulesForObjective('revisão conformidade'));
console.log('Otimização geral modules:', getModulesForObjective('otimização geral'));

// Test legal analysis execution
console.log('\nTesting legal analysis execution...');
const sampleDocument = `
CONVENÇÃO DO CONDOMÍNIO RESIDENCIAL EXEMPLO

Art. 1º - O condomínio é composto por 20 unidades residenciais.
Art. 2º - São áreas comuns: hall de entrada, escadarias, garagem.
Art. 3º - Os condôminos deverão contribuir com as despesas.
Art. 4º - É vedado fazer ruído após 22h.
Art. 5º - Animais são permitidos com restrições.
`;

executeLegalAnalysis(sampleDocument, 'confecção regimento interno')
  .then(result => {
    console.log('Analysis completed successfully');
    console.log('Objective:', result.objective);
    console.log('Modules executed:', result.modulesExecuted);
    console.log('Summary:', result.summary);
    
    // Test formatting
    const formatted = formatAnalysisResult(result);
    console.log('\nFormatted result length:', formatted.length);
    console.log('Contains analysis sections:', formatted.includes('# ANÁLISE JURÍDICA'));
  })
  .catch(error => {
    console.error('Analysis failed:', error);
  });