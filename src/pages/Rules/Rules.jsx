// src/pages/Rules/Rules.jsx
import { useState } from 'react';
import RulesSidebar from "../../components/Rules/RulesSidebar";
import RulesContent from "../../components/Rules/RulesContent";
import "./Rules.css";


const Rules = () => {
  const [activeSection, setActiveSection] = useState('introducao');

  const rulesData = {
    introducao: {
      title: "Introdução ao Sistema",
      content: `
        <h2>Bem-vindo ao Ordem Paranormal RPG</h2>
        <p>Ordem Paranormal RPG é um sistema de RPG de mesa brasileiro criado por Cellbit, focado em investigação, horror e combate contra criaturas paranormais. Os jogadores assumem o papel de agentes da Ordem da Realidade, uma organização secreta que luta para proteger o mundo contra ameaças sobrenaturais.</p>
        
        <h3>Como Funciona o Sistema</h3>
        <p>O sistema utiliza um conjunto de dados D20 (dados de 20 faces) para a maioria dos testes. Os personagens possuem atributos, perícias e habilidades especiais que os ajudam em suas missões contra o paranormal.</p>
        
        <div class="rules-tip">
          <strong>💡 Dica:</strong> Este sistema é perfeito para campanhas de investigação com elementos de horror e suspense.
        </div>
      `
    },
    atributos: {
      title: "Atributos e Testes",
      content: `
        <h2>Atributos dos Personagens</h2>
        <p>Cada personagem possui cinco atributos principais que definem suas capacidades básicas:</p>
        
        <div class="attributes-grid">
          <div class="attribute-card">
            <h4>FORÇA (FOR)</h4>
            <p>Mede a potência física, capacidade de levantar peso e causar dano em combate corpo a corpo.</p>
            <ul>
              <li>Testes de atletismo</li>
              <li>Dano com armas brancas</li>
              <li>Resistência física</li>
            </ul>
          </div>
          
          <div class="attribute-card">
            <h4>AGILIDADE (AGI)</h4>
            <p>Representa velocidade, reflexos, coordenação motora e precisão.</p>
            <ul>
              <li>Testes de reflexos</li>
              <li>Esquiva de ataques</li>
              <li>Precisão com armas à distância</li>
            </ul>
          </div>
          
          <div class="attribute-card">
            <h4>INTELECTO (INT)</h4>
            <p>Capacidade de raciocínio, conhecimento, memória e percepção.</p>
            <ul>
              <li>Testes de investigação</li>
              <li>Conhecimento ocultista</li>
              <li>Resolução de enigmas</li>
            </ul>
          </div>
          
          <div class="attribute-card">
            <h4>VIGOR (VIG)</h4>
            <p>Mede a resistência, saúde e força de vontade do personagem.</p>
            <ul>
              <li>Pontos de vida</li>
              <li>Resistência a venenos</li>
              <li>Testes de fortitude</li>
            </ul>
          </div>
          
          <div class="attribute-card">
            <h4>PRESENÇA (PRE)</h4>
            <p>Carisma, poder de persuasão, liderança e força pessoal.</p>
            <ul>
              <li>Testes de diplomacia</li>
              <li>Intimidação</li>
              <li>Enganação</li>
            </ul>
          </div>
        </div>
        
        <h3>Como Fazer Testes</h3>
        <p>Quando um personagem tenta realizar uma ação com chance de falha, o Mestre pode pedir um teste:</p>
        
        <div class="test-example">
          <p><strong>1.</strong> O Mestre determina qual atributo e/ou perícia é relevante</p>
          <p><strong>2.</strong> O jogador rola 1D20 e soma o modificador do atributo</p>
          <p><strong>3.</strong> Se aplicável, soma o bônus de perícia treinada (+5)</p>
          <p><strong>4.</strong> Compara o resultado com a Dificuldade (DV) estabelecida pelo Mestre</p>
        </div>
        
        <table class="rules-table">
          <thead>
            <tr>
              <th>Dificuldade (DV)</th>
              <th>Descrição</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>Muito Fácil</td>
              <td>Abrir uma porta destrancada</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Fácil</td>
              <td>Escalar uma árvore</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Moderado</td>
              <td>Persuadir um guarda</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Difícil</td>
              <td>Decifrar um código complexo</td>
            </tr>
            <tr>
              <td>25+</td>
              <td>Muito Difícil</td>
              <td>Convencer uma entidade paranormal</td>
            </tr>
          </tbody>
        </table>
      `
    },
    pericias: {
      title: "Perícias",
      content: `
        <h2>Sistema de Perícias</h2>
        <p>Perícias representam conhecimentos e habilidades específicas que os personagens podem aprender e melhorar. Cada perícia está associada a um atributo principal.</p>
        
        <h3>Lista de Perícias</h3>
        
        <div class="skills-category">
          <h4>👤 Perícias de Agilidade</h4>
          <div class="skills-grid">
            <div class="skill-item">
              <strong>Acrobacia</strong>
              <span>Realizar manobras acrobáticas, equilíbrio</span>
            </div>
            <div class="skill-item">
              <strong>Furtividade</strong>
              <span>Movimentar-se silenciosamente, esconder-se</span>
            </div>
            <div class="skill-item">
              <strong>Pilotagem</strong>
              <span>Operar veículos, dirigir em situações difíceis</span>
            </div>
            <div class="skill-item">
              <strong>Pontaria</strong>
              <span>Precisão com armas de ataque à distância</span>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>💪 Perícias de Força</h4>
          <div class="skills-grid">
            <div class="skill-item">
              <strong>Atletismo</strong>
              <span>Correr, saltar, nadar, escalar</span>
            </div>
            <div class="skill-item">
              <strong>Luta</strong>
              <span>Combate corpo a corpo, artes marciais</span>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>🧠 Perícias de Intelecto</h4>
          <div class="skills-grid">
            <div class="skill-item">
              <strong>Ciências</strong>
              <span>Conhecimento científico, pesquisa</span>
            </div>
            <div class="skill-item">
              <strong>Investigacao</strong>
              <span>Procurar pistas, analisar evidências</span>
            </div>
            <div class="skill-item">
              <strong>Medicina</strong>
              <span>Primeiros socorros, diagnóstico médico</span>
            </div>
            <div class="skill-item">
              <strong>Ocultismo</strong>
              <span>Conhecimento sobre o paranormal</span>
            </div>
            <div class="skill-item">
              <strong>Tecnologia</strong>
              <span>Usar computadores, hackear sistemas</span>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>✨ Perícias de Presença</h4>
          <div class="skills-grid">
            <div class="skill-item">
              <strong>Enganacao</strong>
              <span>Mentir, disfarçar-se, blefar</span>
            </div>
            <div class="skill-item">
              <strong>Intimidacao</strong>
              <span>Ameaçar, coagir, impor medo</span>
            </div>
            <div class="skill-item">
              <strong>Persuasao</strong>
              <span>Convencer, negociar, diplomacia</span>
            </div>
          </div>
        </div>
        
        <h3>Treinamento em Perícias</h3>
        <p>Personagens podem ser treinados em perícias específicas, recebendo um bônus de +5 em testes relacionados. O treinamento é adquirido através de:</p>
        
        <ul>
          <li>Origem do personagem</li>
          <li>Classe escolhida</li>
          <li>Vantagens e talentos</li>
          <li>Experiência ao longo das campanhas</li>
        </ul>
      `
    },
    combate: {
      title: "Sistema de Combate",
      content: `
        <h2>Regras de Combate</h2>
        <p>O combate em Ordem Paranormal RPG é dividido em rodadas, onde cada participante age em ordem de iniciativa.</p>
        
        <h3>Iniciativa</h3>
        <p>No início do combate, cada personagem rola 1D20 e soma seu modificador de Agilidade para determinar a ordem de ação:</p>
        
        <div class="combat-step">
          <span class="step-number">1</span>
          <p>Rolagem de iniciativa (1D20 + AGI)</p>
        </div>
        
        <div class="combat-step">
          <span class="step-number">2</span>
          <p>Personagens agem da maior para a menor iniciativa</p>
        </div>
        
        <div class="combat-step">
          <span class="step-number">3</span>
          <p>O combate continua em rodadas até que termine</p>
        </div>
        
        <h3>Ações em Combate</h3>
        <p>Em seu turno, cada personagem pode realizar:</p>
        
        <div class="action-grid">
          <div class="action-card">
            <h4>⚔️ Ação Padrão</h4>
            <ul>
              <li>Atacar um inimigo</li>
              <li>Usar uma perícia</li>
              <li>Realizar um ritual</li>
            </ul>
          </div>
          
          <div class="action-card">
            <h4>🚶 Ação de Movimento</h4>
            <ul>
              <li>Mover-se até 9m (quadrados de 1.5m)</li>
              <li>Levantar-se (se estiver caído)</li>
              <li>Pegar um item</li>
            </ul>
          </div>
          
          <div class="action-card">
            <h4>⚡ Ação Livre</h4>
            <ul>
              <li>Falar algumas palavras</li>
              <li>Soltar um item</li>
              <li>Mudar empunhadura</li>
            </ul>
          </div>
        </div>
        
        <h3>Ataques e Dano</h3>
        <p>Para realizar um ataque bem-sucedido:</p>
        
        <div class="attack-flow">
          <div class="flow-step">
            <strong>1. Rolagem de Ataque</strong>
            <p>1D20 + modificador de atributo (FOR para corpo a corpo, AGI para distância) + bônus de treinamento</p>
          </div>
          
          <div class="flow-step">
            <strong>2. Comparação com Defesa</strong>
            <p>Se o resultado for igual ou maior que a Defesa do alvo, o ataque acerta</p>
          </div>
          
          <div class="flow-step">
            <strong>3. Rolagem de Dano</strong>
            <p>Rola-se o dado de dano da arma + modificador de Força (para armas corpo a corpo)</p>
          </div>
        </div>
        
        <h3>Defesa</h3>
        <p>A Defesa representa a dificuldade de acertar um personagem. É calculada como:</p>
        
        <div class="defense-formula">
          <p>10 + modificador de Agilidade + bônus de armadura + outros modificadores</p>
        </div>
        
        <table class="rules-table">
          <thead>
            <tr>
              <th>Situação</th>
              <th>Modificador de Defesa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alvo caído</td>
              <td>+2 no ataque</td>
            </tr>
            <tr>
              <td>Flanquear inimigo</td>
              <td>+2 no ataque</td>
            </tr>
            <tr>
              <td>Alvo em cobertura</td>
              <td>+2 a +5 na defesa</td>
            </tr>
            <tr>
              <td>Atacar à distância em corpo a corpo</td>
              <td>-5 no ataque</td>
            </tr>
          </tbody>
        </table>
      `
    },
    sanidade: {
      title: "Sanidade e Paranormal",
      content: `
        <h2>Sistema de Sanidade</h2>
        <p>A Sanidade representa a saúde mental do personagem e sua resistência aos horrores do paranormal. É um dos aspectos mais únicos e importantes do sistema.</p>
        
        <h3>Pontos de Sanidade</h3>
        <p>Cada personagem possui Pontos de Sanidade atuais e máximo, calculados como:</p>
        
        <div class="sanity-formula">
          <p>Sanidade Máxima = 20 + modificador de Presença</p>
        </div>
        
        <p>Ocultistas começam com Sanidade máxima adicional devido seu treinamento.</p>
        
        <h3>Perda de Sanidade</h3>
        <p>Personagens perdem Sanidade quando:</p>
        
        <div class="sanity-loss-grid">
          <div class="sanity-loss-item">
            <h4>👻 Testemunhar o Paranormal</h4>
            <p>Ver criaturas, rituais ou eventos sobrenaturais</p>
            <span class="sanity-cost">1-3 PS</span>
          </div>
          
          <div class="sanity-loss-item">
            <h4>⚡ Usar Rituais</h4>
            <p>Conjurar poderes paranormais tem seu preço</p>
            <span class="sanity-cost">Varia por ritual</span>
          </div>
          
          <div class="sanity-loss-item">
            <h4>💀 Enfrentar a Morte</h4>
            <p>Ver aliados morrerem de forma violenta</p>
            <span class="sanity-cost">2-5 PS</span>
          </div>
          
          <div class="sanity-loss-item">
            <h4>😱 Experiências Traumáticas</h4>
            <p>Tortura, possessão, experiências de quase-morte</p>
            <span class="sanity-cost">3-6 PS</span>
          </div>
        </div>
        
        <h3>Condições de Sanidade</h3>
        <p>Conforme a Sanidade diminui, personagens podem desenvolver condições mentais:</p>
        
        <table class="rules-table">
          <thead>
            <tr>
              <th>Sanidade Atual</th>
              <th>Condição</th>
              <th>Efeitos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>75% - 100%</td>
              <td>Estável</td>
              <td>Nenhum efeito negativo</td>
            </tr>
            <tr>
              <td>50% - 74%</td>
              <td>Abalado</td>
              <td>-1 em testes de Presença</td>
            </tr>
            <tr>
              <td>25% - 49%</td>
              <td>Perturbado</td>
              <td>-2 em testes de Presença, pesadelos constantes</td>
            </tr>
            <tr>
              <td>1% - 24%</td>
              <td>Desesperado</td>
              <td>-3 em testes de Presença, visões paranormais</td>
            </tr>
            <tr>
              <td>0%</td>
              <td>Insanidade</td>
              <td>Personagem fica permanentemente louco</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Rituais Paranormais</h3>
        <p>Rituais são poderes sobrenaturais que personagens podem aprender, mas cada uso custa Sanidade:</p>
        
        <div class="ritual-example">
          <h4>🔮 Example: Eco Espiral</h4>
          <p><strong>Custo:</strong> 2 PE + 1 Sanidade</p>
          <p><strong>Efeito:</strong> Cria uma barreira espiral que desvia ataques</p>
          <p><strong>Execução:</strong> Ação padrão, alcance médio, duração 1 rodada</p>
        </div>
        
        <div class="rules-warning">
          <strong>⚠️ Perigo:</strong> Usar rituais excessivamente pode levar à insanidade permanente ou transformação em criatura paranormal!
        </div>
      `
    },
    downloads: {
      title: "Downloads e Recursos",
      content: `
        <h2>Materiais de Apoio</h2>
        <p>Baixe os recursos oficiais e complementares para melhorar sua experiência com Ordem Paranormal RPG.</p>
        
        <div class="downloads-grid">
          <div class="download-card">
            <h4>📖 Livro de Regras Oficial</h4>
            <p>O guia completo com todas as regras, classes, origens e criaturas</p>
            <a href="#" class="btn download-btn">Baixar PDF (25MB)</a>
          </div>
          
          <div class="download-card">
            <h4>🎭 Folha de Personagem</h4>
            <p>Ficha oficial para criar e gerenciar seus personagens</p>
            <a href="#" class="btn download-btn">Baixar PDF (2MB)</a>
          </div>
          
          <div class="download-card">
            <h4>👻 Bestiário de Criaturas</h4>
            <p>Catálogo com todas as entidades e monstros paranormais</p>
            <a href="#" class="btn download-btn">Baixar PDF (15MB)</a>
          </div>
          
          <div class="download-card">
            <h4>🔮 Grimório de Rituais</h4>
            <p>Lista completa de rituais e poderes paranormais</p>
            <a href="#" class="btn download-btn">Baixar PDF (8MB)</a>
          </div>
        </div>
        
        <h3>Recursos da Comunidade</h3>
        <p>Materiais criados por fãs e jogadores:</p>
        
        <div class="community-resources">
          <div class="resource-item">
            <h4>🗺️ Mapas e Cenários</h4>
            <p>Mapas prontos para usar em suas campanhas</p>
            <a href="#" class="resource-link">Acessar Biblioteca</a>
          </div>
          
          <div class="resource-item">
            <h4>📊 Calculadora de Atributos</h4>
            <p>Ferramenta para calcular pontos de atributo</p>
            <a href="#" class="resource-link">Acessar Ferramenta</a>
          </div>
          
          <div class="resource-item">
            <h4>🎲 Rolador de Dados Virtual</h4>
            <p>Rolador de dados online para sessões remotas</p>
            <a href="#" class="resource-link">Acessar Rolador</a>
          </div>
          
          <div class="resource-item">
            <h4>💡 Gerador de NPCs</h4>
            <p>Crie personagens não jogadores rapidamente</p>
            <a href="#" class="resource-link">Acessar Gerador</a>
          </div>
        </div>
        
        <div class="rules-tip">
          <strong>💡 Dica:</strong> Junte-se à nossa comunidade no Discord para compartilhar e encontrar mais recursos!
        </div>
      `
    }
  };

  return (
    <div className="rules-page">
      <div className="container">
        <div className="rules-header">
          <h1 className="page-title">📚 Regras de Ordem Paranormal</h1>
          <p>Guia completo do sistema de RPG para mestres e jogadores</p>
        </div>

        <div className="rules-layout">
          <RulesSidebar 
            sections={Object.keys(rulesData).map(key => ({
              id: key,
              title: rulesData[key].title
            }))}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          <RulesContent 
            title={rulesData[activeSection].title}
            content={rulesData[activeSection].content}
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;