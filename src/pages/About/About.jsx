// pages/About/About.jsx
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Sobre o Ecos da Realidade</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>🌌 Nossa História</h2>
            <p>
              O Ecos da Realidade nasceu da paixão da comunidade por Ordem Paranormal RPG. 
              Inspirado por ferramentas como Roll20, mas com o objetivo de criar uma experiência 
              100% adaptada para a jogabilidade e o clima único do universo de Ordem Paranormal.
            </p>
            <p>
              Desenvolvido por fãs para fãs, este projeto busca centralizar todas as ferramentas 
              necessárias para mestrar e jogar campanhas, resolver enigmas desafiadores e gerenciar 
              fichas de personagem de forma intuitiva e imersiva.
            </p>
          </section>
          
          <section className="about-section">
            <h2>🎯 Nossa Missão</h2>
            <p>
              Criar a melhor experiência possível para jogadores e mestres de Ordem Paranormal RPG,
              oferecendo ferramentas intuitivas, recursos exclusivos e uma comunidade acolhedora
              para todos os amantes do universo paranormal.
            </p>
          </section>
          
          <section className="about-section">
            <h2>⚙️ Tecnologias Utilizadas</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>Frontend</h3>
                <p>React + Vite, JSX, CSS Puro, Framer Motion, React Icons</p>
              </div>
              <div className="tech-item">
                <h3>Backend</h3>
                <p>Node.js, Express, Socket.IO</p>
              </div>
              <div className="tech-item">
                <h3>Banco de Dados</h3>
                <p>MongoDB</p>
              </div>
              <div className="tech-item">
                <h3>Autenticação</h3>
                <p>Firebase Auth</p>
              </div>
              <div className="tech-item">
                <h3>Deploy</h3>
                <p>Vercel/Netlify (Frontend), Heroku/Railway (Backend)</p>
              </div>
              <div className="tech-item">
                <h3>Controle de Versão</h3>
                <p>GitHub</p>
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <h2>📜 Aviso Legal</h2>
            <p>
              Ecos da Realidade é um projeto de fãs e não está oficialmente associado à Cellbit ou 
              à Ordem Paranormal. Todo o conteúdo oficial de Ordem Paranormal RPG é propriedade de 
              seus respectivos criadores.
            </p>
            <p>
              Este projeto não tem fins comerciais e foi criado por amor à comunidade e ao universo 
              de Ordem Paranormal. Caso representantes oficiais desejem que este projeto seja 
              descontinuado, entraremos em contato imediatamente.
            </p>
          </section>
          
          <section className="about-section">
            <h2>👥 Contribuições</h2>
            <p>
              O Ecos da Realidade é um projeto open-source e aceita contribuições da comunidade. 
              Se você é desenvolvedor, designer ou tem ideias para o projeto, junte-se a nós no GitHub!
            </p>
            <div className="contribution-links">
              <a 
                href="https://github.com" 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                💻 GitHub do Projeto
              </a>
              <a 
                href="https://discord.gg" 
                className="btn btn-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                🎮 Discord da Comunidade
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;