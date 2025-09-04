// components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Seção Sobre o Projeto */}
          <div className="footer-section">
            <h3 className="footer-title">🌌 Ecos da Realidade</h3>
            <p className="footer-description">
              Uma plataforma criada pela comunidade de Ordem Paranormal para gerenciar campanhas, fichas e enigmas.
            </p>
            <Link to="/sobre" className="footer-link">
              Sobre/História
            </Link>
          </div>
          
          {/* Links Rápidos */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Links Rápidos</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/campanhas" className="footer-link">Campanhas</Link>
              <Link to="/enigmas" className="footer-link">Enigmas</Link>
              <Link to="/fichas" className="footer-link">Fichas</Link>
              <Link to="/regras" className="footer-link">Regras</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
            </div>
          </div>
          
          {/* Comunidade */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Comunidade</h4>
            <div className="footer-social">
              <a 
                href="https://discord.gg" 
                className="social-link discord" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <span className="social-icon">🎮</span>
                <span>Discord</span>
              </a>
              <a 
                href="https://github.com" 
                className="social-link github" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="social-icon">💻</span>
                <span>GitHub</span>
              </a>
              <a 
                href="https://twitter.com" 
                className="social-link twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                className="social-link instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="social-icon">📸</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Contato e Suporte */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contato e Suporte</h4>
            <div className="footer-contact">
              <a href="mailto:suporte@ecosdarealidade.com" className="footer-link">
                ✉️ suporte@ecosdarealidade.com
              </a>
              <Link to="/contato" className="footer-link">
                📋 Formulário de Contato
              </Link>
              <Link to="/faq" className="footer-link">
                ❓ Perguntas Frequentes
              </Link>
            </div>
          </div>
        </div>
        
        {/* Divisor */}
        <div className="footer-divider"></div>
        
        {/* Direitos Autorais */}
        <div className="footer-bottom">
          <p className="copyright">
            Ecos da Realidade © {currentYear} – Projeto feito por fãs, inspirado em Ordem Paranormal (Cellbit). Sem fins comerciais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;