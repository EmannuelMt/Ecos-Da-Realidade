import React, { useEffect, useRef, useState } from 'react';
import { 
  FaHistory, FaBullseye, FaCode, FaBalanceScale, FaUsers, 
  FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt, 
  FaFigma, FaServer, FaShieldAlt, FaMobileAlt, FaCloud,
  FaFire, FaArrowRight, FaArrowLeft
} from 'react-icons/fa';
import { 
  SiJavascript, SiMongodb, SiExpress, SiSocketdotio, 
  SiVite, SiCss3, SiFramer, SiHeroku, SiVercel,
  SiFirebase
} from 'react-icons/si';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const sections = [
    {
      id: 'history',
      icon: <FaHistory />,
      title: 'Nossa História',
      content: (
        <>
          <p>
            O Ecos da Realidade emergiu da paixão coletiva da comunidade por Ordem Paranormal RPG. 
            Inspirado por plataformas globais de RPG, mas com a visão ousada de criar uma experiência 
            completamente adaptada à jogabilidade única e à atmosfera envolvente do universo de Ordem Paranormal.
          </p>
          <p>
            Desenvolvido por entusiastas para entusiastas, este projeto representa a convergência entre 
            tecnologia de ponta e narrativa imersiva, estabelecendo um novo padrão para ferramentas de RPG online.
          </p>
        </>
      )
    },
    {
      id: 'mission',
      icon: <FaBullseye />,
      title: 'Nossa Missão',
      content: (
        <>
          <p>
            Transformar a maneira como jogadores e mestres experienciam Ordem Paranormal RPG, 
            oferecendo ferramentas intuitivas, recursos exclusivos e uma comunidade global 
            conectada pela paixão pelo universo paranormal.
          </p>
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Inovação</h3>
              <p>Desenvolver soluções tecnológicas avançadas que elevam a experiência de RPG</p>
            </div>
            <div className="mission-card">
              <h3>Comunidade</h3>
              <p>Fortalecer e expandir a comunidade de fãs de Ordem Paranormal worldwide</p>
            </div>
            <div className="mission-card">
              <h3>Acessibilidade</h3>
              <p>Democratizar o acesso a ferramentas de RPG de alta qualidade para todos</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'tech',
      icon: <FaCode />,
      title: 'Tecnologias',
      content: (
        <>
          <p>
            Nossa plataforma é construída com uma stack tecnológica moderna e robusta, 
            garantindo performance, segurança e escalabilidade para milhares de usuários.
          </p>
          <div className="tech-showcase">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-items">
                <div className="tech-item">
                  <FaReact />
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <SiVite />
                  <span>Vite</span>
                </div>
                <div className="tech-item">
                  <SiJavascript />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h4>Backend & Database</h4>
              <div className="tech-items">
                <div className="tech-item">
                  <SiFirebase />
                  <span>Firebase</span>
                </div>
                <div className="tech-item">
                  <FaNodeJs />
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <SiExpress />
                  <span>Express</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'legal',
      icon: <FaBalanceScale />,
      title: 'Aviso Legal',
      content: (
        <>
          <div className="legal-card">
            <p>
              Ecos da Realidade é um projeto de fãs criado com admiração pelo universo de Ordem Paranormal 
              e não está oficialmente associado à Cellbit ou à marca Ordem Paranormal.
            </p>
            <p>
              Este projeto não tem fins comerciais e foi desenvolvido como uma demonstração de apreço pela 
              comunidade e pela rica narrativa do universo de Ordem Paranormal.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'contribute',
      icon: <FaUsers />,
      title: 'Contribua',
      content: (
        <>
          <p>
            Ecos da Realidade é um projeto open-source que prospera graças às contribuições 
            de uma comunidade global de desenvolvedores, designers e entusiastas de RPG.
          </p>
          <div className="contribution-actions">
            <a href="https://github.com" className="contribute-btn">
              <FaGitAlt />
              <span>GitHub</span>
            </a>
            <a href="https://discord.gg" className="contribute-btn">
              <FaUsers />
              <span>Discord</span>
            </a>
            <a href="https://figma.com" className="contribute-btn">
              <FaFigma />
              <span>Figma</span>
            </a>
          </div>
        </>
      )
    }
  ];

  const nextSection = () => {
    if (!isAnimating && activeSection < sections.length - 1) {
      setIsAnimating(true);
      setActiveSection(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSection = () => {
    if (!isAnimating && activeSection > 0) {
      setIsAnimating(true);
      setActiveSection(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="about-horizontal-page">
      {/* Header Fixo */}
      <header className="about-header">
        <div className="container">
          <h1 className="page-title">Sobre o Ecos da Realidade</h1>
          <p className="page-subtitle">
            Conectando jogadores ao universo de Ordem Paranormal através de tecnologia de ponta
          </p>
        </div>
      </header>

      {/* Navegação Horizontal */}
      <div className="horizontal-container">
        <div className="navigation-sidebar">
          <div className="sidebar-header">
            <h2>Explorar</h2>
          </div>
          <nav className="section-nav">
            {sections.map((section, index) => (
              <button
                key={section.id}
                className={`nav-item ${activeSection === index ? 'active' : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <div className="nav-icon">{section.icon}</div>
                <span className="nav-label">{section.title}</span>
                {activeSection === index && <div className="nav-indicator" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Conteúdo Principal */}
        <main className="content-main">
          <div className="content-container" ref={containerRef}>
            <AnimatePresence mode="wait">
              <motion.section
                key={sections[activeSection].id}
                className="content-section"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="section-header">
                  <div className="section-icon">
                    {sections[activeSection].icon}
                  </div>
                  <h2>{sections[activeSection].title}</h2>
                </div>
                <div className="section-content">
                  {sections[activeSection].content}
                </div>
              </motion.section>
            </AnimatePresence>

            {/* Controles de Navegação */}
            <div className="navigation-controls">
              <button 
                className="nav-control prev"
                onClick={prevSection}
                disabled={activeSection === 0}
              >
                <FaArrowLeft />
                <span>Anterior</span>
              </button>
              
              <div className="pagination">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${activeSection === index ? 'active' : ''}`}
                    onClick={() => setActiveSection(index)}
                  />
                ))}
              </div>
              
              <button 
                className="nav-control next"
                onClick={nextSection}
                disabled={activeSection === sections.length - 1}
              >
                <span>Próximo</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Indicador de Progresso */}
      <div className="progress-indicator">
        <div 
          className="progress-bar" 
          style={{ width: `${(activeSection / (sections.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default About;