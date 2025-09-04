// pages/Enigmas/components/EnigmaCreation.jsx
import { useState } from 'react';
import './EnigmaCreation.css';

const EnigmaCreation = ({ onCreate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    answer: '',
    difficulty: 'Médio',
    category: 'Paranormal',
    maxAttempts: 3
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.answer) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    onCreate(formData);
  };

  return (
    <div className="enigma-creation">
      <button className="back-btn" onClick={onCancel}>
        ← Voltar para a lista
      </button>

      <div className="creation-card">
        <h2>Criar Novo Enigma</h2>
        
        <form onSubmit={handleSubmit} className="creation-form">
          <div className="form-group">
            <label>Título *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: O Enigma do Espelho"
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva o enigma de forma clara e intrigante..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Resposta Correta *</label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="A resposta que os jogadores devem descobrir"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Dificuldade</label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              >
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
              </select>
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Paranormal">Paranormal</option>
                <option value="Onírico">Onírico</option>
                <option value="Oculto">Oculto</option>
                <option value="Investigation">Investigação</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tentativas Máximas</label>
              <select
                name="maxAttempts"
                value={formData.maxAttempts}
                onChange={handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Criar Enigma
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnigmaCreation;