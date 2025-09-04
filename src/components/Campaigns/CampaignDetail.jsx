// pages/Campaigns/components/CampaignDetail.jsx
import { useState } from 'react';
import CampaignManagement from './CampaignManagement';
import InvestigationBoard from './InvestigationBoard';
import SessionHistory from './SessionHistory';
import './CampaignDetail.css';

const CampaignDetail = ({ campaign, onBack, onUpdateCampaign }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: '📊' },
    { id: 'management', label: 'Gerenciamento', icon: '⚙️' },
    { id: 'investigation', label: 'Quadro Investigativo', icon: '🔍' },
    { id: 'sessions', label: 'Histórico de Sessões', icon: '📅' },
    { id: 'resources', label: 'Recursos', icon: '🎵' }
  ];

  const handleUpdate = (updatedData) => {
    onUpdateCampaign({ ...campaign, ...updatedData });
  };

  return (
    <div className="campaign-detail">
      <button className="back-btn" onClick={onBack}>
        ← Voltar para a lista
      </button>

      <div className="campaign-header">
        <div className="campaign-hero">
          <img src={campaign.image} alt={campaign.title} className="campaign-hero-image" />
          <div className="campaign-hero-overlay">
            <h1>{campaign.title}</h1>
            <p className="campaign-master">Mestrada por {campaign.master}</p>
            <div className={`campaign-status-badge ${campaign.status}`}>
              {campaign.status === 'ativa' ? '🟢 Ativa' : 
               campaign.status === 'pausada' ? '🟡 Pausada' : '🔴 Finalizada'}
            </div>
          </div>
        </div>

        <div className="campaign-tabs">
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
      </div>

      <div className="campaign-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>📋 Descrição</h3>
                <p>{campaign.description}</p>
              </div>

              <div className="overview-card">
                <h3>👥 Jogadores</h3>
                <div className="players-list">
                  <div className="player-count">
                    {campaign.players} de {campaign.maxPlayers} jogadores
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(campaign.players / campaign.maxPlayers) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="overview-card">
                <h3>📊 Estatísticas</h3>
                <div className="stats-grid">
                  <div className="stat">
                    <span className="stat-number">{campaign.sessions}</span>
                    <span className="stat-label">Sessões</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{campaign.players}</span>
                    <span className="stat-label">Jogadores</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">
                      {new Date(campaign.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="stat-label">Iniciada em</span>
                  </div>
                </div>
              </div>

              <div className="overview-card">
                <h3>🎯 Próxima Sessão</h3>
                <div className="next-session">
                  <p>Nenhuma sessão agendada</p>
                  <button className="btn btn-secondary">
                    Agendar Sessão
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'management' && (
          <CampaignManagement 
            campaign={campaign}
            onUpdate={handleUpdate}
          />
        )}

        {activeTab === 'investigation' && (
          <InvestigationBoard 
            campaign={campaign}
          />
        )}

        {activeTab === 'sessions' && (
          <SessionHistory 
            campaign={campaign}
          />
        )}

        {activeTab === 'resources' && (
          <div className="tab-content">
            <h2>🎵 Recursos da Campanha</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>🎵 Música Ambiente</h3>
                <p>Playlist para suas sessões</p>
                <button className="btn btn-secondary">
                  Configurar Playlist
                </button>
              </div>

              <div className="resource-card">
                <h3>🗺️ Mapas</h3>
                <p>Mapas e locais da campanha</p>
                <button className="btn btn-secondary">
                  Gerenciar Mapas
                </button>
              </div>

              <div className="resource-card">
                <h3>📅 Lembretes</h3>
                <p>Datas de sessão e avisos</p>
                <button className="btn btn-secondary">
                  Configurar Lembretes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignDetail;