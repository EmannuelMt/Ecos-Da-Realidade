// pages/Campaigns/components/CampaignCreation.jsx
import { useState } from 'react';
import './CampaignCreation.css';

const CampaignCreation = ({ onCreate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    master: '',
    description: '',
    image: 'https://placehold.co/600x400/1a1f29/58a6ff?text=Nova+Campanha',
    status: 'ativa',
    maxPlayers: 4
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
    
    if (!formData.title || !formData.master || !formData.description) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    onCreate(formData);
  };

  return (
    <div className="campaign-creation">
      <button className="back-btn" onClick={onCancel}>
        ← Voltar para a lista
      </button>

      <div className="creation-card">
        <h2>🎭 Criar Nova Campanha</h2>
        
        <form onSubmit={handleSubmit} className="creation-form">
          <div className="form-group">
            <label>Título da Campanha *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Ordem São Paulo"
              required
            />
          </div>

          <div className="form-group">
            <label>Mestre *</label>
            <input
              type="text"
              name="master"
              value={formData.master}
              onChange={handleChange}
              placeholder="Seu nome ou apelido"
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva a campanha, seu tema principal e o que os jogadores podem esperar..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>URL da Imagem</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
            />
            <small>Imagem de capa para a campanha</small>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Status Inicial</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="ativa">Ativa</option>
                <option value="pausada">Pausada</option>
              </select>
            </div>

            <div className="form-group">
              <label>Máximo de Jogadores</label>
              <select
                name="maxPlayers"
                value={formData.maxPlayers}
                onChange={handleChange}
              >
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              🎭 Criar Campanha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignCreation;