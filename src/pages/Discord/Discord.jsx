import { useState, useEffect } from 'react';
import { 
  FaDiscord, 
  FaUsers, 
  FaComments, 
  FaTools, 
  FaLightbulb, 
  FaGamepad,
  FaCalendarAlt,
  FaTrophy,
  FaShareAlt,
  FaCopy,
  FaCheckCircle,
  FaQrcode,
  FaCrown,
  FaHeart,
  FaMagic,
  FaGhost,
  FaArrowRight,
  FaStar,
  FaRocket
} from 'react-icons/fa';
import { GiRollingDiceCup, GiSpellBook, GiCrystalBall, GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import { RiSwordLine, RiShieldLine, RiTeamFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import './Discord.css';

const Discord = () => {
  const [copied, setCopied] = useState(false);
  const [onlineCount, setOnlineCount] = useState(427);
  const [totalMembers, setTotalMembers] = useState(2156);
  const [activeEvents, setActiveEvents] = useState(8);
  const [activeCampaigns, setActiveCampaigns] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const randomChange = Math.floor(Math.random() * 7) - 3;
        return Math.max(400, prev + randomChange);
      });
      
      setActiveCampaigns(prev => {
        const randomChange = Math.floor(Math.random() * 3) - 1;
        return Math.max(20, prev + randomChange);
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText('https://discord.gg/ecosdarealidade');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar link: ', err);
    }
  };

  const shareOnSocialMedia = (platform) => {
    const shareUrl = 'https://discord.gg/ecosdarealidade';
    const shareText = 'Junte-se à incrível comunidade Ecos da Realidade no Discord! 🎭✨';

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const features = [
    {
      icon: <GiRollingDiceCup />,
      title: "Mesas de RPG",
      description: "Participe de mesas abertas e encontre grupos para jogar campanhas épicas",
      stats: "23 campanhas ativas",
      color: "var(--accent-blue)"
    },
    {
      icon: <FaLightbulb />,
      title: "Enigmas Comunitários",
      description: "Desvende mistérios e compartilhe soluções com outros investigadores",
      stats: "127 enigmas resolvidos",
      color: "var(--accent-pink)"
    },
    {
      icon: <FaTools />,
      title: "Suporte Técnico",
      description: "Ajuda com a plataforma e feedback direto com os desenvolvedores",
      stats: "24/7 disponível",
      color: "var(--accent-green)"
    },
    {
      icon: <GiSpellBook />,
      title: "Criação de Conteúdo",
      description: "Compartilhe campanhas, fichas e histórias incríveis",
      stats: "456 conteúdos compartilhados",
      color: "var(--purple-light)"
    }
  ];

  const serverStats = [
    { label: "Membros Online", value: onlineCount, icon: <FaUsers />, color: "var(--accent-green)" },
    { label: "Total de Membros", value: totalMembers, icon: <RiTeamFill />, color: "var(--accent-blue)" },
    { label: "Eventos Ativos", value: activeEvents, icon: <FaCalendarAlt />, color: "var(--accent-pink)" },
    { label: "Campanhas Ativas", value: activeCampaigns, icon: <GiDiceTwentyFacesTwenty />, color: "var(--purple-light)" }
  ];

  const communityHighlights = [
    {
      icon: <FaCrown />,
      title: "Mestres Experientes",
      description: "Mais de 50 mestres certificados",
      count: "52"
    },
    {
      icon: <FaHeart />,
      title: "Comunidade Acolhedora",
      description: "Ambiente inclusivo e amigável",
      count: "100%"
    },
    {
      icon: <FaMagic />,
      title: "Rituais Criados",
      description: "Rituais customizados pela comunidade",
      count: "89"
    },
    {
      icon: <FaGhost />,
      title: "Criaturas Únicas",
      description: "Monstros e NPCs exclusivos",
      count: "127"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Mestre de RPG",
      content: "A melhor comunidade brasileira de Ordem Paranormal! Conheci jogadores incríveis e criei campanhas memoráveis.",
      avatar: "👨‍💼"
    },
    {
      name: "Marina Oliveira",
      role: "Jogadora",
      content: "Ambiente super acolhedor para iniciantes. Aprendi a jogar RPG aqui e já mestro minhas próprias mesas!",
      avatar: "👩‍🎓"
    },
    {
      name: "Ricardo Santos",
      role: "Criador de Conteúdo",
      content: "Compartilhei meus enigmas e recebi feedback incrível. A comunidade ajuda muito no desenvolvimento.",
      avatar: "🧙‍♂️"
    }
  ];

  return (
    <div className="discord-page">
      {/* Hero Section */}
      <div className="discord-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>🎭 Comunidade Oficial</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-main">Junte-se à nossa</span>
                <span className="title-accent">Comunidade Discord</span>
              </h1>
              
              <p className="hero-description">
                Conecte-se com mais de 2.000 agentes da Ordem em nossa comunidade vibrante no Discord. 
                Encontre mesas, compartilhe conteúdo e faça parte da maior família de Ordem Paranormal RPG.
              </p>
              
              <div className="hero-stats">
                {serverStats.map((stat, index) => (
                  <div key={index} className="hero-stat">
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="hero-actions">
                <a 
                  href="https://discord.gg/ecosdarealidade" 
                  className="btn btn-primary btn-large"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiDiscord className="btn-icon" />
                  Entrar no Discord
                </a>
                
                <div className="secondary-actions">
                  <button 
                    onClick={copyInviteLink}
                    className="btn btn-secondary"
                    aria-label={copied ? "Link copiado!" : "Copiar link de convite"}
                  >
                    {copied ? <FaCheckCircle /> : <FaCopy />}
                    {copied ? "Copiado!" : "Copiar Link"}
                  </button>
                  
                  <div className="qr-tooltip">
                    <button className="btn btn-icon" aria-label="Mostrar QR Code">
                      <FaQrcode />
                    </button>
                    <div className="qr-popup">
                      <div className="qr-code">
                        <div className="qr-placeholder">
                          <FaQrcode />
                          <span>Scan para entrar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="discord-preview">
                <div className="preview-header">
                  <div className="server-icon">
                    <GiCrystalBall />
                  </div>
                  <div className="server-info">
                    <h3>Ecos da Realidade</h3>
                    <div className="server-status">
                      <div className="status-indicator"></div>
                      <span>{onlineCount} online agora</span>
                    </div>
                  </div>
                </div>
                
                <div className="preview-content">
                  <div className="feature-tags">
                    <div className="feature-tag">
                      <RiShieldLine /> Comunidade Verificada
                    </div>
                    <div className="feature-tag">
                      <RiSwordLine /> RPG Ativo
                    </div>
                    <div className="feature-tag">
                      <FaMagic /> Conteúdo Exclusivo
                    </div>
                  </div>
                  
                  <div className="members-showcase">
                    <h4>Alguns membros online:</h4>
                    <div className="members-grid">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="member-avatar">
                          <div className="avatar"></div>
                        </div>
                      ))}
                      <div className="member-more">
                        +{onlineCount - 9}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="preview-footer">
                  <button className="join-button">
                    <FaDiscord />
                    Entrar no Servidor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Por que entrar na nossa comunidade?</h2>
            <p>Descubra tudo que você vai encontrar no servidor</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="feature-stats">{feature.stats}</span>
                </div>
                <div className="feature-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {serverStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Highlights */}
      <div className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossa comunidade em números</h2>
            <p>Alguns dados que mostram nossa paixão por RPG</p>
          </div>
          
          <div className="highlights-grid">
            {communityHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <span className="highlight-count">{highlight.count}</span>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>O que nossos membros dizem</h2>
            <p>Depoimentos reais da comunidade</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>"{testimonial.content}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                    <div className="testimonial-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Pronto para começar sua jornada?</h2>
              <p>Junte-se a milhares de jogadores e descubra um mundo de aventuras</p>
            </div>
            
            <div className="cta-actions">
              <a 
                href="https://discord.gg/ecosdarealidade" 
                className="btn btn-primary btn-large"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaRocket className="btn-icon" />
                Entrar Agora
              </a>
              
              <div className="social-share">
                <span>Compartilhe com outros agentes:</span>
                <div className="share-buttons">
                  <button 
                    onClick={() => shareOnSocialMedia('whatsapp')} 
                    className="share-btn"
                    aria-label="Compartilhar no WhatsApp"
                  >
                    <span className="share-icon">📱</span>
                    WhatsApp
                  </button>
                  <button 
                    onClick={() => shareOnSocialMedia('twitter')} 
                    className="share-btn"
                    aria-label="Compartilhar no Twitter"
                  >
                    <span className="share-icon">🐦</span>
                    Twitter
                  </button>
                  <button 
                    onClick={() => shareOnSocialMedia('facebook')} 
                    className="share-btn"
                    aria-label="Compartilhar no Facebook"
                  >
                    <span className="share-icon">📘</span>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
            
            <div className="discord-note">
              <FaComments className="note-icon" />
              <div>
                <h4>💡 Dica para novos membros</h4>
                <p>
                  Ao entrar, não se esqueça de ler as regras no canal #📋regras e se apresentar 
                  em #👋apresentações para liberar acesso a todos os canais!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;