// pages/Sheets/components/SheetBio.jsx
import { useState } from 'react';
import './SheetBio.css';

const SheetBio = ({ sheet, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    appearance: sheet.appearance || '',
    personality: sheet.personality || '',
    objective: sheet.objective || '',
    background: sheet.background || ''
  });

  const handleSave = () => {
    onUpdate(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      appearance: sheet.appearance || '',
      personality: sheet.personality || '',
      objective: sheet.objective || '',
      background: sheet.background || ''
    });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const bioSections = [
    {
      title: '👤 Aparência',
      field: 'appearance',
      value: isEditing ? editData.appearance : sheet.appearance,
      placeholder: 'Descreva a aparência física do personagem...'
    },
    {
      title: '💫 Personalidade',
      field: 'personality',
      value: isEditing ? editData.personality : sheet.personality,
      placeholder: 'Descreva a personalidade e comportamento...'
    },
    {
      title: '🎯 Objetivo',
      field: 'objective',
      value: isEditing ? editData.objective : sheet.objective,
      placeholder: 'Qual o objetivo principal do personagem?'
    },
    {
      title: '📜 História',
      field: 'background',
      value: isEditing ? editData.background : sheet.background,
      placeholder: 'História de fundo e experiências passadas...'
    }
  ];

  return (
    <div className="sheet-bio">
      <div className="section-header">
        <h3>📖 Biografia</h3>
        {!isEditing ? (
          <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>
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

      <div className="bio-sections">
        {bioSections.map(section => (
          <div key={section.field} className="bio-section">
            <h4>{section.title}</h4>
            {isEditing ? (
              <textarea
                value={section.value}
                onChange={(e) => handleChange(section.field, e.target.value)}
                placeholder={section.placeholder}
                rows={section.field === 'background' ? 6 : 3}
                className="bio-textarea"
              />
            ) : (
              <div className="bio-content">
                {section.value ? (
                  <p>{section.value}</p>
                ) : (
                  <p className="bio-placeholder">{section.placeholder}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isEditing && !bioSections.some(s => s.value) && (
        <div className="bio-empty">
          <div className="empty-icon">📝</div>
          <h4>Biografia Vazia</h4>
          <p>Adicione informações para dar vida ao seu personagem!</p>
          <button className="btn" onClick={() => setIsEditing(true)}>
            Começar a Escrever
          </button>
        </div>
      )}
    </div>
  );
};

export default SheetBio;