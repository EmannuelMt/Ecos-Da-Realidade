// pages/Campaigns/components/SessionHistory.jsx
import { useState } from 'react';
import './SessionHistory.css';

const SessionHistory = ({ campaign }) => {
  const [sessions, setSessions] = useState([
    { id: 1, number: 1, date: '2024-01-20', title: 'O Primeiro Contato', summary: 'O grupo se forma e recebe a missão inicial' },
    { id: 2, number: 2, date: '2024-01-27', title: 'Investigações Iniciais', summary: 'Primeiras pistas e encontro com testemunhas' },
    { id: 3, number: 3, date: '2024-02-03', title: 'O Professor Desaparecido', summary: 'Descoberta do diário e do símbolo misterioso' }
  ]);

  const [newSession, setNewSession] = useState({ date: '', title: '', summary: '' });

  const addSession = () => {
    if (newSession.date && newSession.title) {
      const session = {
        id: sessions.length + 1,
        number: sessions.length + 1,
        date: newSession.date,
        title: newSession.title,
        summary: newSession.summary
      };
      setSessions([...sessions, session]);
      setNewSession({ date: '', title: '', summary: '' });
    }
  };

  const exportSessions = (format) => {
    // Simulação de exportação
    alert(`Exportando sessões em formato ${format.toUpperCase()}`);
  };

  return (
    <div className="session-history">
      <h2>📅 Histórico de Sessões</h2>

      <div className="session-actions">
        <button onClick={() => exportSessions('pdf')} className="btn btn-secondary">
          📄 Exportar PDF
        </button>
        <button onClick={() => exportSessions('markdown')} className="btn btn-secondary">
          📝 Exportar Markdown
        </button>
      </div>

      <div className="sessions-list">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <div className="session-header">
              <h3>Sessão #{session.number}: {session.title}</h3>
              <span className="session-date">{session.date}</span>
            </div>
            <div className="session-content">
              <p>{session.summary}</p>
            </div>
            <div className="session-actions">
              <button className="btn btn-secondary">Editar</button>
              <button className="btn">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>

      <div className="add-session">
        <h3>➕ Adicionar Nova Sessão</h3>
        <div className="session-form">
          <input
            type="date"
            value={newSession.date}
            onChange={(e) => setNewSession({...newSession, date: e.target.value})}
            placeholder="Data da sessão"
          />
          <input
            type="text"
            value={newSession.title}
            onChange={(e) => setNewSession({...newSession, title: e.target.value})}
            placeholder="Título da sessão"
          />
          <textarea
            value={newSession.summary}
            onChange={(e) => setNewSession({...newSession, summary: e.target.value})}
            placeholder="Resumo da sessão"
            rows="3"
          />
          <button onClick={addSession} className="btn">
            Adicionar Sessão
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionHistory;