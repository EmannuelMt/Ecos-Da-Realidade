// components/UI/Button/Button.jsx
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;