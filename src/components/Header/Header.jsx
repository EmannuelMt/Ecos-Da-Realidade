// components/Header/Header.jsx (atualizado)
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            🌌 Ecos da Realidade
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/campanhas" className={`nav-link ${isActive('/campanhas')}`} onClick={() => setIsMenuOpen(false)}>
              Campanhas
            </Link>
            <Link to="/enigmas" className={`nav-link ${isActive('/enigmas')}`} onClick={() => setIsMenuOpen(false)}>
              Enigmas
            </Link>
            <Link to="/fichas" className={`nav-link ${isActive('/fichas')}`} onClick={() => setIsMenuOpen(false)}>
              Fichas
            </Link>
            <Link to="/regras" className={`nav-link ${isActive('/regras')}`} onClick={() => setIsMenuOpen(false)}>
              Regras
            </Link>
            <Link to="/discord" className={`nav-link ${isActive('/discord')}`} onClick={() => setIsMenuOpen(false)}>
              Discord
            </Link>
            <Link to="/faq" className={`nav-link ${isActive('/faq')}`} onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/sobre" className={`nav-link ${isActive('/sobre')}`} onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
          </nav>

          <div className="header-actions">
            {currentUser ? (
              <div className="user-menu">
                <button className="user-btn" onClick={toggleUserMenu}>
                  <span className="user-avatar">
                    {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt="Avatar" />
                    ) : (
                      currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0) || '👤'
                    )}
                  </span>
                  <span className="user-name">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <strong>{currentUser.displayName || 'Usuário'}</strong>
                      <span>{currentUser.email}</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/fichas" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                      Minhas Fichas
                    </Link>
                    <Link to="/campanhas" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                      Minhas Campanhas
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-secondary">
                  Entrar
                </Link>
                <Link to="/signup" className="btn">
                  Cadastrar
                </Link>
              </div>
            )}

            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;