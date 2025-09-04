// pages/Enigmas/components/Ranking.jsx
import './Ranking.css';

const Ranking = ({ ranking, onBack }) => {
  return (
    <div className="ranking">
      <button className="back-btn" onClick={onBack}>
        ← Voltar para a lista
      </button>

      <div className="ranking-card">
        <h2>Ranking de Investigadores</h2>
        <p>Os jogadores que mais resolveram enigmas paranormais</p>
        
        <div className="ranking-list">
          {ranking.map((player, index) => (
            <div key={player.id} className="ranking-item">
              <div className="rank-position">
                #{index + 1}
              </div>
              <div className="player-info">
                <div className="player-name">{player.name}</div>
                <div className="player-stats">
                  {player.solved} enigma(s) resolvido(s)
                </div>
              </div>
              <div className="player-badge">
                {index === 0 && '🥇'}
                {index === 1 && '🥈'}
                {index === 2 && '🥉'}
                {index > 2 && '⭐'}
              </div>
            </div>
          ))}
        </div>

        <div className="ranking-footer">
          <p>Participe de enigmas para subir no ranking!</p>
        </div>
      </div>
    </div>
  );
};

export default Ranking;