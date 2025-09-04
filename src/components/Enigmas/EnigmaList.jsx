// pages/Enigmas/components/EnigmaList.jsx
import { useState } from 'react';
import './EnigmaList.css';

const EnigmaList = ({ enigmas, onEnigmaSelect }) => {
  const [filters, setFilters] = useState({
    difficulty: 'all',
    category: 'all',
    status: 'all'
  });

  const difficulties = ['all', 'Fácil', 'Médio', 'Difícil'];
  const categories = ['all', 'Paranormal', 'Onírico', 'Oculto', 'Investigation'];
  const statuses = ['all', 'em aberto', 'resolvido', 'falhou'];

  const filteredEnigmas = enigmas.filter(enigma => {
    return (
      (filters.difficulty === 'all' || enigma.difficulty === filters.difficulty) &&
      (filters.category === 'all' || enigma.category === filters.category) &&
      (filters.status === 'all' || enigma.status === filters.status)
    );
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'resolvido': return 'status-solved';
      case 'em aberto': return 'status-open';
      case 'falhou': return 'status-failed';
      default: return '';
    }
  };

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'difficulty-easy';
      case 'Médio': return 'difficulty-medium';
      case 'Difícil': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="enigma-list">
      <div className="filters">
        <div className="filter-group">
          <label>Dificuldade:</label>
          <select 
            value={filters.difficulty} 
            onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff}>
                {diff === 'all' ? 'Todas' : diff}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Categoria:</label>
          <select 
            value={filters.category} 
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas' : cat}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Status:</label>
          <select 
            value={filters.status} 
            onChange={(e) => setFilters({...filters, status: e.target.value})}
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'Todos' : 
                 status === 'em aberto' ? 'Em Aberto' :
                 status === 'resolvido' ? 'Resolvido' : 'Falhou'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="enigmas-grid">
        {filteredEnigmas.length > 0 ? (
          filteredEnigmas.map(enigma => (
            <div 
              key={enigma.id} 
              className="enigma-card"
              onClick={() => onEnigmaSelect(enigma)}
            >
              <div className="enigma-header">
                <h3>{enigma.title}</h3>
                <span className={`difficulty-badge ${getDifficultyClass(enigma.difficulty)}`}>
                  {enigma.difficulty}
                </span>
              </div>
              
              <p className="enigma-description">{enigma.description}</p>
              
              <div className="enigma-meta">
                <span className="enigma-author">por {enigma.author}</span>
                <span className="enigma-category">{enigma.category}</span>
                <span className={`enigma-status ${getStatusClass(enigma.status)}`}>
                  {enigma.status === 'em aberto' ? 'Em Aberto' : 
                   enigma.status === 'resolvido' ? 'Resolvido' : 'Falhou'}
                </span>
              </div>

              {enigma.status === 'em aberto' && (
                <div className="attempts-info">
                  Tentativas: {enigma.attempts}/{enigma.maxAttempts}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-enigmas">
            <p>Nenhum enigma encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnigmaList;