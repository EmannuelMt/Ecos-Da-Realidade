// src/pages/Rules/components/RulesContent.jsx
import './RulesContent.css';

const RulesContent = ({ title, content }) => {
  return (
    <div className="rules-content">
      <div className="content-header">
        <h2>{title}</h2>
        <div className="content-actions">
          <button className="btn btn-secondary">
            📋 Copiar Seção
          </button>
          <button className="btn btn-secondary">
            🖨️ Imprimir
          </button>
        </div>
      </div>
      
      <div 
        className="content-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <div className="content-footer">
        <div className="navigation-help">
          <p>Use o menu lateral para navegar entre as seções das regras</p>
        </div>
      </div>
    </div>
  );
};

export default RulesContent;