import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDiscord, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaHeart, 
  FaDiceD20,
  FaBook,
  FaPuzzlePiece,
  FaFileAlt,
  FaScroll,
  FaQuestionCircle,
  FaInfoCircle,
  FaRocket,
  FaShieldAlt,
  FaRegClock,
  FaUsers,
  FaStar,
  FaArrowUp,
  FaNewspaper,
  FaLightbulb,
  FaMapMarkerAlt,
  FaGamepad
} from 'react-icons/fa';
import { GiSpellBook, GiCampfire, GiCrystalBall } from 'react-icons/gi';
import { RiUserStarFill, RiTeamFill } from 'react-icons/ri';
import { SiRoll20 } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Observer para animação de entrada
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      // Simular envio - você integraria com seu serviço de email aqui
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const stats = [
  ];

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      {/* Elementos decorativos de fundo */}
      <div className="footer-background">
        <div className="footer-particle particle-1"></div>
        <div className="footer-particle particle-2"></div>
        <div className="footer-particle particle-3"></div>
        <div className="footer-particle particle-4"></div>
        <div className="footer-glow"></div>
        <div className="footer-grid"></div>
      </div>

      {/* Estatísticas em Destaque */}
      <div className="footer-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <GiCrystalBall className="newsletter-icon" />
              <h3>Fique por dentro das novidades</h3>
              <p>Receba atualizações sobre novos recursos, eventos da comunidade e dicas de RPG</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  disabled={subscribed}
                />
                <button type="submit" disabled={subscribed}>
                  {subscribed ? 'Inscrito! 🎉' : 'Inscrever'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-content">
          {/* Seção Brand/Logo */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <FaDiceD20 />
              </div>
              <div>
                <h3>Ecos da Realidade</h3>
                <span className="footer-tagline">Sua jornada começa aqui</span>
              </div>
            </div>
            <p className="footer-description">
              Plataforma completa para mestres e jogadores de Ordem Paranormal. 
              Gerencie campanhas, fichas e enigmas com ferramentas poderosas e intuitivas.
            </p>
            <div className="footer-social">
              <a href="https://discord.gg/ordemparanormal" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <FaDiscord />
                <span className="social-tooltip">Junte-se ao Discord</span>
              </a>
              <a href="https://github.com/ecosdarealidade" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
                <span className="social-tooltip">Contribua no GitHub</span>
              </a>
              <a href="https://twitter.com/ecosdarealidade" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
                <span className="social-tooltip">Siga no Twitter</span>
              </a>
              <a href="mailto:suporte@ecosdarealidade.com" className="social-link" aria-label="Email">
                <FaEnvelope />
                <span className="social-tooltip">Entre em contato</span>
              </a>
            </div>
          </div>
          
          {/* Seção Plataforma */}
          <div className="footer-section">
            <h4 className="footer-title">
              <FaGamepad className="footer-icon" />
              Plataforma
            </h4>
            <Link to="/campanhas" className="footer-link">
              <GiCampfire className="link-icon" />
              Campanhas
              <span className="link-badge">Novo</span>
            </Link>
            <Link to="/enigmas" className="footer-link">
              <FaPuzzlePiece className="link-icon" />
              Enigmas
            </Link>
            <Link to="/fichas" className="footer-link">
              <FaFileAlt className="link-icon" />
              Fichas
            </Link>
            <Link to="/regras" className="footer-link">
              <GiSpellBook className="link-icon" />
              Sistema de Regras
            </Link>
            <Link to="/mapas" className="footer-link">
              <FaMapMarkerAlt className="link-icon" />
              Mapas Interativos
            </Link>
          </div>
          
          {/* Seção Comunidade */}
<div className="footer-section">
  <h4 className="footer-title">
    <RiTeamFill className="footer-icon" />
    Comunidade
  </h4>
  <a href="https://discord.gg/ordemparanormal" className="footer-link" target="_blank" rel="noopener noreferrer">
    <FaDiscord className="link-icon" />
    Discord Oficial
  </a>
  <Link to="/eventos" className="footer-link">
    <FaRegClock className="link-icon" />
    Eventos & Workshops
  </Link>
  <Link to="/comunidade" className="footer-link">
    <FaUsers className="link-icon" />
    Encontre Grupo
  </Link>
  <Link to="/contribuir" className="footer-link"> {/* Fixed this line */}
    <FaStar className="link-icon" />
    Seja um Contribuidor
  </Link>
</div>
          {/* Seção Recursos */}
          <div className="footer-section">
            <h4 className="footer-title">
              <FaLightbulb className="footer-icon" />
              Recursos
            </h4>
            <Link to="/tutoriais" className="footer-link">
              <FaBook className="link-icon" />
              Tutoriais
            </Link>
            <Link to="/blog" className="footer-link">
              <FaNewspaper className="link-icon" />
              Blog & Artigos
            </Link>
            <Link to="/api" className="footer-link">
              <SiRoll20 className="link-icon" />
              API para Desenvolvedores
            </Link>
            <Link to="/mobile" className="footer-link">
              <FaRocket className="link-icon" />
              App Mobile
              <span className="link-badge">Em breve</span>
            </Link>
          </div>

          {/* Seção Suporte */}
          <div className="footer-section">
            <h4 className="footer-title">
              <FaShieldAlt className="footer-icon" />
              Suporte
            </h4>
            <Link to="/faq" className="footer-link">
              <FaQuestionCircle className="link-icon" />
              FAQ
            </Link>
            <Link to="/contato" className="footer-link">
              <FaEnvelope className="link-icon" />
              Contato
            </Link>
            <Link to="/status" className="footer-link">
              <FaInfoCircle className="link-icon" />
              Status do Sistema
            </Link>
            <Link to="/sugestoes" className="footer-link">
              <FaHeart className="link-icon" />
              Sugestões
            </Link>
          </div>
        </div>
        
        {/* Divisor */}
        <div className="footer-divider">
          <div className="divider-orbs">
            <span className="divider-orb"></span>
            <span className="divider-orb"></span>
            <span className="divider-orb"></span>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <div className="legal-links">
                <Link to="/privacidade">Privacidade</Link>
                <Link to="/termos">Termos de Uso</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/dmca">DMCA</Link>
                <Link to="/licenca">Licença</Link>
              </div>
              
              <p className="footer-copyright">
                © {currentYear} Ecos da Realidade. Desenvolvido Por EmannuelDev FullStack Solutions.
              </p>
              
              <p className="footer-disclaimer">
                Este é um projeto de fãs não oficial inspirado em Ordem Paranormal (Cellbit). 
                Não afiliado à Cellbit ou à RedeZero. Todos os direitos do universo de Ordem 
                Paranormal pertencem aos seus respectivos criadores.
              </p>
            </div>

            <div className="footer-badges">
              <span className="badge">
                <FaHeart /> Feito por Fãs
              </span>
              <span className="badge">
                <FaDiceD20 /> RPG Community
              </span>
              <span className="badge">
                <FaShieldAlt /> Seguro
              </span>
            </div>
          </div>
        </div>

        {/* Voltar ao topo */}
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </button>
      </div>  
    </footer>
  );
};

export default Footer;