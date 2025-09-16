// src/components/Auth/Signup.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaDiceD20 } from 'react-icons/fa';
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.displayName || !formData.email || !formData.password || !formData.confirmPassword) {
      return setError('Por favor, preencha todos os campos');
    }

    if (formData.password !== formData.confirmPassword) {
      return setError('As senhas não coincidem');
    }

    if (formData.password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres');
    }

    try {
      setError('');
      setLoading(true);
      await signup(formData.email, formData.password, formData.displayName);
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
        case 'auth/weak-password':
          setError('Senha muito fraca');
          break;
        case 'auth/operation-not-allowed':
          setError('Operação não permitida');
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
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Cadastro com Google cancelado');
      } else {
        setError('Falha ao fazer cadastro com Google');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          <h2>Comece sua Jornada</h2>
          <p>Crie sua conta e entre no universo de Ecos da Realidade</p>
        </div>

        {error && (
          <div className="auth-error">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="displayName" className="form-label">
              <FaUser className="input-icon" />
              Nome de Aventureiro
            </label>
            <div className="input-container">
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Seu nome heróico"
                required
                className="form-input"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="input-icon" />
              Email
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Crie uma senha poderosa (mín. 6 caracteres)"
                required
                className="form-input"
                disabled={loading}
                minLength={6}
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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="input-icon" />
              Confirmar Senha
            </label>
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme sua senha"
                required
                className="form-input"
                disabled={loading}
                minLength={6}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="password-toggle"
                disabled={loading}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
                Criando Conta...
              </span>
            ) : (
              'Iniciar Jornada'
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
          Cadastrar com Google
        </button>

        <div className="auth-links">
          <span className="auth-login">
            Já tem uma conta? <Link to="/login" className="auth-link">Entre aqui</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;