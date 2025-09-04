// pages/Enigmas/Enigmas.jsx
import { useState } from 'react';
import EnigmaList from "../../components/Enigmas/EnigmaList";
import EnigmaDetail from "../../components/Enigmas/EnigmaDetail";
import EnigmaCreation from "../../components/Enigmas/EnigmaCreation";
import Ranking from "../../components/Enigmas/Ranking";
import './Enigmas.css';

const Enigmas = () => {
  const [view, setView] = useState('list'); // 'list', 'detail', 'create'
  const [selectedEnigma, setSelectedEnigma] = useState(null);
  const [enigmas, setEnigmas] = useState([
    {
      id: 1,
      title: 'O Enigma do Espelho',
      description: 'Um espelho antigo reflete mais do que apenas imagens. O que está escondido por trás do reflexo?',
      difficulty: 'Difícil',
      author: 'Bagi',
      category: 'Paranormal',
      status: 'em aberto',
      answer: 'reflexo',
      attempts: 0,
      maxAttempts: 3
    },
    {
      id: 2,
      title: 'A Chave dos Sonhos',
      description: 'Os sonhos são portas para outras realidades. Qual é a chave que abre todas elas?',
      difficulty: 'Médio',
      author: 'Mike',
      category: 'Onírico',
      status: 'resolvido',
      answer: 'imaginação',
      attempts: 2,
      maxAttempts: 5
    },
    {
      id: 3,
      title: 'O Sussurro das Sombras',
      description: 'As sombras sussurram segredos quando a luz se vai. O que elas estão tentando dizer?',
      difficulty: 'Fácil',
      author: 'Takao',
      category: 'Oculto',
      status: 'em aberto',
      answer: 'medo',
      attempts: 1,
      maxAttempts: 3
    }
  ]);

  const [ranking, setRanking] = useState([
    { id: 1, name: 'Cellbit', solved: 15 },
    { id: 2, name: 'Felps', solved: 12 },
    { id: 3, name: 'Bagi', solved: 10 },
    { id: 4, name: 'Mike', solved: 8 },
    { id: 5, name: 'Takao', solved: 6 }
  ]);

  const handleEnigmaSelect = (enigma) => {
    setSelectedEnigma(enigma);
    setView('detail');
  };

  const handleBackToList = () => {
    setSelectedEnigma(null);
    setView('list');
  };

  const handleCreateEnigma = (newEnigma) => {
    const enigma = {
      ...newEnigma,
      id: Math.max(...enigmas.map(e => e.id)) + 1,
      status: 'em aberto',
      attempts: 0
    };
    setEnigmas([...enigmas, enigma]);
    setView('list');
  };

  const handleSolveAttempt = (enigmaId, answer) => {
    const updatedEnigmas = enigmas.map(enigma => {
      if (enigma.id === enigmaId) {
        const isCorrect = answer.toLowerCase() === enigma.answer.toLowerCase();
        const attempts = enigma.attempts + 1;
        const status = isCorrect ? 'resolvido' : (attempts >= enigma.maxAttempts ? 'falhou' : 'em aberto');
        
        return {
          ...enigma,
          attempts,
          status
        };
      }
      return enigma;
    });
    
    setEnigmas(updatedEnigmas);
    
    // Se acertou, atualizar ranking (simulação)
    const solvedEnigma = updatedEnigmas.find(e => e.id === enigmaId);
    if (solvedEnigma.status === 'resolvido') {
      // Em uma implementação real, isso viria do backend
      alert('Parabéns! Você resolveu o enigma!');
    }
  };

  return (
    <div className="enigmas-page">
      <div className="container">
        <div className="enigmas-header">
          <h1 className="page-title">Enigmas Paranormais</h1>
          <p>Teste suas habilidades de investigação e resolva mistérios sobrenaturais</p>
          <div className="view-controls">
            <button 
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              Lista de Enigmas
            </button>
            <button 
              className={`view-btn ${view === 'ranking' ? 'active' : ''}`}
              onClick={() => setView('ranking')}
            >
              Ranking
            </button>
            <button 
              className="btn create-btn"
              onClick={() => setView('create')}
            >
              Criar Enigma
            </button>
          </div>
        </div>

        <div className="enigmas-content">
          {view === 'list' && (
            <EnigmaList 
              enigmas={enigmas} 
              onEnigmaSelect={handleEnigmaSelect}
            />
          )}
          
          {view === 'detail' && selectedEnigma && (
            <EnigmaDetail 
              enigma={selectedEnigma}
              onBack={handleBackToList}
              onSolveAttempt={handleSolveAttempt}
            />
          )}
          
          {view === 'create' && (
            <EnigmaCreation 
              onCreate={handleCreateEnigma}
              onCancel={handleBackToList}
            />
          )}
          
          {view === 'ranking' && (
            <Ranking 
              ranking={ranking}
              onBack={handleBackToList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Enigmas;