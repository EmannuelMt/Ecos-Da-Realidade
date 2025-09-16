// src/components/Auth/ForgotPassword.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaDiceD20, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
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
      return setError('Por favor, informe seu email');
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
          <h2>Recuperar Senha</h2>
          <p>Informe seu email para redefinir sua senha</p>
        </div>

        {error && (
          <div className="auth-error">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {message && (
          <div className="auth-success">
            <FaCheckCircle className="success-icon" />
            {message}
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
                disabled={loading || !!message}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading || !!message}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Enviando...
              </span>
            ) : message ? (
              'Email Enviado'
            ) : (
              'Enviar Email de Recuperação'
            )}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login" className="auth-link back-link">
            <FaArrowLeft /> Voltar para o login
          </Link>
          <span className="auth-signup">
            Não tem uma conta? <Link to="/signup" className="auth-link">Cadastre-se</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;