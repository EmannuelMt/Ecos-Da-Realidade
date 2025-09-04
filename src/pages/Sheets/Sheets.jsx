// pages/Sheets/Sheets.jsx
import { useState } from 'react';
import SheetList from '../../components/Sheet/SheetList';
import SheetDetail from '../../components/Sheet/SheetDetail';
import SheetCreation from '../../components/Sheet/SheetCreation';
;
import './Sheets.css';

const Sheets = () => {
  const [view, setView] = useState('list'); // 'list', 'detail', 'create'
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [sheets, setSheets] = useState([
    {
      id: 1,
      name: 'Arthur Cervero',
      player: 'Cellbit',
      class: 'Combatente',
      origin: 'Vítima',
      level: 5,
      attributes: {
        força: 3,
        agilidade: 2,
        intelecto: 1,
        vigor: 3,
        presença: 2
      },
      health: 35,
      maxHealth: 35,
      sanity: 40,
      maxSanity: 40,
      isPublic: true,
      lastModified: '2024-03-20'
    },
    {
      id: 2,
      name: 'Elizabeth Webber',
      player: 'Mike',
      class: 'Ocultista',
      origin: 'Acadêmico',
      level: 4,
      attributes: {
        força: 1,
        agilidade: 2,
        intelecto: 4,
        vigor: 2,
        presença: 2
      },
      health: 25,
      maxHealth: 25,
      sanity: 45,
      maxSanity: 45,
      isPublic: false,
      lastModified: '2024-03-18'
    },
    {
      id: 3,
      name: 'Carvalho Oliveira',
      player: 'Felps',
      class: 'Especialista',
      origin: 'Desgarrado',
      level: 3,
      attributes: {
        força: 2,
        agilidade: 3,
        intelecto: 3,
        vigor: 2,
        presença: 1
      },
      health: 30,
      maxHealth: 30,
      sanity: 35,
      maxSanity: 35,
      isPublic: true,
      lastModified: '2024-03-15'
    }
  ]);

  const handleSheetSelect = (sheet) => {
    setSelectedSheet(sheet);
    setView('detail');
  };

  const handleBackToList = () => {
    setSelectedSheet(null);
    setView('list');
  };

  const handleCreateSheet = (newSheet) => {
    const sheet = {
      ...newSheet,
      id: Math.max(...sheets.map(s => s.id)) + 1,
      level: 1,
      health: newSheet.maxHealth,
      sanity: newSheet.maxSanity,
      isPublic: false,
      lastModified: new Date().toISOString().split('T')[0],
      inventory: [],
      skills: [],
      rituals: []
    };
    setSheets([...sheets, sheet]);
    setView('detail');
    setSelectedSheet(sheet);
  };

  const handleUpdateSheet = (updatedSheet) => {
    const updatedSheets = sheets.map(sheet => 
      sheet.id === updatedSheet.id ? updatedSheet : sheet
    );
    setSheets(updatedSheets);
    setSelectedSheet(updatedSheet);
  };

  const handleDeleteSheet = (sheetId) => {
    setSheets(sheets.filter(sheet => sheet.id !== sheetId));
    setView('list');
    setSelectedSheet(null);
  };

  return (
    <div className="sheets-page">
      <div className="container">
        <div className="sheets-header">
          <h1 className="page-title">Fichas de Personagem</h1>
          <p>Crie e gerencie seus personagens no universo de Ordem Paranormal</p>
          <div className="view-controls">
            <button 
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              Minhas Fichas
            </button>
            <button 
              className="btn create-btn"
              onClick={() => setView('create')}
            >
              ➕ Nova Ficha
            </button>
          </div>
        </div>

        <div className="sheets-content">
          {view === 'list' && (
            <SheetList 
              sheets={sheets} 
              onSheetSelect={handleSheetSelect}
              onCreateSheet={() => setView('create')}
            />
          )}
          
          {view === 'detail' && selectedSheet && (
            <SheetDetail 
              sheet={selectedSheet}
              onBack={handleBackToList}
              onUpdateSheet={handleUpdateSheet}
              onDeleteSheet={handleDeleteSheet}
            />
          )}
          
          {view === 'create' && (
            <SheetCreation 
              onCreate={handleCreateSheet}
              onCancel={handleBackToList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sheets;