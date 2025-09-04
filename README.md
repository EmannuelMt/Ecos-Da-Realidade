# 🌌 Ecos da Realidade

> Um sistema web para organizar campanhas de RPG, fichas, enigmas e regras em um só lugar.  
> Feito para transformar mesas de RPG em experiências digitais completas.  

---

## 📖 História do Projeto  

O **Ecos da Realidade** nasceu de uma ideia simples: levar a imersão das mesas de RPG para o ambiente digital.  
Em vez de depender de papéis, planilhas e links espalhados, o sistema organiza tudo em um só lugar:  
- Campanhas em andamento  
- Fichas de personagens  
- Regras do jogo  
- Enigmas criados pelo mestre  
- Espaço da comunidade no Discord  

A proposta é criar um **hub de RPG online**, acessível, bonito e funcional, que une jogadores e mestres em um ambiente único.  

---

## 🛠️ Tecnologias Utilizadas  

### **Frontend**
- React + Vite  
- React Router DOM  
- CSS puro (com componentes reutilizáveis)  

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- Socket.IO (comunicação em tempo real)  
- Firebase Auth (autenticação de usuários)  

---

## 📂 Estrutura de Pastas  

```bash
src/
 ├─ components/          # Componentes globais
 │   ├─ Header/          # Header + navbar
 │   ├─ Layout/          # Estrutura base (header + main + footer)
 │   ├─ Campaign/        # Componentes das campanhas
 │   └─ Sheet/           # Componentes das fichas
 │
 ├─ pages/               # Páginas principais
 │   ├─ Home/            # Página inicial
 │   ├─ Campaigns/       # Página de campanhas
 │   ├─ Enigmas/         # Puzzles e enigmas
 │   ├─ Sheets/          # Fichas de personagens
 │   ├─ Rules/           # Regras do sistema
 │   ├─ Discord/         # Integração com a comunidade
 │   ├─ FAQ/             # Perguntas frequentes
 │   └─ About/           # Sobre o projeto
 │
 ├─ styles/              # Estilos globais
 │   └─ global.css
 │
 └─ App.jsx              # Rotas e Layout


⚙️ Funcionalidades
🔹 Home

Apresentação do sistema.

Links rápidos para campanhas, enigmas e fichas.

🔹 Campanhas

CampaignList → lista todas as campanhas criadas.

CampaignDetail → mostra os detalhes de uma campanha (descrição, jogadores, status).

CampaignCreation → formulário para criar novas campanhas.

🔹 Enigmas

Cadastro de enigmas pelo mestre.

Lista de enigmas com status resolvido/não resolvido.

Área de resposta interativa para os jogadores.

🔹 Fichas

SheetList → lista todas as fichas dos personagens.

SheetDetail → ficha detalhada com atributos, inventário e histórico.

SheetCreation → criação de novas fichas.

🔹 Regras

Guia das regras do sistema.

Estrutura de combate, atributos e inventário.

🔹 Discord

Link direto para o servidor do RPG.

Integração futura com bot (rolagem de dados, registro de sessões).

🔹 FAQ

Perguntas frequentes e tutoriais básicos.

🔹 Sobre

História do projeto.

Tecnologias utilizadas.

Créditos e agradecimentos.