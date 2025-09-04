// pages/Sheets/components/SheetList.jsx
import { useState } from 'react';
import './SheetList.css';

const SheetList = ({ sheets, onSheetSelect, onCreateSheet }) => {
  const [filters, setFilters] = useState({
    class: 'all',
    origin: 'all',
    privacy: 'all'
  });

  const classes = ['all', 'Combatente', 'Especialista', 'Ocultista', 'Mundano'];
  const origins = ['all', 'Vítima', 'Acadêmico', 'Desgarrado', 'Lutador', 'Artista'];
  const privacyOptions = ['all', 'public', 'private'];

  const filteredSheets = sheets.filter(sheet => {
    return (
      (filters.class === 'all' || sheet.class === filters.class) &&
      (filters.origin === 'all' || sheet.origin === filters.origin) &&
      (filters.privacy === 'all' || 
       (filters.privacy === 'public' && sheet.isPublic) ||
       (filters.privacy === 'private' && !sheet.isPublic))
    );
  });

  const getClassIcon = (className) => {
    switch (className) {
      case 'Combatente': return '⚔️';
      case 'Especialista': return '🕵️';
      case 'Ocultista': return '🔮';
      case 'Mundano': return '👤';
      default: return '🎭';
    }
  };

  const getAttributeColor = (value) => {
    if (value >= 4) return 'attribute-high';
    if (value >= 3) return 'attribute-medium';
    if (value >= 2) return 'attribute-low';
    return 'attribute-very-low';
  };

  return (
    <div className="sheet-list">
      <div className="sheet-actions">
        <button className="btn create-btn" onClick={onCreateSheet}>
          ➕ Criar Nova Ficha
        </button>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Classe:</label>
          <select 
            value={filters.class} 
            onChange={(e) => setFilters({...filters, class: e.target.value})}
          >
            {classes.map(cls => (
              <option key={cls} value={cls}>
                {cls === 'all' ? 'Todas' : cls}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Origem:</label>
          <select 
            value={filters.origin} 
            onChange={(e) => setFilters({...filters, origin: e.target.value})}
          >
            {origins.map(origin => (
              <option key={origin} value={origin}>
                {origin === 'all' ? 'Todas' : origin}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Privacidade:</label>
          <select 
            value={filters.privacy} 
            onChange={(e) => setFilters({...filters, privacy: e.target.value})}
          >
            {privacyOptions.map(option => (
              <option key={option} value={option}>
                {option === 'all' ? 'Todas' : 
                 option === 'public' ? 'Públicas' : 'Privadas'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sheets-grid">
        {filteredSheets.length > 0 ? (
          filteredSheets.map(sheet => (
            <div 
              key={sheet.id} 
              className="sheet-card"
              onClick={() => onSheetSelect(sheet)}
            >
              <div className="sheet-header">
                <div className="sheet-class">
                  <span className="class-icon">{getClassIcon(sheet.class)}</span>
                  <span className="class-name">{sheet.class}</span>
                </div>
                <div className={`sheet-privacy ${sheet.isPublic ? 'public' : 'private'}`}>
                  {sheet.isPublic ? '🌐 Pública' : '🔒 Privada'}
                </div>
              </div>
              
              <div className="sheet-content">
                <h3>{sheet.name}</h3>
                <p className="sheet-player">Jogador: {sheet.player}</p>
                
                <div className="sheet-meta">
                  <div className="meta-item">
                    <span className="meta-label">Nível:</span>
                    <span className="meta-value">#{sheet.level}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Origem:</span>
                    <span className="meta-value">{sheet.origin}</span>
                  </div>
                </div>

                <div className="attributes-grid">
                  {Object.entries(sheet.attributes).map(([attr, value]) => (
                    <div key={attr} className="attribute-item">
                      <span className="attribute-name">{attr.substring(0, 3).toUpperCase()}</span>
                      <span className={`attribute-value ${getAttributeColor(value)}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="status-bars">
                  <div className="status-bar">
                    <span className="status-label">Vida:</span>
                    <div className="bar-container">
                      <div 
                        className="bar-fill health"
                        style={{ width: `${(sheet.health / sheet.maxHealth) * 100}%` }}
                      ></div>
                      <span className="bar-text">{sheet.health}/{sheet.maxHealth}</span>
                    </div>
                  </div>
                  
                  <div className="status-bar">
                    <span className="status-label">Sanidade:</span>
                    <div className="bar-container">
                      <div 
                        className="bar-fill sanity"
                        style={{ width: `${(sheet.sanity / sheet.maxSanity) * 100}%` }}
                      ></div>
                      <span className="bar-text">{sheet.sanity}/{sheet.maxSanity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sheet-footer">
                <span className="last-modified">
                  Modificado: {new Date(sheet.lastModified).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-sheets">
            <div className="no-sheets-icon">📝</div>
            <h3>Nenhuma ficha encontrada</h3>
            <p>Crie sua primeira ficha para começar sua jornada!</p>
            <button className="btn" onClick={onCreateSheet}>
              Criar Primeira Ficha
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetList;