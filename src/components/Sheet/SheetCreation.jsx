// src/pages/Sheets/components/SheetCreation/SheetCreation.jsx
import { useState } from 'react';
import './SheetCreation.css';

const SheetCreation = ({ onCreate, onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    player: '',
    class: '',
    origin: '',
    attributes: {
      força: 1,
      agilidade: 1,
      intelecto: 1,
      vigor: 1,
      presença: 1
    },
    points: 4
  });

  const classes = [
    { value: 'Combatente', label: '⚔️ Combatente', description: 'Foco em combate físico e resistência' },
    { value: 'Especialista', label: '🕵️ Especialista', description: 'Habilidades técnicas e conhecimento' },
    { value: 'Ocultista', label: '🔮 Ocultista', description: 'Rituais e poderes paranormais' },
    { value: 'Mundano', label: '👤 Mundano', description: 'Versátil com potencial narrativo' }
  ];

  const origins = [
    { value: 'Vítima', label: '😨 Vítima', description: 'Sobreviveu a um evento traumático' },
    { value: 'Acadêmico', label: '🎓 Acadêmico', description: 'Estudioso do paranormal' },
    { value: 'Desgarrado', label: '🏙️ Desgarrado', description: 'Vida nas ruas, recursos limitados' },
    { value: 'Lutador', label: '🥊 Lutador', description: 'Experiência em combate' },
    { value: 'Artista', label: '🎨 Artista', description: 'Expressão criativa e percepção' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAttributeChange = (attribute, value) => {
    const newValue = parseInt(value);
    const oldValue = formData.attributes[attribute];
    const difference = newValue - oldValue;

    if (newValue >= 1 && newValue <= 5 && formData.points - difference >= 0) {
      setFormData(prev => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          [attribute]: newValue
        },
        points: prev.points - difference
      }));
    }
  };

  const calculateMaxHealth = () => {
    const vigor = formData.attributes.vigor;
    const baseHealth = formData.class === 'Combatente' ? 20 : 12;
    return baseHealth + (vigor * 5);
  };

  const calculateMaxSanity = () => {
    const presence = formData.attributes.presença;
    const baseSanity = formData.class === 'Ocultista' ? 30 : 20;
    return baseSanity + (presence * 5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.player || !formData.class || !formData.origin) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (formData.points > 0) {
      alert('Você ainda tem pontos para distribuir!');
      return;
    }

    const newSheet = {
      name: formData.name,
      player: formData.player,
      class: formData.class,
      origin: formData.origin,
      attributes: formData.attributes,
      maxHealth: calculateMaxHealth(),
      maxSanity: calculateMaxSanity(),
      health: calculateMaxHealth(),
      sanity: calculateMaxSanity(),
      level: 1
    };

    onCreate(newSheet);
  };

  const renderStep1 = () => (
    <div className="creation-step">
      <h3>👤 Identificação Básica</h3>
      <div className="form-group">
        <label>Nome do Personagem *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ex: Arthur Cervero"
          required
        />
      </div>

      <div className="form-group">
        <label>Nome do Jogador *</label>
        <input
          type="text"
          name="player"
          value={formData.player}
          onChange={handleChange}
          placeholder="Seu nome"
          required
        />
      </div>

      <div className="form-group">
        <label>Classe *</label>
        <div className="option-grid">
          {classes.map(cls => (
            <div
              key={cls.value}
              className={`option-card ${formData.class === cls.value ? 'selected' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, class: cls.value }))}
            >
              <span className="option-icon">{cls.label.split(' ')[0]}</span>
              <span className="option-name">{cls.value}</span>
              <span className="option-desc">{cls.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="creation-step">
      <h3>🎯 Origem</h3>
      <div className="form-group">
        <label>Escolha sua Origem *</label>
        <div className="option-grid">
          {origins.map(origin => (
            <div
              key={origin.value}
              className={`option-card ${formData.origin === origin.value ? 'selected' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, origin: origin.value }))}
            >
              <span className="option-icon">{origin.label.split(' ')[0]}</span>
              <span className="option-name">{origin.value}</span>
              <span className="option-desc">{origin.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="creation-step">
      <h3>⚡ Atributos</h3>
      <div className="points-counter">
        <span>Pontos disponíveis: </span>
        <span className={`points ${formData.points === 0 ? 'zero' : ''}`}>
          {formData.points}
        </span>
      </div>

      <div className="attributes-grid">
        {Object.entries(formData.attributes).map(([attribute, value]) => (
          <div key={attribute} className="attribute-control">
            <label className="attribute-label">
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
            </label>
            <div className="attribute-value-control">
              <button
                className="attr-btn"
                onClick={() => handleAttributeChange(attribute, value - 1)}
                disabled={value <= 1}
              >
                -
              </button>
              <span className="attribute-value">{value}</span>
              <button
                className="attr-btn"
                onClick={() => handleAttributeChange(attribute, value + 1)}
                disabled={value >= 5 || formData.points <= 0}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="attribute-preview">
        <h4>Previsão de Valores:</h4>
        <p>Vida: {calculateMaxHealth()} | Sanidade: {calculateMaxSanity()}</p>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="creation-step">
      <h3>✅ Resumo da Ficha</h3>
      <div className="summary-card">
        <div className="summary-section">
          <h4>Informações Básicas</h4>
          <p><strong>Nome:</strong> {formData.name}</p>
          <p><strong>Jogador:</strong> {formData.player}</p>
          <p><strong>Classe:</strong> {formData.class}</p>
          <p><strong>Origem:</strong> {formData.origin}</p>
        </div>

        <div className="summary-section">
          <h4>Atributos</h4>
          {Object.entries(formData.attributes).map(([attr, value]) => (
            <p key={attr}><strong>{attr}:</strong> {value}</p>
          ))}
        </div>

        <div className="summary-section">
          <h4>Valores Calculados</h4>
          <p><strong>Vida Máxima:</strong> {calculateMaxHealth()}</p>
          <p><strong>Sanidade Máxima:</strong> {calculateMaxSanity()}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="sheet-creation">
      <button className="back-btn" onClick={onCancel}>
        ← Voltar para a lista
      </button>

      <div className="creation-card">
        <h2>📝 Criação de Personagem</h2>
        
        <div className="creation-progress">
          <div className="progress-steps">
            {[1, 2, 3, 4].map(stepNum => (
              <div
                key={stepNum}
                className={`progress-step ${step === stepNum ? 'active' : ''} ${step > stepNum ? 'completed' : ''}`}
              >
                <span className="step-number">{stepNum}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="creation-form">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}

          <div className="form-navigation">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn btn-secondary"
              >
                ← Anterior
              </button>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn"
                disabled={
                  (step === 1 && (!formData.name || !formData.player || !formData.class)) ||
                  (step === 2 && !formData.origin)
                }
              >
                Próximo →
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                🎭 Criar Personagem
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SheetCreation;