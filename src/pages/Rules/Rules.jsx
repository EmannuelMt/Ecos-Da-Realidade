// pages/Rules/Rules.jsx
import './Rules.css';

const Rules = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Regras do Sistema</h1>
        <div className="page-content">
          <div className="placeholder-content">
            <div className="placeholder-icon">📘</div>
            <h2>Regras de Ordem Paranormal RPG</h2>
            <p>Em breve você encontrará aqui todo o conteúdo de regras do sistema.</p>
            <div className="rules-sections">
              <div className="rules-category">
                <h3>Atributos e Testes</h3>
                <p>Explicação dos atributos básicos e como funcionam as rolagens e testes.</p>
              </div>
              <div className="rules-category">
                <h3>Perícias</h3>
                <p>Lista detalhada de cada perícia e como utilizá-las.</p>
              </div>
              <div className="rules-category">
                <h3>Combate</h3>
                <p>Regras de ataque, defesa, iniciativa e exemplos práticos.</p>
              </div>
              <div className="rules-category">
                <h3>Sanidade e Paranormal</h3>
                <p>Mecânicas de sanidade e regras de uso de rituais e entidades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;