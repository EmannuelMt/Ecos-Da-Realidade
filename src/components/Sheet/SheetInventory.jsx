// pages/Sheets/components/SheetInventory.jsx
import { useState } from 'react';
import './SheetInventory.css';

const SheetInventory = ({ sheet, onUpdate }) => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Pistola 9mm', weight: 1, quantity: 1, description: 'Arma de fogo padrão' },
    { id: 2, name: 'Colete Balístico', weight: 3, quantity: 1, description: 'Proteção contra projéteis' },
    { id: 3, name: 'Kit de Primeiros Socorros', weight: 2, quantity: 1, description: 'Cura 2d6 de vida' },
    { id: 4, name: 'Lanterna', weight: 1, quantity: 1, description: 'Fonte de luz' },
    { id: 5, name: 'Rações', weight: 0.5, quantity: 3, description: 'Comida para viagem' }
  ]);

  const [newItem, setNewItem] = useState({ name: '', weight: 0, quantity: 1, description: '' });
  const [editingItem, setEditingItem] = useState(null);

  const maxWeight = 5 + (sheet.attributes.força * 2);
  const currentWeight = inventory.reduce((total, item) => total + (item.weight * item.quantity), 0);
  const weightPercentage = (currentWeight / maxWeight) * 100;

  const addItem = () => {
    if (newItem.name.trim()) {
      const item = {
        ...newItem,
        id: Math.max(...inventory.map(i => i.id), 0) + 1,
        weight: parseFloat(newItem.weight) || 0,
        quantity: parseInt(newItem.quantity) || 1
      };
      
      if (currentWeight + (item.weight * item.quantity) <= maxWeight) {
        setInventory([...inventory, item]);
        setNewItem({ name: '', weight: 0, quantity: 1, description: '' });
      } else {
        alert('Capacidade de carga excedida!');
      }
    }
  };

  const updateItem = (updatedItem) => {
    setInventory(inventory.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    setEditingItem(null);
  };

  const removeItem = (itemId) => {
    setInventory(inventory.filter(item => item.id !== itemId));
  };

  const getWeightStatus = () => {
    if (weightPercentage >= 100) return 'overweight';
    if (weightPercentage >= 75) return 'heavy';
    if (weightPercentage >= 50) return 'medium';
    return 'light';
  };

  return (
    <div className="sheet-inventory">
      <div className="section-header">
        <h3>🎒 Inventário</h3>
        <div className="weight-info">
          <span className={`weight-status ${getWeightStatus()}`}>
            Peso: {currentWeight.toFixed(1)}/{maxWeight} kg
          </span>
        </div>
      </div>

      <div className="weight-meter">
        <div 
          className={`weight-bar ${getWeightStatus()}`}
          style={{ width: `${Math.min(100, weightPercentage)}%` }}
        ></div>
      </div>

      <div className="inventory-controls">
        <div className="add-item-form">
          <h4>➕ Adicionar Item</h4>
          <div className="item-form-grid">
            <input
              type="text"
              placeholder="Nome do item"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            />
            <input
              type="number"
              placeholder="Peso"
              step="0.1"
              value={newItem.weight}
              onChange={(e) => setNewItem({...newItem, weight: parseFloat(e.target.value) || 0})}
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: parseInt(e.target.value) || 1})}
            />
            <button onClick={addItem} className="btn">
              Adicionar
            </button>
          </div>
        </div>
      </div>

      <div className="inventory-list">
        <h4>Itens Carregados</h4>
        
        {inventory.length > 0 ? (
          <div className="items-grid">
            {inventory.map(item => (
              <div key={item.id} className="inventory-item">
                <div className="item-header">
                  <span className="item-name">{item.name}</span>
                  <span className="item-weight">{item.weight * item.quantity} kg</span>
                </div>
                
                <div className="item-details">
                  <span className="item-quantity">Qtd: {item.quantity}</span>
                  {item.description && (
                    <p className="item-description">{item.description}</p>
                  )}
                </div>

                <div className="item-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setEditingItem(editingItem?.id === item.id ? null : item)}
                  >
                    ✏️ Editar
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️ Remover
                  </button>
                </div>

                {editingItem?.id === item.id && (
                  <div className="item-edit-form">
                    <input
                      type="text"
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={editingItem.weight}
                      onChange={(e) => setEditingItem({...editingItem, weight: parseFloat(e.target.value) || 0})}
                    />
                    <input
                      type="number"
                      value={editingItem.quantity}
                      onChange={(e) => setEditingItem({...editingItem, quantity: parseInt(e.target.value) || 1})}
                    />
                    <button 
                      className="btn btn-success"
                      onClick={() => updateItem(editingItem)}
                    >
                      💾 Salvar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-items">Nenhum item no inventário</p>
        )}
      </div>

      <div className="inventory-summary">
        <h4>📊 Resumo de Carga</h4>
        <div className="load-status">
          <div className={`load-level ${getWeightStatus()}`}>
            {getWeightStatus() === 'overweight' && '🚫 Sobrecarregado'}
            {getWeightStatus() === 'heavy' && '⚠️ Pesado'}
            {getWeightStatus() === 'medium' && '✅ Moderado'}
            {getWeightStatus() === 'light' && '👍 Leve'}
          </div>
          <p>Capacidade máxima: {maxWeight} kg (5 + Força × 2)</p>
        </div>
      </div>
    </div>
  );
};

export default SheetInventory;