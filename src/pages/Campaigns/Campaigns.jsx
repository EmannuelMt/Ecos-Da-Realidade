// pages/Campaigns/Campaigns.jsx
import { useState } from 'react';
import CampaignList from '../../components/Campaigns/CampaignList';
import CampaignDetail from '../../components/Campaigns/CampaignDetail';
import CampaignCreation from '../../components/Campaigns/CampaignCreation';
import './Campaigns.css';

const Campaigns = () => {
  const [view, setView] = useState('list'); // 'list', 'detail', 'create'
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: 'Ordem São Paulo',
      master: 'Cellbit',
      description: 'Uma campanha urbana envolvendo misteriosos casos paranormais na cidade de São Paulo.',
      image: 'https://placehold.co/600x400/1a1f29/58a6ff?text=Ordem+São+Paulo',
      status: 'ativa',
      players: 5,
      maxPlayers: 6,
      sessions: 12,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Crônicas do Eclipse',
      master: 'Rakin',
      description: 'Uma jornada épica através de reinos sombrios afetados por um eclipse eterno.',
      image: 'https://placehold.co/600x400/1a1f29/58a6ff?text=Crônicas+do+Eclipse',
      status: 'ativa',
      players: 4,
      maxPlayers: 5,
      sessions: 8,
      createdAt: '2024-02-10'
    },
    {
      id: 3,
      title: 'Segredos da Floresta',
      master: 'Felps',
      description: 'Exploração de uma floresta amaldiçoada com criaturas e mistérios ancestrais.',
      image: 'https://placehold.co/600x400/1a1f29/58a6ff?text=Segredos+da+Floresta',
      status: 'pausada',
      players: 3,
      maxPlayers: 4,
      sessions: 5,
      createdAt: '2024-01-28'
    },
    {
      id: 4,
      title: 'Legado dos Ossos',
      master: 'Bagi',
      description: 'Investigação de ruínas antigas e desvendamento de segredos familiares sombrios.',
      image: 'https://placehold.co/600x400/1a1f29/58a6ff?text=Legado+dos+Ossos',
      status: 'finalizada',
      players: 4,
      maxPlayers: 4,
      sessions: 20,
      createdAt: '2023-11-05'
    }
  ]);

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
    setView('detail');
  };

  const handleBackToList = () => {
    setSelectedCampaign(null);
    setView('list');
  };

  const handleCreateCampaign = (newCampaign) => {
    const campaign = {
      ...newCampaign,
      id: Math.max(...campaigns.map(c => c.id)) + 1,
      status: 'ativa',
      players: 1, // O mestre conta como jogador
      sessions: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCampaigns([...campaigns, campaign]);
    setView('list');
  };

  const handleUpdateCampaign = (updatedCampaign) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    ));
    setSelectedCampaign(updatedCampaign);
  };

  return (
    <div className="campaigns-page">
      <div className="container">
        <div className="campaigns-header">
          <h1 className="page-title">Campanhas & Spin-offs</h1>
          <p>Gerencie suas aventuras no universo de Ordem Paranormal</p>
          <div className="view-controls">
            <button 
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              Lista de Campanhas
            </button>
            <button 
              className="btn create-btn"
              onClick={() => setView('create')}
            >
              🎭 Criar Nova Campanha
            </button>
          </div>
        </div>

        <div className="campaigns-content">
          {view === 'list' && (
            <CampaignList 
              campaigns={campaigns} 
              onCampaignSelect={handleCampaignSelect}
              onCreateCampaign={() => setView('create')}
            />
          )}
          
          {view === 'detail' && selectedCampaign && (
            <CampaignDetail 
              campaign={selectedCampaign}
              onBack={handleBackToList}
              onUpdateCampaign={handleUpdateCampaign}
            />
          )}
          
          {view === 'create' && (
            <CampaignCreation 
              onCreate={handleCreateCampaign}
              onCancel={handleBackToList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;