import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FaGoogle, 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaUserPlus,
  FaShieldAlt
} from 'react-icons/fa';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import './Auth.css';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isFocused, setIsFocused] = useState({});
  const [securityLevel, setSecurityLevel] = useState(0);
  
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Obter a localização de onde o usuário veio (se redirecionado)
  const from = location.state?.from?.pathname || '/dashboard';

  // Efeito para focar no email ao carregar
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Efeito para verificar força da senha
  useEffect(() => {
    if (formData.password.length > 0) {
      const hasUpperCase = /[A-Z]/.test(formData.password);
      const hasLowerCase = /[a-z]/.test(formData.password);
      const hasNumbers = /\d/.test(formData.password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
      
      let level = 0;
      if (formData.password.length >= 8) level++;
      if (hasUpperCase) level++;
      if (hasLowerCase) level++;
      if (hasNumbers) level++;
      if (hasSpecialChar) level++;
      
      setSecurityLevel(level);
    } else {
      setSecurityLevel(0);
    }
  }, [formData.password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      errors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      errors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      
      // Simular delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await login(formData.email, formData.password);
      setSuccess('Login realizado com sucesso!');
      
      // Redirecionar após breve delay
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
      
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
        case 'auth/network-request-failed':
          setError('Erro de conexão. Verifique sua internet.');
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
      setSuccess('');
      setLoading(true);
      
      await loginWithGoogle();
      setSuccess('Login com Google realizado!');
      
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
      
    } catch (error) {
      console.error('Erro no login com Google:', error);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Login com Google cancelado');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup bloqueado. Permita popups para este site.');
      } else {
        setError('Falha ao fazer login com Google');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setFormData({
      email: 'demo@ecosdarealidade.com',
      password: 'Demo123!'
    });
    
    setTimeout(() => {
      handleSubmit(new Event('submit'));
    }, 500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getSecurityColor = () => {
    if (securityLevel === 0) return 'transparent';
    if (securityLevel <= 2) return '#e74c3c';
    if (securityLevel <= 4) return '#f39c12';
    return '#2ecc71';
  };

  const getSecurityText = () => {
    if (securityLevel === 0) return '';
    if (securityLevel <= 2) return 'Fraca';
    if (securityLevel <= 4) return 'Média';
    return 'Forte';
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-particle particle-1"></div>
        <div className="auth-particle particle-2"></div>
        <div className="auth-particle particle-3"></div>
        <div className="auth-particle particle-4"></div>
        <div className="auth-glow glow-1"></div>
        <div className="auth-glow glow-2"></div>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-container">
              <GiDiceTwentyFacesTwenty className="logo-icon" />
              <span className="logo-text">Ecos da Realidade</span>
            </div>
          </div>
          <h1 className="auth-title">Bem-vindo de Volta</h1>
          <p className="auth-subtitle">Entre em sua conta para continuar sua jornada épica</p>
        </div>

        {error && (
          <div className="auth-message auth-error" role="alert">
            <FaExclamationTriangle className="message-icon" aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-message auth-success" role="status">
            <FaCheckCircle className="message-icon" aria-hidden="true" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="input-icon" aria-hidden="true" />
              Email
            </label>
            <div className={`input-container ${isFocused.email ? 'input-focused' : ''} ${fieldErrors.email ? 'input-error' : ''}`}>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="seu@email.com"
                required
                className="form-input"
                disabled={loading}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
            </div>
            {fieldErrors.email && (
              <span id="email-error" className="field-error">
                <FaExclamationTriangle aria-hidden="true" />
                {fieldErrors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password" className="form-label">
                <FaLock className="input-icon" aria-hidden="true" />
                Senha
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Esqueceu a senha?
              </Link>
            </div>
            <div className={`input-container ${isFocused.password ? 'input-focused' : ''} ${fieldErrors.password ? 'input-error' : ''}`}>
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                placeholder="Sua senha secreta"
                required
                className="form-input"
                disabled={loading}
                aria-describedby={fieldErrors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
                disabled={loading}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
              </button>
            </div>
            
            {formData.password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div 
                    className="strength-fill" 
                    style={{ 
                      width: `${(securityLevel / 5) * 100}%`,
                      backgroundColor: getSecurityColor()
                    }}
                  ></div>
                </div>
                <span className="strength-text" style={{ color: getSecurityColor() }}>
                  {getSecurityText()}
                </span>
              </div>
            )}
            
            {fieldErrors.password && (
              <span id="password-error" className="field-error">
                <FaExclamationTriangle aria-hidden="true" />
                {fieldErrors.password}
              </span>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" id="remember" />
              <span className="checkmark"></span>
              Lembrar-me
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary auth-btn"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner" aria-hidden="true"></span>
                Entrando...
              </span>
            ) : (
              <>
                <FaShieldAlt aria-hidden="true" />
                Entrar na Aventura
              </>
            )}
          </button>
        </form>

        <div className="auth-divider">
          <span className="divider-line"></span>
          <span className="divider-text">ou continue com</span>
          <span className="divider-line"></span>
        </div>

        <div className="social-buttons">
          <button 
            onClick={handleGoogleSignIn}
            className="btn btn-google"
            disabled={loading}
            aria-busy={loading}
          >
            <FaGoogle className="social-icon" aria-hidden="true" />
            Google
          </button>
          
          <button 
            onClick={handleDemoLogin}
            className="btn btn-demo"
            disabled={loading}
            aria-busy={loading}
          >
            <GiDiceTwentyFacesTwenty className="social-icon" aria-hidden="true" />
            Demo
          </button>
        </div>

        <div className="auth-links">
          <span className="auth-signup">
            Não tem uma conta? 
            <Link to="/signup" className="auth-link accent">
              <FaUserPlus aria-hidden="true" />
              Comece sua jornada
            </Link>
          </span>
        </div>
      </div>

      <div className="auth-footer">
        <p>&copy; 2023 Ecos da Realidade. Todos os direitos reservados.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacidade</Link>
          <span>•</span>
          <Link to="/terms">Termos</Link>
          <span>•</span>
          <Link to="/support">Suporte</Link>
        </div>
      </div>

      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Login;