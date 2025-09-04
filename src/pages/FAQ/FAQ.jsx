// pages/FAQ/FAQ.jsx
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Perguntas Frequentes</h1>
        <div className="page-content">
          <div className="faq-content">
            <div className="faq-intro">
              <p>Encontre respostas para as dúvidas mais comuns sobre o Ecos da Realidade.</p>
            </div>
            
            <div className="faq-categories">
              <div className="faq-category">
                <h2>Criação de Ficha</h2>
                <div className="faq-item">
                  <h3>Como distribuir pontos de atributo?</h3>
                  <p>Todos os atributos começam em 1, e você recebe 4 pontos adicionais para distribuir como desejar.</p>
                </div>
                <div className="faq-item">
                  <h3>Posso mudar de classe depois?</h3>
                  <p>Não é possível mudar de classe após a criação do personagem, a menos que o mestre permita.</p>
                </div>
              </div>
              
              <div className="faq-category">
                <h2>Campanhas</h2>
                <div className="faq-item">
                  <h3>Como entrar em uma campanha?</h3>
                  <p>Você pode ser convidado por um mestre ou procurar por campanhas públicas na página de Campanhas.</p>
                </div>
                <div className="faq-item">
                  <h3>Como criar uma campanha?</h3>
                  <p>Apenas usuários com permissão de Mestre podem criar campanhas. Use o botão "Criar Nova Campanha".</p>
                </div>
              </div>
              
              <div className="faq-category">
                <h2>Enigmas</h2>
                <div className="faq-item">
                  <h3>Como resolver enigmas?</h3>
                  <p>Leia a descrição cuidadosamente e insira sua resposta no campo fornecido. Você tem tentativas limitadas.</p>
                </div>
                <div className="faq-item">
                  <h3>Como criar enigmas?</h3>
                  <p>Usuários autorizados podem criar enigmas através do formulário de criação na página de Enigmas.</p>
                </div>
              </div>
            </div>
            
            <div className="support-section">
              <h2>Precisa de mais ajuda?</h2>
              <p>Entre em contato com nossa equipe de suporte:</p>
              <div className="support-options">
                <a href="mailto:suporte@ecosdarealidade.com" className="btn support-btn">Enviar E-mail</a>
                <a href="https://discord.gg" className="btn btn-secondary support-btn" target="_blank" rel="noopener noreferrer">
                  Discord de Suporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;