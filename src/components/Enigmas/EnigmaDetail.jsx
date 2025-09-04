// pages/Enigmas/components/EnigmaDetail.jsx
import { useState } from 'react';
import './EnigmaDetail.css';

const EnigmaDetail = ({ enigma, onBack, onSolveAttempt }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) {
      setFeedback('Por favor, insira uma resposta.');
      return;
    }

    if (enigma.status !== 'em aberto') {
      setFeedback('Este enigma já foi resolvido ou você esgotou suas tentativas.');
      return;
    }

    onSolveAttempt(enigma.id, userAnswer);
    setUserAnswer('');
    
    // Feedback visual
    const isCorrect = userAnswer.toLowerCase() === enigma.answer.toLowerCase();
    if (isCorrect) {
      setFeedback('✅ Resposta correta! Parabéns!');
    } else {
      const remaining = enigma.maxAttempts - (enigma.attempts + 1);
      setFeedback(`❌ Resposta incorreta. ${remaining > 0 ? 
        `Você tem ${remaining} tentativa(s) restante(s).` : 
        'Você esgotou todas as tentativas.'}`);
    }
  };

  const getStatusText = () => {
    switch (enigma.status) {
      case 'resolvido': return 'Resolvido';
      case 'falhou': return 'Falhou';
      default: return 'Em Aberto';
    }
  };

  return (
    <div className="enigma-detail">
      <button className="back-btn" onClick={onBack}>
        ← Voltar para a lista
      </button>

      <div className="enigma-detail-card">
        <div className="enigma-detail-header">
          <div>
            <h2>{enigma.title}</h2>
            <div className="enigma-meta">
              <span className={`difficulty-badge ${enigma.difficulty.toLowerCase()}`}>
                {enigma.difficulty}
              </span>
              <span className="enigma-category">{enigma.category}</span>
              <span className="enigma-author">por {enigma.author}</span>
              <span className={`status-badge ${enigma.status}`}>
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>

        <div className="enigma-content">
          <div className="enigma-description">
            <h3>Descrição</h3>
            <p>{enigma.description}</p>
          </div>

          {enigma.status === 'em aberto' ? (
            <div className="solution-section">
              <h3>Sua Resposta</h3>
              <form onSubmit={handleSubmit} className="answer-form">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Digite sua resposta aqui..."
                  disabled={enigma.status !== 'em aberto'}
                />
                <button 
                  type="submit" 
                  disabled={enigma.status !== 'em aberto'}
                  className="submit-btn"
                >
                  Enviar Resposta
                </button>
              </form>

              {feedback && (
                <div className="feedback">
                  {feedback}
                </div>
              )}

              <div className="attempts-info">
                <p>Tentativas: {enigma.attempts} de {enigma.maxAttempts}</p>
              </div>
            </div>
          ) : (
            <div className="enigma-result">
              <h3>Resultado</h3>
              <p>
                {enigma.status === 'resolvido' 
                  ? '✅ Você resolveu este enigma!' 
                  : '❌ Você não conseguiu resolver este enigma.'}
              </p>
              {enigma.status === 'resolvido' && (
                <p>A resposta correta era: <strong>{enigma.answer}</strong></p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnigmaDetail;