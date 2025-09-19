// components/Header/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FaUser, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes, 
  FaCog, 
  FaBook,
  FaPuzzlePiece,
  FaFileAlt,
  FaScroll,
  FaDiscord,
  FaQuestionCircle,
  FaInfoCircle,
  FaHome,
  FaCrown,
  FaDiceD20,
  FaMagic
} from 'react-icons/fa';
import { GiSpellBook, GiCampfire } from 'react-icons/gi';
import { RiGhostLine } from 'react-icons/ri';
import './Header.css';

// Componente de Partícula
const FloatingParticle = ({ particle }) => (
  <div
    className="floating-particle"
    style={{
      top: `${particle.top}%`,
      left: `${particle.left}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`
    }}
  ></div>
);

// Componente de Logo
const Logo = ({ onClick }) => (
  <Link to="/" className="logo" onClick={onClick}>
    <div className="logo-icon">
      <FaDiceD20 />
    </div>
    <div className="logo-text">
      <span className="logo-title">Ecos da Realidade</span>
      <span className="logo-subtitle">RPG Platform</span>
    </div>
  </Link>
);

// Componente de Link de Navegação
const NavLink = ({ to, icon, text, badge, isActive, onClick }) => (
  <Link 
    to={to} 
    className={`nav-link ${isActive ? 'active' : ''}`} 
    onClick={onClick}
  >
    <span className="nav-icon">{icon}</span>
    <span className="nav-text">{text}</span>
    {badge && <span className="badge">{badge}</span>}
    <span className="nav-glow"></span>
  </Link>
);

// Componente de Botão de Usuário
const UserButton = ({ user, isOpen, onClick }) => (
  <button 
    className={`user-btn ${isOpen ? 'active' : ''}`}
    onClick={onClick}
    aria-label="Menu do usuário"
  >
    <span className="user-avatar">
      {user.photoURL ? (
        <img src={user.photoURL} alt="Avatar" />
      ) : (
        <div className="avatar-placeholder">
          {user.displayName?.charAt(0) || user.email?.charAt(0) || <FaUser />}
        </div>
      )}
    </span>
    <span className="user-info">
      <span className="user-name">
        {user.displayName || user.email?.split('@')[0]}
      </span>
      <span className="user-level">Nível 15</span>
    </span>
    <span className="user-arrow">
      <FaMagic />
    </span>
  </button>
);

// Componente de Dropdown do Usuário
const UserDropdown = ({ user, onClose, onLogout }) => (
  <div className="user-dropdown">
    <div className="dropdown-header">
      <div className="user-avatar-dropdown">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Avatar" />
        ) : (
          <div className="avatar-placeholder-large">
            {user.displayName?.charAt(0) || user.email?.charAt(0) || <FaUser />}
          </div>
        )}
      </div>
      <div className="user-details">
        <strong>{user.displayName || 'Usuário'}</strong>
        <span>{user.email}</span>
        <div className="user-stats">
          <span>⭐ 125 XP</span>
          <span>🏆 8 Conquistas</span>
        </div>
      </div>
    </div>
    
    <div className="dropdown-divider"></div>
    
    <Link to="/perfil" className="dropdown-item" onClick={onClose}>
      <FaUser className="dropdown-icon" />
      <span>Meu Perfil</span>
    </Link>
    
    <Link to="/fichas" className="dropdown-item" onClick={onClose}>
      <FaFileAlt className="dropdown-icon" />
      <span>Minhas Fichas</span>
      <span className="item-badge">3</span>
    </Link>
    
    <Link to="/campanhas" className="dropdown-item" onClick={onClose}>
      <FaBook className="dropdown-icon" />
      <span>Minhas Campanhas</span>
      <span className="item-badge">2</span>
    </Link>

    <div className="dropdown-divider"></div>

    <Link to="/configuracoes" className="dropdown-item" onClick={onClose}>
      <FaCog className="dropdown-icon" />
      <span>Configurações</span>
    </Link>
    
    <button className="dropdown-item logout-btn" onClick={onLogout}>
      <FaSignOutAlt className="dropdown-icon" />
      <span>Sair da Mesa</span>
    </button>
  </div>
);

// Componente de Botões de Autenticação
const AuthButtons = () => (
  <div className="auth-buttons">
    <Link to="/login" className="btn btn-outline">
      <FaUser />
      <span>Entrar</span>
    </Link>
    <Link to="/signup" className="btn btn-primary">
      <FaMagic />
      <span>Juntar-se</span>
    </Link>
  </div>
);

// Componente Principal do Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const userMenuRef = useRef(null);

  // Configuração das partículas
  useEffect(() => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      closeAllMenus();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const getNavIcon = (path) => {
    const icons = {
      '/': <FaHome />,
      '/campanhas': <GiCampfire />,
      '/enigmas': <FaPuzzlePiece />,
      '/fichas': <FaFileAlt />,     
      '/discord': <FaDiscord />,
      '/sobre': <FaInfoCircle />
    };
    return icons[path] || <RiGhostLine />;
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/campanhas', text: 'Campanhas' },
    { to: '/enigmas', text: 'Enigmas', badge: 'Novo' },
    { to: '/fichas', text: 'Fichas' },
  ];

  const navLinksSecondary = [
    { to: '/discord', text: 'Discord' },
    { to: '/sobre', text: 'Sobre' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Elementos de fundo */}
      <div className="header-background">
        {particles.map(particle => (
          <FloatingParticle key={particle.id} particle={particle} />
        ))}
        <div className="header-glow"></div>
      </div>

      <div className="container">
        <div className="header-content">
          <Logo onClick={closeAllMenus} />

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-content">
              {navLinks.map(({ to, text, badge }) => (
                <NavLink
                  key={to}
                  to={to}
                  icon={getNavIcon(to)}
                  text={text}
                  badge={badge}
                  isActive={isActive(to)}
                  onClick={closeAllMenus}
                />
              ))}
            </div>

            <div className="nav-divider"></div>

            <div className="nav-content">
              {navLinksSecondary.map(({ to, text }) => (
                <NavLink
                  key={to}
                  to={to}
                  icon={getNavIcon(to)}
                  text={text}
                  isActive={isActive(to)}
                  onClick={closeAllMenus}
                />
              ))}
            </div>
          </nav>

          <div className="header-actions">
            {currentUser ? (
              <div className="user-menu" ref={userMenuRef}>
                <UserButton 
                  user={currentUser} 
                  isOpen={isUserMenuOpen} 
                  onClick={toggleUserMenu} 
                />
                {isUserMenuOpen && (
                  <UserDropdown 
                    user={currentUser} 
                    onClose={closeAllMenus} 
                    onLogout={handleLogout} 
                  />
                )}
              </div>
            ) : (
              <AuthButtons />
            )}

            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay para mobile */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeAllMenus}></div>
      )}
    </header>
  );
};

export default Header;