// pages/Campaigns/components/InvestigationBoard.jsx
import { useState } from 'react';
import './InvestigationBoard.css';

const InvestigationBoard = ({ campaign }) => {
  const [clues, setClues] = useState([
    { id: 1, title: 'Diário Antigo', content: 'Páginas faltando no diário do professor', foundBy: 'Cellbit', date: '2024-03-10' },
    { id: 2, title: 'Símbolo Estranho', content: 'Símbolo recorrente nas cenas do crime', foundBy: 'Felps', date: '2024-03-15' },
    { id: 3, title: 'Gravação Suspeita', content: 'Áudio com vozes não identificadas', foundBy: 'Mike', date: '2024-03-20' }
  ]);

  const [timeline, setTimeline] = useState([
    { id: 1, event: 'Início da Investigação', date: '2024-03-01', description: 'O grupo foi contratado para investigar os desaparecimentos' },
    { id: 2, event: 'Primeira Pista', date: '2024-03-10', description: 'Descoberto o diário do professor' },
    { id: 3, event: 'Encontro com a Entidade', date: '2024-03-15', description: 'Primeiro contato com a entidade paranormal' }
  ]);

  const [newClue, setNewClue] = useState({ title: '', content: '' });
  const [newEvent, setNewEvent] = useState({ event: '', description: '' });

  const addClue = () => {
    if (newClue.title && newClue.content) {
      const clue = {
        id: clues.length + 1,
        title: newClue.title,
        content: newClue.content,
        foundBy: 'Mestre',
        date: new Date().toISOString().split('T')[0]
      };
      setClues([...clues, clue]);
      setNewClue({ title: '', content: '' });
    }
  };

  const addEvent = () => {
    if (newEvent.event) {
      const event = {
        id: timeline.length + 1,
        event: newEvent.event,
        description: newEvent.description,
        date: new Date().toISOString().split('T')[0]
      };
      setTimeline([...timeline, event]);
      setNewEvent({ event: '', description: '' });
    }
  };

  return (
    <div className="investigation-board">
      <h2>🔍 Quadro Investigativo</h2>

      <div className="investigation-sections">
        {/* Timeline de Eventos */}
        <section className="investigation-section">
          <h3>⏰ Timeline de Eventos</h3>
          <div className="timeline">
            {timeline.map(event => (
              <div key={event.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{event.event}</h4>
                  <span className="timeline-date">{event.date}</span>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="add-event">
            <h4>Adicionar Evento</h4>
            <input
              type="text"
              placeholder="Título do evento"
              value={newEvent.event}
              onChange={(e) => setNewEvent({...newEvent, event: e.target.value})}
            />
            <textarea
              placeholder="Descrição do evento"
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              rows="2"
            />
            <button onClick={addEvent} className="btn">
              Adicionar Evento
            </button>
          </div>
        </section>

        {/* Pistas Coletadas */}
        <section className="investigation-section">
          <h3>🔎 Pistas Coletadas</h3>
          <div className="clues-grid">
            {clues.map(clue => (
              <div key={clue.id} className="clue-card">
                <h4>{clue.title}</h4>
                <p>{clue.content}</p>
                <div className="clue-meta">
                  <span>Encontrado por: {clue.foundBy}</span>
                  <span>Data: {clue.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="add-clue">
            <h4>Adicionar Pista</h4>
            <input
              type="text"
              placeholder="Título da pista"
              value={newClue.title}
              onChange={(e) => setNewClue({...newClue, title: e.target.value})}
            />
            <textarea
              placeholder="Conteúdo da pista"
              value={newClue.content}
              onChange={(e) => setNewClue({...newClue, content: e.target.value})}
              rows="2"
            />
            <button onClick={addClue} className="btn">
              Adicionar Pista
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestigationBoard;