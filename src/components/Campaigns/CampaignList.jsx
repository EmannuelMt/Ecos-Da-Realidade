// pages/Campaigns/components/CampaignList.jsx
import { useState } from 'react';
import './CampaignList.css';

const CampaignList = ({ campaigns, onCampaignSelect, onCreateCampaign }) => {
  const [filters, setFilters] = useState({
    status: 'all',
    master: 'all',
    sortBy: 'date'
  });

  const statuses = ['all', 'ativa', 'pausada', 'finalizada'];
  const masters = ['all', ...new Set(campaigns.map(c => c.master))];
  const sortOptions = [
    { value: 'date', label: 'Data de Criação' },
    { value: 'title', label: 'Título' },
    { value: 'players', label: 'Número de Jogadores' }
  ];

  const filteredCampaigns = campaigns
    .filter(campaign => {
      return (
        (filters.status === 'all' || campaign.status === filters.status) &&
        (filters.master === 'all' || campaign.master === filters.master)
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'players':
          return b.players - a.players;
        case 'date':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  const getStatusClass = (status) => {
    switch (status) {
      case 'ativa': return 'status-active';
      case 'pausada': return 'status-paused';
      case 'finalizada': return 'status-finished';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ativa': return '🟢';
      case 'pausada': return '🟡';
      case 'finalizada': return '🔴';
      default: return '';
    }
  };

  return (
    <div className="campaign-list">
      <div className="campaign-actions">
        <button className="btn create-btn" onClick={onCreateCampaign}>
          🎭 Criar Nova Campanha
        </button>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Status:</label>
          <select 
            value={filters.status} 
            onChange={(e) => setFilters({...filters, status: e.target.value})}
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'Todos' : 
                 status === 'ativa' ? 'Ativas' :
                 status === 'pausada' ? 'Pausadas' : 'Finalizadas'}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Mestre:</label>
          <select 
            value={filters.master} 
            onChange={(e) => setFilters({...filters, master: e.target.value})}
          >
            {masters.map(master => (
              <option key={master} value={master}>
                {master === 'all' ? 'Todos' : master}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Ordenar por:</label>
          <select 
            value={filters.sortBy} 
            onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="campaigns-grid">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map(campaign => (
            <div 
              key={campaign.id} 
              className="campaign-card"
              onClick={() => onCampaignSelect(campaign)}
            >
              <div className="campaign-image">
                <img src={campaign.image} alt={campaign.title} />
                <div className={`campaign-status ${getStatusClass(campaign.status)}`}>
                  {getStatusIcon(campaign.status)} {campaign.status}
                </div>
              </div>
              
              <div className="campaign-content">
                <h3>{campaign.title}</h3>
                <p className="campaign-description">{campaign.description}</p>
                
                <div className="campaign-meta">
                  <div className="meta-item">
                    <span className="meta-label">Mestre:</span>
                    <span className="meta-value">{campaign.master}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Jogadores:</span>
                    <span className="meta-value">{campaign.players}/{campaign.maxPlayers}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Sessões:</span>
                    <span className="meta-value">{campaign.sessions}</span>
                  </div>
                  
                  <div className="meta-item">
                    <span className="meta-label">Criada em:</span>
                    <span className="meta-value">
                      {new Date(campaign.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-campaigns">
            <div className="no-campaigns-icon">🎭</div>
            <h3>Nenhuma campanha encontrada</h3>
            <p>Crie sua primeira campanha para começar a aventura!</p>
            <button className="btn" onClick={onCreateCampaign}>
              Criar Primeira Campanha
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignList;