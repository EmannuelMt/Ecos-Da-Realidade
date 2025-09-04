// src/pages/Sheets/components/SheetDetail/SheetDetail.jsx
import { useState } from 'react';
import './SheetDetail.css';

const SheetDetail = ({ sheet, onBack, onUpdateSheet, onDeleteSheet }) => {
  const [activeTab, setActiveTab] = useState('attributes');

  const tabs = [
    { id: 'attributes', label: 'Atributos', icon: '⚡' },
    { id: 'skills', label: 'Perícias', icon: '🎯' },
    { id: 'inventory', label: 'Inventário', icon: '🎒' },
    { id: 'bio', label: 'Biografia', icon: '📖' }
  ];

  const handleExport = (format) => {
    const dataStr = JSON.stringify(sheet, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', `${sheet.name.toLowerCase().replace(/\s+/g, '-')}.${format}`);
    link.click();
  };

  const togglePrivacy = () => {
    onUpdateSheet({ ...sheet, isPublic: !sheet.isPublic });
  };

  return (
    <div className="sheet-detail">
      <div className="sheet-header">
        <button className="back-btn" onClick={onBack}>
          ← Voltar para a lista
        </button>
        
        <div className="sheet-actions">
          <button 
            className={`privacy-btn ${sheet.isPublic ? 'public' : 'private'}`}
            onClick={togglePrivacy}
          >
            {sheet.isPublic ? '🌐 Pública' : '🔒 Privada'}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleExport('json')}
          >
            💾 Exportar JSON
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => {
              if (window.confirm(`Tem certeza que deseja excluir ${sheet.name}?`)) {
                onDeleteSheet(sheet.id);
              }
            }}
          >
            🗑️ Excluir
          </button>
        </div>
      </div>

      <div className="sheet-hero">
        <div className="sheet-identity">
          <h1>{sheet.name}</h1>
          <div className="sheet-class-origin">
            <span className="class-badge">{sheet.class}</span>
            <span className="origin-badge">{sheet.origin}</span>
          </div>
          <p className="sheet-player">Jogador: {sheet.player}</p>
        </div>

        <div className="sheet-level">
          <div className="level-circle">
            <span className="level-number">Nv.{sheet.level}</span>
          </div>
        </div>
      </div>

      <div className="status-overview">
        <div className="status-item">
          <span className="status-label">Vida</span>
          <div className="status-value">
            {sheet.health}/{sheet.maxHealth}
          </div>
          <div className="status-bar">
            <div 
              className="status-fill health"
              style={{ width: `${(sheet.health / sheet.maxHealth) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="status-item">
          <span className="status-label">Sanidade</span>
          <div className="status-value">
            {sheet.sanity}/{sheet.maxSanity}
          </div>
          <div className="status-bar">
            <div 
              className="status-fill sanity"
              style={{ width: `${(sheet.sanity / sheet.maxSanity) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="status-item">
          <span className="status-label">PE</span>
          <div className="status-value">
            {sheet.level * 2}/{(sheet.level + 1) * 2}
          </div>
          <div className="status-bar">
            <div 
              className="status-fill pe"
              style={{ width: `${(sheet.level * 2 / ((sheet.level + 1) * 2)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="sheet-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="sheet-content">
        {activeTab === 'attributes' && (
          <div className="tab-content">
            <h3>⚡ Atributos</h3>
            <div className="attributes-grid">
              {Object.entries(sheet.attributes).map(([attribute, value]) => (
                <div key={attribute} className="attribute-card">
                  <div className="attribute-name">
                    {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                  </div>
                  <div className="attribute-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'skills' && (
          <div className="tab-content">
            <h3>🎯 Perícias</h3>
            <p>Funcionalidade de perícias em desenvolvimento...</p>
          </div>
        )}
        
        {activeTab === 'inventory' && (
          <div className="tab-content">
            <h3>🎒 Inventário</h3>
            <p>Funcionalidade de inventário em desenvolvimento...</p>
          </div>
        )}
        
        {activeTab === 'bio' && (
          <div className="tab-content">
            <h3>📖 Biografia</h3>
            {sheet.appearance && (
              <div className="bio-section">
                <h4>👤 Aparência</h4>
                <p>{sheet.appearance}</p>
              </div>
            )}
            {sheet.personality && (
              <div className="bio-section">
                <h4>💫 Personalidade</h4>
                <p>{sheet.personality}</p>
              </div>
            )}
            {sheet.objective && (
              <div className="bio-section">
                <h4>🎯 Objetivo</h4>
                <p>{sheet.objective}</p>
              </div>
            )}
            {sheet.background && (
              <div className="bio-section">
                <h4>📜 História</h4>
                <p>{sheet.background}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetDetail;