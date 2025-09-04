// src/components/Auth/Login.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError('Por favor, preencha todos os campos');
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
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
      navigate('/');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      setError('Falha ao fazer login com Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>🌌 Acessar Ecos da Realidade</h2>
          <p>Entre em sua conta para continuar sua jornada</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="auth-divider">
          <span>ou</span>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="btn btn-google auth-btn"
          disabled={loading}
        >
          <span className="google-icon">🔍</span>
          Entrar com Google
        </button>

        <div className="auth-links">
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <span>
            Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;