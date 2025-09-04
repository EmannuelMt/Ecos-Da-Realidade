// src/components/Auth/Signup.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      return setError('Por favor, preencha todos os campos');
    }

    if (password !== confirmPassword) {
      return setError('As senhas não coincidem');
    }

    if (password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, displayName);
      navigate('/');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Este email já está em uso');
          break;
        case 'auth/invalid-email':
          setError('Email inválido');
          break;
        case 'auth/operation-not-allowed':
          setError('Operação não permitida');
          break;
        case 'auth/weak-password':
          setError('Senha muito fraca');
          break;
        default:
          setError('Falha ao criar conta. Tente novamente.');
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
          <h2>🎭 Juntar-se à Realidade</h2>
          <p>Crie sua conta para começar sua jornada paranormal</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="displayName">Nome de Usuário (Opcional)</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Como quer ser chamado?"
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Digite a senha novamente"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
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
          Cadastrar com Google
        </button>

        <div className="auth-links">
          <span>
            Já tem uma conta? <Link to="/login">Entre aqui</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;