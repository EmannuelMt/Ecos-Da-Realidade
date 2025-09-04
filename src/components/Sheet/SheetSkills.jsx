// pages/Sheets/components/SheetSkills.jsx
import { useState } from 'react';
import './SheetSkills.css';

const SheetSkills = ({ sheet, onUpdate }) => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Acrobacia', attribute: 'agilidade', value: 0, trained: false },
    { id: 2, name: 'Adestramento', attribute: 'presença', value: 0, trained: false },
    { id: 3, name: 'Artes', attribute: 'presença', value: 0, trained: false },
    { id: 4, name: 'Atletismo', attribute: 'força', value: 0, trained: false },
    { id: 5, name: 'Atualidades', attribute: 'intelecto', value: 0, trained: false },
    { id: 6, name: 'Ciências', attribute: 'intelecto', value: 0, trained: false },
    { id: 7, name: 'Crime', attribute: 'agilidade', value: 0, trained: false },
    { id: 8, name: 'Diplomacia', attribute: 'presença', value: 0, trained: false },
    { id: 9, name: 'Enganação', attribute: 'presença', value: 0, trained: false },
    { id: 10, name: 'Fortitude', attribute: 'vigor', value: 0, trained: false },
    { id: 11, name: 'Furtividade', attribute: 'agilidade', value: 0, trained: false },
    { id: 12, name: 'Iniciativa', attribute: 'agilidade', value: 0, trained: false },
    { id: 13, name: 'Intimidação', attribute: 'presença', value: 0, trained: false },
    { id: 14, name: 'Intuição', attribute: 'presença', value: 0, trained: false },
    { id: 15, name: 'Investigação', attribute: 'intelecto', value: 0, trained: false },
    { id: 16, name: 'Luta', attribute: 'força', value: 0, trained: false },
    { id: 17, name: 'Medicina', attribute: 'intelecto', value: 0, trained: false },
    { id: 18, name: 'Ocultismo', attribute: 'intelecto', value: 0, trained: false },
    { id: 19, name: 'Percepção', attribute: 'presença', value: 0, trained: false },
    { id: 20, name: 'Pilotagem', attribute: 'agilidade', value: 0, trained: false },
    { id: 21, name: 'Pontaria', attribute: 'agilidade', value: 0, trained: false },
    { id: 22, name: 'Profissão', attribute: 'intelecto', value: 0, trained: false },
    { id: 23, name: 'Reflexos', attribute: 'agilidade', value: 0, trained: false },
    { id: 24, name: 'Religião', attribute: 'intelecto', value: 0, trained: false },
    { id: 25, name: 'Sobrevivência', attribute: 'intelecto', value: 0, trained: false },
    { id: 26, name: 'Tática', attribute: 'intelecto', value: 0, trained: false },
    { id: 27, name: 'Tecnologia', attribute: 'intelecto', value: 0, trained: false },
    { id: 28, name: 'Vontade', attribute: 'presença', value: 0, trained: false }
  ]);

  const getAttributeModifier = (attribute) => {
    return Math.floor((sheet.attributes[attribute] * 5 - 10) / 2);
  };

  const getSkillTotal = (skill) => {
    const attrMod = getAttributeModifier(skill.attribute);
    return attrMod + skill.value + (skill.trained ? 5 : 0);
  };

  const handleSkillChange = (skillId, field, value) => {
    const updatedSkills = skills.map(skill =>
      skill.id === skillId ? { ...skill, [field]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const skillGroups = {
    'Agilidade': skills.filter(s => s.attribute === 'agilidade'),
    'Força': skills.filter(s => s.attribute === 'força'),
    'Intelecto': skills.filter(s => s.attribute === 'intelecto'),
    'Presença': skills.filter(s => s.attribute === 'presença'),
    'Vigor': skills.filter(s => s.attribute === 'vigor')
  };

  return (
    <div className="sheet-skills">
      <div className="section-header">
        <h3>🎯 Perícias</h3>
        <div className="skill-info">
          <span className="info-item">📊 Bônus de Treinamento: +5</span>
          <span className="info-item">🎯 Bônus de Nível: +{sheet.level}</span>
        </div>
      </div>

      <div className="skills-container">
        {Object.entries(skillGroups).map(([attribute, attributeSkills]) => (
          <div key={attribute} className="skill-group">
            <h4 className="skill-group-title">
              {attribute} (Mod: {getAttributeModifier(attribute.toLowerCase()) >= 0 ? '+' : ''}
              {getAttributeModifier(attribute.toLowerCase())})
            </h4>
            
            <div className="skills-grid">
              {attributeSkills.map(skill => (
                <div key={skill.id} className="skill-item">
                  <label className="skill-name">
                    <input
                      type="checkbox"
                      checked={skill.trained}
                      onChange={(e) => handleSkillChange(skill.id, 'trained', e.target.checked)}
                      className="trained-checkbox"
                    />
                    {skill.name}
                  </label>
                  
                  <div className="skill-controls">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={skill.value}
                      onChange={(e) => handleSkillChange(skill.id, 'value', parseInt(e.target.value) || 0)}
                      className="skill-value-input"
                    />
                    
                    <span className="skill-total">
                      {getSkillTotal(skill) >= 0 ? '+' : ''}{getSkillTotal(skill)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <h4>📋 Perícias Treinadas</h4>
        <div className="trained-skills-list">
          {skills.filter(s => s.trained).map(skill => (
            <span key={skill.id} className="trained-skill-badge">
              {skill.name} (+{getSkillTotal(skill)})
            </span>
          ))}
          
          {skills.filter(s => s.trained).length === 0 && (
            <p className="no-trained-skills">Nenhuma perícia treinada</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SheetSkills;