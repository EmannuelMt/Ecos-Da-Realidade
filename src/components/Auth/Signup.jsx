import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaGoogle, 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
  FaMagic
} from 'react-icons/fa';
import { GiDiceTwentyFacesTwenty, GiScrollUnfurled } from 'react-icons/gi';
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
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isFocused, setIsFocused] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({ level: 0, text: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const displayNameRef = useRef(null);

  // Efeito para focar no primeiro campo ao carregar
  useEffect(() => {
    displayNameRef.current?.focus();
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
      
      let text = '';
      let color = '#e74c3c';
      
      if (level <= 2) {
        text = 'Fraca';
        color = '#e74c3c';
      } else if (level <= 4) {
        text = 'Média';
        color = '#f39c12';
      } else {
        text = 'Forte';
        color = '#2ecc71';
      }
      
      setPasswordStrength({ level, text, color });
    } else {
      setPasswordStrength({ level: 0, text: '', color: 'transparent' });
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
    
    if (!formData.displayName.trim()) {
      errors.displayName = 'Nome de aventureiro é obrigatório';
    } else if (formData.displayName.length < 2) {
      errors.displayName = 'Nome muito curto';
    } else if (formData.displayName.length > 30) {
      errors.displayName = 'Nome muito longo (máx. 30 caracteres)';
    }
    
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
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!termsAccepted) {
      errors.terms = 'Você deve aceitar os termos e condições';
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
      
      await signup(formData.email, formData.password, formData.displayName);
      setSuccess('Conta criada com sucesso! Redirecionando...');
      
      // Redirecionar após breve delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      
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
          setError('Senha muito fraca. Use uma combinação mais forte');
          break;
        case 'auth/operation-not-allowed':
          setError('Operação não permitida');
          break;
        case 'auth/network-request-failed':
          setError('Erro de conexão. Verifique sua internet.');
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
      setSuccess('');
      setLoading(true);
      
      await loginWithGoogle();
      setSuccess('Conta criada com Google! Redirecionando...');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      
    } catch (error) {
      console.error('Erro no cadastro com Google:', error);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Cadastro com Google cancelado');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup bloqueado. Permita popups para este site.');
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

  const toggleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
    if (fieldErrors.terms) {
      setFieldErrors(prev => ({ ...prev, terms: '' }));
    }
  };

  const getPasswordMatchStatus = () => {
    if (!formData.confirmPassword) return null;
    
    if (formData.password === formData.confirmPassword) {
      return { valid: true, message: 'Senhas coincidem' };
    } else {
      return { valid: false, message: 'Senhas não coincidem' };
    }
  };

  const passwordMatch = getPasswordMatchStatus();

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
          <h1 className="auth-title">Comece sua Jornada</h1>
          <p className="auth-subtitle">Crie sua conta e entre no universo de RPG épico</p>
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
            <label htmlFor="displayName" className="form-label">
              <FaUser className="input-icon" aria-hidden="true" />
              Nome de Aventureiro
            </label>
            <div className={`input-container ${isFocused.displayName ? 'input-focused' : ''} ${fieldErrors.displayName ? 'input-error' : ''}`}>
              <input
                ref={displayNameRef}
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                onFocus={() => handleFocus('displayName')}
                onBlur={() => handleBlur('displayName')}
                placeholder="Seu nome heróico"
                required
                className="form-input"
                disabled={loading}
                aria-describedby={fieldErrors.displayName ? "displayName-error" : undefined}
                maxLength={30}
              />
            </div>
            {fieldErrors.displayName && (
              <span id="displayName-error" className="field-error">
                <FaExclamationTriangle aria-hidden="true" />
                {fieldErrors.displayName}
              </span>
            )}
            <div className="character-count">
              {formData.displayName.length}/30 caracteres
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="input-icon" aria-hidden="true" />
              Email
            </label>
            <div className={`input-container ${isFocused.email ? 'input-focused' : ''} ${fieldErrors.email ? 'input-error' : ''}`}>
              <input
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
            <label htmlFor="password" className="form-label">
              <FaLock className="input-icon" aria-hidden="true" />
              Senha
            </label>
            <div className={`input-container ${isFocused.password ? 'input-focused' : ''} ${fieldErrors.password ? 'input-error' : ''}`}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                placeholder="Crie uma senha poderosa (mín. 6 caracteres)"
                required
                className="form-input"
                disabled={loading}
                aria-describedby={fieldErrors.password ? "password-error" : undefined}
                minLength={6}
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
                      width: `${(passwordStrength.level / 5) * 100}%`,
                      backgroundColor: passwordStrength.color
                    }}
                  ></div>
                </div>
                <span className="strength-text" style={{ color: passwordStrength.color }}>
                  {passwordStrength.text}
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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="input-icon" aria-hidden="true" />
              Confirmar Senha
            </label>
            <div className={`input-container ${isFocused.confirmPassword ? 'input-focused' : ''} ${fieldErrors.confirmPassword ? 'input-error' : ''}`}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder="Confirme sua senha"
                required
                className="form-input"
                disabled={loading}
                aria-describedby={fieldErrors.confirmPassword ? "confirmPassword-error" : undefined}
                minLength={6}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="password-toggle"
                disabled={loading}
                aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showConfirmPassword ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
              </button>
            </div>
            
            {formData.confirmPassword && passwordMatch && (
              <div className={`password-match ${passwordMatch.valid ? 'valid' : 'invalid'}`}>
                {passwordMatch.valid ? (
                  <FaCheckCircle aria-hidden="true" />
                ) : (
                  <FaExclamationTriangle aria-hidden="true" />
                )}
                <span>{passwordMatch.message}</span>
              </div>
            )}
            
            {fieldErrors.confirmPassword && (
              <span id="confirmPassword-error" className="field-error">
                <FaExclamationTriangle aria-hidden="true" />
                {fieldErrors.confirmPassword}
              </span>
            )}
          </div>

          <div className="form-group">
            <label className="checkbox-container terms-checkbox">
              <input 
                type="checkbox" 
                id="terms" 
                checked={termsAccepted}
                onChange={toggleTermsAccepted}
              />
              <span className="checkmark"></span>
              <span className="terms-text">
                Eu concordo com os <Link to="/terms" className="terms-link">Termos de Serviço</Link> e <Link to="/privacy" className="terms-link">Política de Privacidade</Link>
              </span>
            </label>
            {fieldErrors.terms && (
              <span className="field-error">
                <FaExclamationTriangle aria-hidden="true" />
                {fieldErrors.terms}
              </span>
            )}
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
                Criando Conta...
              </span>
            ) : (
              <>
                <FaMagic aria-hidden="true" />
                Iniciar Jornada
              </>
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
          aria-busy={loading}
        >
          <FaGoogle className="google-icon" aria-hidden="true" />
          Cadastrar com Google
        </button>

        <div className="auth-links">
          <span className="auth-login">
            Já tem uma conta? <Link to="/login" className="auth-link">Entre aqui</Link>
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

export default Signup;