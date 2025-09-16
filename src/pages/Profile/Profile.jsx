// src/pages/Profile/Profile.jsx
import { useState, useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.jsx';
import ProfileStats from '../../components/ProfileStats/ProfileStats.jsx';
import ProfileCharacters from '../../components/ProfileCharacters/ProfileCharacters.jsx';
import ProfileCampaigns from '../../components/ProfileCampaigns/ProfileCampaigns.jsx';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!currentUser) {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="not-logged-in">
            <h2>🔒 Acesso Restrito</h2>
            <p>Você precisa estar logado para acessar seu perfil.</p>
            <a href="/login" className="btn btn-primary">
              Fazer Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <ProfileHeader />
        
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Visão Geral
          </button>
          <button 
            className={`tab-btn ${activeTab === 'characters' ? 'active' : ''}`}
            onClick={() => setActiveTab('characters')}
          >
            🎭 Personagens
          </button>
          <button 
            className={`tab-btn ${activeTab === 'campaigns' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            🌌 Campanhas
          </button>
        </div>

        <div className="profile-content">
          {activeTab === 'overview' && <ProfileStats />}
          {activeTab === 'characters' && <ProfileCharacters />}
          {activeTab === 'campaigns' && <ProfileCampaigns />}
        </div>
      </div>
    </div>
  );
};

export default Profile;