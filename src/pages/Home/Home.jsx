// src/pages/Home.jsx
import React, { useState } from 'react';
import { 
  FaDiscord, 
  FaDiceD20, 
  FaUsers, 
  FaPuzzlePiece, 
  FaBook, 
  FaQuestionCircle, 
  FaCrown, 
  FaMusic, 
  FaMap,
  FaFire,
  FaDatabase,
  FaReact,
  FaCode,
  FaArrowRight,
  FaPlus,
  FaFileAlt,
  FaBlog,
  FaStar,
  FaChevronRight,
  FaSearch,
  FaUserFriends,
  FaComments,
  FaChartLine,
  FaTicketAlt,
  FaInfoCircle,
  FaLightbulb,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaMagic,
  FaGhost,
  FaDragon
} from 'react-icons/fa';
import { 
  GiNotebook, 
  GiBackpack, 
  GiMonsterGrasp, 
  GiSpellBook,
  GiCrystalBall,
  GiScrollUnfurled,
  GiCampfire,
  GiCardboardBoxClosed
} from 'react-icons/gi';
import { 
  RiUserStarFill, 
  RiFirefoxFill,
  RiGhostLine,
  RiSwordLine,
  RiMedalLine,
  RiTeamFill
} from 'react-icons/ri';
import { SiRoll20 } from 'react-icons/si';
import './Home.css';

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "Como posso criar uma conta no Ecos da Realidade?",
      answer: "Para criar uma conta, clique no botão 'Criar Conta' no canto superior direito da página. Você precisará fornecer um e-mail válido, nome de usuário e senha. Após a confirmação do e-mail, sua conta estará ativa e você poderá acessar todos os recursos da plataforma."
    },
    {
      question: "O sistema é gratuito?",
      answer: "Sim, o Ecos da Realidade é completamente gratuito para todos os usuários. Oferecemos todas as funcionalidades sem custo, pois nosso objetivo é construir uma comunidade forte de fãs de Ordem Paranormal."
    },
    {
      question: "Preciso ser experiente em RPG para usar a plataforma?",
      answer: "Não! Nossa plataforma é projetada para jogadores de todos os níveis de experiência. Temos tutoriais, guias e uma comunidade disposta a ajudar iniciantes. Se você é novo no mundo de RPG, vai encontrar muitos recursos para começar."
    },
    {
      question: "Como funcionam as campanhas?",
      answer: "As campanhas são histórias contínuas onde você pode participar como jogador ou mestre. Como mestre, você pode criar campanhas, convidar jogadores, gerenciar NPCs e controlar a narrativa. Como jogador, você pode se juntar a campanhas existentes e criar seu personagem para participar das aventuras."
    },
    {
      question: "Posso usar a plataforma no celular?",
      answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em dispositivos móveis. Você pode acessar pelo navegador do seu smartphone ou tablet e ter uma experiência completa em qualquer lugar."
    }
  ];

  const features = [
    {
      icon: <RiUserStarFill />,
      title: "Para Mestres",
      description: "Ferramentas completas para criar e gerenciar campanhas épicas",
      color: "#8b46d6"
    },
    {
      icon: <FaUsers />,
      title: "Para Jogadores",
      description: "Sistema intuitivo para fichas e acompanhamento de campanhas",
      color: "#4361ee"
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Enigmas",
      description: "Desafios complexos e sistema de ranking competitivo",
      color: "#f72585"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-accent">Ecos da Realidade</span>
              <span className="title-sub">Sua Jornada no RPG Começa Aqui</span>
            </h1>
            <p className="hero-description">
              A plataforma definitiva para jogadores de RPG da série Ordem Paranormal. 
              Ferramentas completas para mestres e jogadores criarem experiências memoráveis.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <a href="signup">Criar Conta</a>
              </button>
              <button className="btn btn-secondary">
                <a href="sobre">Saber Mais</a>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="main-visual">
              <div className="visual-element character">
                <FaGhost />
              </div>
              <div className="visual-element dice">
                <FaDiceD20 />
              </div>
              <div className="visual-element book">
                <GiSpellBook />
              </div>
              <div className="visual-element scroll">
                <GiScrollUnfurled />
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1,248</div>
            <div className="stat-label">Fichas Criadas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">563</div>
            <div className="stat-label">Jogadores Ativos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">127</div>
            <div className="stat-label">Campanhas</div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-overview">
        <div className="section-header centered">
          <h2>Uma Plataforma Completa para RPG</h2>
          <p>Tudo que você precisa para suas aventuras no universo de Ordem Paranormal</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-overview-card">
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre o Site */}
      <section className="about-section" id="sobre">
        <div className="section-header centered">
          <div className="section-icon-container">
            <FaInfoCircle className="section-icon" />
          </div>
          <h2>Sobre o Ecos da Realidade</h2>
          <p>Conheça nossa plataforma dedicada ao universo de Ordem Paranormal</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              O Ecos da Realidade nasceu da paixão pelo RPG e pela série Ordem Paranormal do Cellbit. 
              Nossa missão é proporcionar uma experiência completa para jogadores e mestres, com ferramentas 
              intuitivas e poderosas para gerenciar campanhas, fichas de personagens e enigmas desafiadores.
            </p>
            <p>
              Desenvolvido por fãs para fãs, o projeto combina as melhores tecnologias modernas com 
              o amor pelo storytelling e narrativas imersivas. Aqui você encontrará tudo que precisa para 
              suas aventuras no universo de Ordem Paranormal.
            </p>
            <div className="tech-stack">
              <h3>Tecnologias Utilizadas</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <FaReact className="tech-icon" />
                  <span className="tech-name">React + Vite</span>
                </div>
                <div className="tech-item">
                  <FaCode className="tech-icon" />
                  <span className="tech-name">CSS</span>
                </div>
                <div className="tech-item">
                  <FaFire className="tech-icon" />
                  <span className="tech-name">Firebase</span>
                </div>
                <div className="tech-item">
                  <FaDatabase className="tech-icon" />
                  <span className="tech-name">SQL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <RiFirefoxFill />
              <p>Universo Ordem Paranormal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header centered">
          <h2>Recursos Exclusivos</h2>
          <p>Desenvolvido para oferecer a melhor experiência em RPG</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <RiUserStarFill />
            </div>
            <h3>Para Mestres</h3>
            <ul>
              <li>Criação de campanhas e spin-offs</li>
              <li>Gestão de NPCs e monstros</li>
              <li>Controle de mapas e música</li>
              <li>Bloco de notas integrado</li>
            </ul>
            <button className="feature-link">
              <a href="/mestres">Saiba mais</a>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="feature-card highlighted">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>Para Jogadores</h3>
            <ul>
              <li>Fichas personalizáveis</li>
              <li>Sistema de inventário</li>
              <li>Quadros investigativos</li>
              <li>Notificações em tempo real</li>
            </ul>
            <button className="feature-link">
              <a href="/jogadores">Saiba mais</a>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaPuzzlePiece />
            </div>
            <h3>Enigmas</h3>
            <ul>
              <li>Desafios complexos</li>
              <li>Ranking competitivo</li>
              <li>Sistema de recompensas</li>
              <li>Comunidade ativa</li>
            </ul>
            <button className="feature-link">
              <a href="/enigmas">Saiba mais</a>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Fichas Section */}
      <section className="fichas-section" id="fichas">
        <div className="section-header">
          <div className="section-icon-container">
            <FaFileAlt className="section-icon" />
          </div>
          <div>
            <h2>Sistema de Fichas</h2>
            <p>Crie e gerencie fichas de personagens completas</p>
          </div>
        </div>
        
        <div className="fichas-content">
          <div className="fichas-text">
            <h3>Como criar sua ficha</h3>
            <ol>
              <li>Acesse a seção "Fichas" no menu principal</li>
              <li>Clique em "Nova Ficha" para começar</li>
              <li>Preencha as informações básicas do personagem (nome, origem, classe, etc.)</li>
              <li>Adicione atributos, habilidades e perícias</li>
              <li>Configure o inventário e equipamentos</li>
              <li>Personalize a aparência e história do personagem</li>
              <li>Salve e compartilhe com seu mestre</li>
            </ol>
            <p>
              Nossas fichas são totalmente personalizáveis e compatíveis com o sistema de Ordem Paranormal. 
              Você pode escolher entre tornar sua ficha pública ou mantê-la privada, e receberá notificações 
              sempre que o mestre fizer alterações.
            </p>
            <button className="btn btn-primary">
              <FaPlus /> Criar Ficha
            </button>
          </div>
          <div className="fichas-visual">
            <div className="ficha-preview">
              <div className="ficha-header">
                <h4>Ficha de Personagem</h4>
                <span>NEX 15%</span>
              </div>
              <div className="ficha-stats">
                <div className="stat">
                  <span>Vigor</span>
                  <div className="stat-value">2</div>
                </div>
                <div className="stat">
                  <span>Presença</span>
                  <div className="stat-value">3</div>
                </div>
                <div className="stat">
                  <span>Força</span>
                  <div className="stat-value">2</div>
                </div>
                <div className="stat">
                  <span>Agilidade</span>
                  <div className="stat-value">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enigmas Section */}
      <section className="enigmas-section" id="enigmas">
        <div className="section-header">
          <div className="section-icon-container">
            <FaPuzzlePiece className="section-icon" />
          </div>
          <div>
            <h2>Sistema de Enigmas</h2>
            <p>Desafie sua inteligência com enigmas complexos</p>
          </div>
        </div>
        
        <div className="enigmas-content">
          <div className="enigmas-visual">
            <div className="enigmas-preview">
              <div className="enigma-card">
                <div className="enigma-difficulty">Difícil</div>
                <h4>O Enigma do Relógio</h4>
                <p>Um mistério temporal que desafia até os mais experientes agentes</p>
                <div className="enigma-stats">
                  <span>12% resolveram</span>
                  <span>★ 4.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="enigmas-text">
            <h3>Como criar enigmas</h3>
            <ol>
              <li>Acesse a seção "Enigmas" no menu principal</li>
              <li>Clique em "Criar Enigma" para iniciar</li>
              <li>Defina o título, descrição e dificuldade</li>
              <li>Adicione pistas e informações relevantes</li>
              <li>Configure a solução e respostas alternativas</li>
              <li>Defina recompensas para quem solucionar</li>
              <li>Publique e acompanhe as tentativas de resolução</li>
            </ol>
            <p>
              Nossa plataforma oferece ferramentas completas para criação de enigmas imersivos. 
              Você pode acompanhar estatísticas de resolução, adicionar múltiplas pistas e criar 
              experiências únicas para seus jogadores.
            </p>
            <button className="btn btn-primary">
              <FaPlus /> Criar Enigma
            </button>
          </div>
        </div>
      </section>

      {/* Campanhas Section */}
      <section className="campanhas-section" id="campanhas">
        <div className="section-header">
          <div className="section-icon-container">
            <GiCampfire className="section-icon" />
          </div>
          <div>
            <h2>Sistema de Campanhas</h2>
            <p>Crie e participe de aventuras épicas</p>
          </div>
        </div>
        
        <div className="campanhas-content">
          <div className="campanhas-text">
            <h3>Como criar uma campanha</h3>
            <ol>
              <li>Acesse a seção "Campanhas" no menu principal</li>
              <li>Clique em "Nova Campanha" para iniciar</li>
              <li>Defina o título, descrição e configurações da campanha</li>
              <li>Adicione jogadores convidando-os ou tornando a campanha pública</li>
              <li>Crie sessões e organize a linha do tempo da história</li>
              <li>Adicione NPCs, locais e eventos importantes</li>
              <li>Compartilhe com seus jogadores e comece a aventura</li>
            </ol>
            <p>
              Nosso sistema de campanhas oferece ferramentas completas para mestres criarem 
              experiências imersivas. Você pode acompanhar o progresso dos jogadores, gerenciar 
              múltiplas histórias e criar spin-offs para expandir seu universo.
            </p>
            <button className="btn btn-primary">
              <FaPlus /> Criar Campanha
            </button>
          </div>
          <div className="campanhas-visual">
            <div className="campanha-preview">
              <div className="campanha-header">
                <h4>Crônicas do Abismo</h4>
                <span>5 Jogadores</span>
              </div>
              <div className="campanha-stats">
                <div className="campanha-stat">
                  <span>Sessões</span>
                  <div className="campanha-stat-value">8</div>
                </div>
                <div className="campanha-stat">
                  <span>Meses Ativa</span>
                  <div className="campanha-stat-value">3</div>
                </div>
                <div className="campanha-stat">
                  <span>NPCs</span>
                  <div className="campanha-stat-value">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog">
        <div className="section-header">
          <div className="section-icon-container">
            <FaBlog className="section-icon" />
          </div>
          <div>
            <h2>Blog e Dicas de RPG</h2>
            <p>Artigos e tutoriais para melhorar suas campanhas</p>
          </div>
        </div>
        
        <div className="blog-content">
          <div className="blog-text">
            <h3>Dicas de Ordem Paranormal</h3>
            <p>
              Nosso blog é repleto de conteúdo exclusivo para mestres e jogadores de Ordem Paranormal. 
              De tutorials para iniciantes a estratégias avançadas para mestres experientes, temos 
              material para todos os níveis de experiência.
            </p>
            <div className="blog-topics">
              <div className="topic">
                <FaLightbulb />
                <span>Criação de NPCs memoráveis</span>
              </div>
              <div className="topic">
                <FaLightbulb />
                <span>Como balancear encontros de combate</span>
              </div>
              <div className="topic">
                <FaLightbulb />
                <span>Construindo mistérios envolventes</span>
              </div>
              <div className="topic">
                <FaLightbulb />
                <span>Utilizando música para imersão</span>
              </div>
            </div>
            <button className="btn btn-primary">
              Acessar Blog <FaArrowRight />
            </button>
          </div>
          <div className="blog-preview">
            <div className="blog-card">
              <div className="blog-category">Dica para Mestres</div>
              <h4>Criando Atmosfera com Descrições</h4>
              <p>Aprenda a usar descrições sensoriais para imergir seus jogadores no universo de Ordem Paranormal...</p>
              <div className="blog-meta">
                <span>Por: Mestre Experiente</span>
                <span>12 de Out, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte Section */}
      <section className="suporte-section" id="suporte">
        <div className="section-header">
          <div className="section-icon-container">
            <FaHeadset className="section-icon" />
          </div>
          <div>
            <h2>Suporte e Ajuda</h2>
            <p>Estamos aqui para ajudar com qualquer problema</p>
          </div>
        </div>
        
        <div className="suporte-content">
          <div className="suporte-options">
            <div className="suporte-card">
              <div className="suporte-icon">
                <FaTicketAlt />
              </div>
              <h4>Central de Ajuda</h4>
              <p>Encontre respostas para perguntas frequentes e tutoriais detalhados sobre todas as funcionalidades da plataforma.</p>
              <button className="btn btn-outline">
                Acessar Central
              </button>
            </div>
            
            <div className="suporte-card">
              <div className="suporte-icon">
                <FaComments />
              </div>
              <h4>Reportar Problema</h4>
              <p>Encontrou um bug ou tem uma sugestão? Abra um ticket para nossa equipe de suporte te ajudar rapidamente.</p>
              <button className="btn btn-outline">
                <a href="/suporte/abrir-ticket">Abrir Ticket</a>
              </button>
            </div>
            
            <div className="suporte-card">
              <div className="suporte-icon">
                <FaDiscord />
              </div>
              <h4>Comunidade Discord</h4>
              <p>Junte-se à nossa comunidade no Discord para tirar dúvidas, compartilhar experiências e conversar com outros fãs.</p>
              <button className="btn btn-outline">
                Entrar no Discord
              </button>
            </div>
          </div>
          
          <div className="suporte-info">
            <h3>Como solicitar suporte</h3>
            <ol>
              <li>Acesse a seção "Suporte" no menu principal</li>
              <li>Escolha entre "Central de Ajuda" ou "Reportar Problema"</li>
              <li>Para reportar problemas, descreva detalhadamente a issue encontrada</li>
              <li>Inclua screenshots se possível para ajudar na identificação</li>
              <li>Informe seu e-mail para contato</li>
              <li>Clique em enviar e aguarde nosso retorno em até 24h</li>
            </ol>
            <p>
              Nossa equipe de suporte está disponível para ajudar com quaisquer problemas 
              ou dúvidas sobre a plataforma. Respondemos a todos os tickets em até 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-header centered">
          <div className="section-icon-container">
            <FaQuestionCircle className="section-icon" />
          </div>
          <h2>Perguntas Frequentes</h2>
          <p>Tire todas as suas dúvidas sobre o Ecos da Realidade</p>
        </div>
        
        <div className="faq-content">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{item.question}</h4>
                  <span className="faq-toggle">
                    {activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-cta">
            <h3>Não encontrou sua dúvida?</h3>
            <p>Entre em contato conosco e nossa equipe terá prazer em ajudar</p>
            <button className="btn btn-primary">
              <FaHeadset /> Entrar em Contato
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <div className="community-text">
            <h2>Junte-se à Nossa Comunidade</h2>
            <p>Conecte-se com outros jogadores, compartilhe experiências e participe de eventos exclusivos em nossa comunidade no Discord.</p>
            <button className="btn btn-discord">
              <FaDiscord /> Entrar no Discord
            </button>
          </div>
          <div className="community-visual">
            <div className="discord-card">
              <FaComments />
              <h4>Chat Ativo</h4>
              <p>Conversas diárias sobre RPG</p>
            </div>
            <div className="discord-card">
              <FaUserFriends />
              <h4>Encontre Grupo</h4>
              <p>Conecte-se com outros jogadores</p>
            </div>
            <div className="discord-card">
              <RiMedalLine />
              <h4>Eventos Exclusivos</h4>
              <p>Participe de sessões especiais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Pronto para Começar sua Aventura?</h2>
          <p>Junte-se a milhares de jogadores e descubra um mundo de possibilidades</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Criar Conta
            </button>
            <button className="btn btn-secondary btn-large">
              Saber Mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;