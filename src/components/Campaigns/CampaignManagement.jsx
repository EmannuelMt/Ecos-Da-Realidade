// pages/Campaigns/components/CampaignManagement.jsx
import { useState } from 'react';
import './CampaignManagement.css';

const CampaignManagement = ({ campaign, onUpdate }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Cellbit', character: 'Arthur Cervero', canEdit: true },
    { id: 2, name: 'Felps', character: 'Carvalho Oliveira', canEdit: true },
    { id: 3, name: 'Mike', character: 'Elizabeth Webber', canEdit: false },
    { id: 4, name: 'Bagi', character: 'Bagi Torreto', canEdit: true }
  ]);

  const [newPlayer, setNewPlayer] = useState('');

  const handleAddPlayer = () => {
    if (newPlayer.trim() && players.length < campaign.maxPlayers) {
      const newPlayerObj = {
        id: players.length + 1,
        name: newPlayer.trim(),
        character: '',
        canEdit: false
      };
      setPlayers([...players, newPlayerObj]);
      setNewPlayer('');
      onUpdate({ players: campaign.players + 1 });
    }
  };

  const handleRemovePlayer = (playerId) => {
    setPlayers(players.filter(player => player.id !== playerId));
    onUpdate({ players: campaign.players - 1 });
  };

  const toggleEditPermission = (playerId) => {
    setPlayers(players.map(player =>
      player.id === playerId 
        ? { ...player, canEdit: !player.canEdit }
        : player
    ));
  };

  return (
    <div className="campaign-management">
      <h2>⚙️ Gerenciamento da Campanha</h2>

      <div className="management-sections">
        {/* Configurações Gerais */}
        <section className="management-section">
          <h3>📝 Configurações Gerais</h3>
          <div className="settings-grid">
            <div className="setting">
              <label>Título da Campanha</label>
              <input
                type="text"
                value={campaign.title}
                onChange={(e) => onUpdate({ title: e.target.value })}
              />
            </div>
            <div className="setting">
              <label>Descrição</label>
              <textarea
                value={campaign.description}
                onChange={(e) => onUpdate({ description: e.target.value })}
                rows="3"
              />
            </div>
            <div className="setting">
              <label>Status</label>
              <select
                value={campaign.status}
                onChange={(e) => onUpdate({ status: e.target.value })}
              >
                <option value="ativa">Ativa</option>
                <option value="pausada">Pausada</option>
                <option value="finalizada">Finalizada</option>
              </select>
            </div>
            <div className="setting">
              <label>URL da Imagem</label>
              <input
                type="url"
                value={campaign.image}
                onChange={(e) => onUpdate({ image: e.target.value })}
              />
            </div>
          </div>
        </section>

        {/* Gerenciamento de Jogadores */}
        <section className="management-section">
          <h3>👥 Gerenciamento de Jogadores</h3>
          <div className="players-management">
            <div className="add-player">
              <input
                type="text"
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                placeholder="Nome do jogador"
                disabled={players.length >= campaign.maxPlayers}
              />
              <button 
                onClick={handleAddPlayer}
                disabled={!newPlayer.trim() || players.length >= campaign.maxPlayers}
                className="btn"
              >
                Adicionar
              </button>
            </div>

            <div className="players-list">
              {players.map(player => (
                <div key={player.id} className="player-item">
                  <div className="player-info">
                    <span className="player-name">{player.name}</span>
                    {player.character && (
                      <span className="player-character">como {player.character}</span>
                    )}
                  </div>
                  <div className="player-actions">
                    <button
                      className={`permission-btn ${player.canEdit ? 'active' : ''}`}
                      onClick={() => toggleEditPermission(player.id)}
                      title={player.canEdit ? 'Pode editar ficha' : 'Não pode editar ficha'}
                    >
                      {player.canEdit ? '✏️' : '📋'}
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemovePlayer(player.id)}
                      title="Remover jogador"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="player-count">
              {players.length} de {campaign.maxPlayers} jogadores
            </div>
          </div>
        </section>

        {/* Importação de Fichas */}
        <section className="management-section">
          <h3>📋 Importação de Fichas</h3>
          <div className="import-section">
            <p>Importe fichas do Grimório para sua campanha</p>
            <button className="btn btn-secondary">
              🔍 Procurar no Grimório
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampaignManagement;