// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Seção: História do projeto */}
      <section className="home-section" id="historia">
        <h2>História do Projeto Ecos da Realidade</h2>
        <p>
          O projeto nasceu da vontade de criar uma comunidade organizada para jogadores de RPG da série Ordem Paranormal do Cellbit.
          A ideia surgiu de combinar ferramentas digitais modernas com a experiência de jogar RPG, permitindo que mestres e jogadores
          gerenciem campanhas, fichas e enigmas de forma interativa.
        </p>
        <p>
          Linguagens e tecnologias usadas: <strong>React + Vite, CSS puro, Firebase (autenticação), SQL para banco de dados,
          React Icons, Roll20 para rolagens, React DOM.</strong>
        </p>
      </section>

      {/* Seção: Funcionalidade Mestre */}
      <section className="home-section" id="mestre">
        <h2>Funcionalidade Mestre</h2>
        <ul>
          <li>Criar e editar campanhas e spin-offs</li>
          <li>Adicionar, remover e editar fichas de jogadores, NPCs, monstros e bosses</li>
          <li>Adicionar falas e interações para os jogadores</li>
          <li>Bloco de notas interno e grimório com todas as fichas</li>
          <li>Controle de música, mapas e lembretes da campanha</li>
        </ul>
      </section>

      {/* Seção: Funcionalidade Jogador */}
      <section className="home-section" id="jogador">
        <h2>Funcionalidade Jogador</h2>
        <ul>
          <li>Visualizar quadros investigativos da campanha</li>
          <li>Bloco de notas compartilhável (precisa estar no inventário)</li>
          <li>Opção de ficha privada ou pública</li>
          <li>Notificações quando o mestre altera a ficha</li>
          <li>Mochila com limite de peso e penalidade automática</li>
        </ul>
      </section>

      {/* Seção: Enigmas */}
      <section className="home-section" id="enigmas">
        <h2>Seção de Enigmas</h2>
        <p>
          Aqui os jogadores podem visualizar enigmas disponíveis e tentar resolvê-los. Existe um ranking com quem mais resolveu enigmas.
          Caso queira acessar todos os enigmas, será redirecionado para a página Enigmas.
        </p>
      </section>

      {/* Seção: Campanhas */}
      <section className="home-section" id="campanhas">
        <h2>Seção de Campanhas</h2>
        <p>
          Explicamos todas as funcionalidades de campanhas e spin-offs: como adicionar fichas de monstros, NPCs e bosses,
          exportar campanhas, adicionar mapas, músicas e criar lembretes.
        </p>
      </section>

      {/* Seção: Discord */}
      <section className="home-section" id="discord">
        <h2>Entre no Discord</h2>
        <p>
          Clique no ícone abaixo para acessar o nosso servidor Discord e participar da comunidade.
        </p>
        <a href="https://discord.gg/seulink" target="_blank" rel="noopener noreferrer">
          <img src="/discord-icon.png" alt="Discord" className="discord-icon"/>
        </a>
      </section>

      {/* Seção: FAQ */}
      <section className="home-section" id="faq">
        <h2>Perguntas Frequentes (FAQ)</h2>
        <p>Tem alguma dúvida? Confira nossa FAQ ou entre em contato com o suporte.</p>
      </section>
    </div>
  );
};

export default Home;
