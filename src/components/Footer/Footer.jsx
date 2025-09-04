import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌌 Ecos da Realidade</h3>
            <p>Uma plataforma criada pela comunidade de Ordem Paranual para gerenciar campanhas, fichas e enigmas.</p>
            <Link to="/sobre" className="footer-link">Sobre/História</Link>
          </div>
          
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/campanhas" className="footer-link">Campanhas</Link>
            <Link to="/enigmas" className="footer-link">Enigmas</Link>
            <Link to="/fichas" className="footer-link">Fichas</Link>
            <Link to="/regras" className="footer-link">Regras</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
          </div>
          
          <div className="footer-section">
            <h4>Comunidade</h4>
            <a href="https://discord.gg" className="footer-link" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://github.com" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          
          <div className="footer-section">
            <h4>Contato e Suporte</h4>
            <a href="mailto:suporte@ecosdarealidade.com" className="footer-link">suporte@ecosdarealidade.com</a>
            <Link to="/contato" className="footer-link">Formulário de Contato</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Ecos da Realidade © 2025 – Projeto feito por fãs, inspirado em Ordem Paranormal (Cellbit). Sem fins comerciais.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;