// src/components/Auth/Login.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaDiceD20 } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Obter a localização de onde o usuário veio (se redirecionado)
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError('Por favor, preencha todos os campos');
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true }); // Volta para a página original
    } catch (error) {
      console.error('Erro no login:', error);
      
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Email inválido');
          break;
        case 'auth/user-disabled':
          setError('Esta conta foi desativada');
          break;
        case 'auth/user-not-found':
          setError('Usuário não encontrado');
          break;
        case 'auth/wrong-password':
          setError('Senha incorreta');
          break;
        case 'auth/too-many-requests':
          setError('Muitas tentativas. Tente novamente mais tarde.');
          break;
        default:
          setError('Falha ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Erro no login com Google:', error);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Login com Google cancelado');
      } else {
        setError('Falha ao fazer login com Google');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-particle particle-1"></div>
        <div className="auth-particle particle-2"></div>
        <div className="auth-particle particle-3"></div>
        <div className="auth-glow"></div>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <FaDiceD20 />
          </div>
          <h2>Acessar Ecos da Realidade</h2>
          <p>Entre em sua conta para continuar sua jornada</p>
        </div>

        {error && (
          <div className="auth-error">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="input-icon" />
              Email
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="form-input"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FaLock className="input-icon" />
              Senha
            </label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha secreta"
                required
                className="form-input"
                disabled={loading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
                disabled={loading}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Entrando...
              </span>
            ) : (
              'Entrar na Aventura'
            )}
          </button>
        </form>

        <div className="auth-divider">
          <span className="divider-line"></span>
          <span className="divider-text">ou continue com</span>
          <span className="divider-line"></span>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="btn btn-google auth-btn"
          disabled={loading}
        >
          <FaGoogle className="google-icon" />
          Entrar com Google
        </button>

        <div className="auth-links">
          <Link to="/forgot-password" className="auth-link">
            Esqueceu sua senha?
          </Link>
          <span className="auth-signup">
            Não tem uma conta? <Link to="/signup" className="auth-link">Comece sua jornada</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;