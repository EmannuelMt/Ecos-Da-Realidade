// pages/Sheets/components/SheetAttributes.jsx
import { useState } from 'react';
import './SheetAttributes.css';

const SheetAttributes = ({ sheet, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [tempAttributes, setTempAttributes] = useState(sheet.attributes);
  const [tempHealth, setTempHealth] = useState(sheet.health);
  const [tempSanity, setTempSanity] = useState(sheet.sanity);

  const handleSave = () => {
    onUpdate({
      attributes: tempAttributes,
      health: tempHealth,
      sanity: tempSanity
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setTempAttributes(sheet.attributes);
    setTempHealth(sheet.health);
    setTempSanity(sheet.sanity);
    setEditing(false);
  };

  const handleAttributeChange = (attribute, value) => {
    const newValue = Math.max(1, Math.min(5, parseInt(value) || 1));
    setTempAttributes(prev => ({
      ...prev,
      [attribute]: newValue
    }));
  };

  const handleHealthChange = (value) => {
    const newValue = Math.max(0, Math.min(sheet.maxHealth, parseInt(value) || 0));
    setTempHealth(newValue);
  };

  const handleSanityChange = (value) => {
    const newValue = Math.max(0, Math.min(sheet.maxSanity, parseInt(value) || 0));
    setTempSanity(newValue);
  };

  const getAttributeModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const getAttributeColor = (value) => {
    if (value >= 4) return 'attribute-high';
    if (value >= 3) return 'attribute-medium';
    if (value >= 2) return 'attribute-low';
    return 'attribute-very-low';
  };

  return (
    <div className="sheet-attributes">
      <div className="section-header">
        <h3>⚡ Atributos</h3>
        {!editing ? (
          <button className="btn btn-secondary" onClick={() => setEditing(true)}>
            ✏️ Editar
          </button>
        ) : (
          <div className="edit-actions">
            <button className="btn btn-success" onClick={handleSave}>
              💾 Salvar
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              ❌ Cancelar
            </button>
          </div>
        )}
      </div>

      <div className="attributes-grid">
        {Object.entries(editing ? tempAttributes : sheet.attributes).map(([attribute, value]) => (
          <div key={attribute} className="attribute-card">
            <div className="attribute-header">
              <span className="attribute-name">
                {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
              </span>
              <span className="attribute-modifier">
                {getAttributeModifier(value * 5) >= 0 ? '+' : ''}
                {getAttributeModifier(value * 5)}
              </span>
            </div>
            
            <div className="attribute-value-display">
              {editing ? (
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={value}
                  onChange={(e) => handleAttributeChange(attribute, e.target.value)}
                  className={`attribute-input ${getAttributeColor(value)}`}
                />
              ) : (
                <span className={`attribute-value ${getAttributeColor(value)}`}>
                  {value}
                </span>
              )}
            </div>

            <div className="attribute-bar">
              <div 
                className="attribute-bar-fill"
                style={{ width: `${(value / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="status-section">
        <div className="status-card">
          <h4>❤️ Vida</h4>
          <div className="status-control">
            {editing ? (
              <input
                type="number"
                min="0"
                max={sheet.maxHealth}
                value={tempHealth}
                onChange={(e) => handleHealthChange(e.target.value)}
                className="status-input"
              />
            ) : (
              <span className="status-value">{sheet.health}</span>
            )}
            <span className="status-max">/ {sheet.maxHealth}</span>
          </div>
          <div className="status-bar">
            <div 
              className="status-bar-fill health"
              style={{ width: `${(sheet.health / sheet.maxHealth) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="status-card">
          <h4>🧠 Sanidade</h4>
          <div className="status-control">
            {editing ? (
              <input
                type="number"
                min="0"
                max={sheet.maxSanity}
                value={tempSanity}
                onChange={(e) => handleSanityChange(e.target.value)}
                className="status-input"
              />
            ) : (
              <span className="status-value">{sheet.sanity}</span>
            )}
            <span className="status-max">/ {sheet.maxSanity}</span>
          </div>
          <div className="status-bar">
            <div 
              className="status-bar-fill sanity"
              style={{ width: `${(sheet.sanity / sheet.maxSanity) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="status-card">
          <h4>⚡ Pontos de Esforço</h4>
          <div className="status-control">
            <span className="status-value">{sheet.level * 2}</span>
            <span className="status-max">/ {(sheet.level + 1) * 2}</span>
          </div>
          <div className="status-bar">
            <div 
              className="status-bar-fill pe"
              style={{ width: `${(sheet.level * 2 / ((sheet.level + 1) * 2)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetAttributes;