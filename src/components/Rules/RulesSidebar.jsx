// src/pages/Rules/components/RulesSidebar.jsx
import './RulesSidebar.css';

const RulesSidebar = ({ sections, activeSection, onSectionChange }) => {
  const getSectionIcon = (sectionId) => {
    switch (sectionId) {
      case 'introducao': return '🌌';
      case 'atributos': return '⚡';
      case 'pericias': return '🎯';
      case 'combate': return '⚔️';
      case 'sanidade': return '🧠';
      case 'downloads': return '📥';
      default: return '📖';
    }
  };

  return (
    <div className="rules-sidebar">
      <div className="sidebar-header">
        <h3>Sumário</h3>
      </div>
      
      <nav className="sidebar-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionChange(section.id)}
          >
            <span className="nav-icon">{getSectionIcon(section.id)}</span>
            <span className="nav-label">{section.title}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="quick-help">
          <h4>❓ Ajuda Rápida</h4>
          <p>Precisa de ajuda com regras específicas?</p>
          <a href="/discord" className="btn btn-secondary">
            Pergunte no Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default RulesSidebar;