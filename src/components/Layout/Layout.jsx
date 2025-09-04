// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header/Header'; // Importa o header corretamente
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header /> {/* Header vai aparecer em todas as páginas */}
            <main>{children}</main>
            <footer className="site-footer">
                <p>© 2025 Ecos Da Realidade. Todos os direitos reservados.</p>
            </footer>
        </>
    );
};

export default Layout;
