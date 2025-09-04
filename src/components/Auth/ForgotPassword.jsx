// src/components/Auth/ForgotPassword.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return setError('Por favor, digite seu email');
    }

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Email de recuperação enviado! Verifique sua caixa de entrada.');
    } catch (error) {
      console.error('Erro ao recuperar senha:', error);
      
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Email inválido');
          break;
        case 'auth/user-not-found':
          setError('Usuário não encontrado');
          break;
        default:
          setError('Falha ao enviar email de recuperação');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>🔓 Recuperar Senha</h2>
          <p>Digite seu email para receber instruções de recuperação</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {message && <div className="auth-message">{message}</div>}

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

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Email de Recuperação'}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;