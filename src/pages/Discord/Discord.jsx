// pages/Discord/Discord.jsx
import './Discord.css';

const Discord = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Comunidade Discord</h1>
        <div className="page-content">
          <div className="discord-content">
            <div className="discord-header">
              <div className="discord-icon">🎮</div>
              <h2>Junte-se à nossa comunidade no Discord!</h2>
              <p>Conecte-se com outros jogadores, participe de mesas e compartilhe experiências.</p>
              <a href="https://discord.gg" className="btn discord-btn" target="_blank" rel="noopener noreferrer">
                Entrar no Discord
              </a>
            </div>
            
            <div className="discord-features">
              <h3>O que você encontra no servidor:</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>🗣️ Mesas de RPG</h4>
                  <p>Participe de mesas abertas e encontre grupos para jogar.</p>
                </div>
                <div className="feature-card">
                  <h4>🧩 Discussão de Enigmas</h4>
                  <p>Compartilhe e discuta enigmas com outros investigadores.</p>
                </div>
                <div className="feature-card">
                  <h4>🛠️ Suporte Técnico</h4>
                  <p>Obtenha ajuda com a plataforma e compartilhe feedback.</p>
                </div>
                <div className="feature-card">
                  <h4>🎭 Criação de Conteúdo</h4>
                  <p>Compartilhe suas campanhas, fichas e histórias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;