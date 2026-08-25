import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Remplacement du texte par ton logo */}
        <Link to="/" className="navbar-brand">
          <img 
            src={`${process.env.PUBLIC_URL}/Logo.png`} 
            alt="Logo Trouve Ton Artisan" 
            style={{ height: '40px' }} // Tu peux ajuster la hauteur selon tes besoins
          />
        </Link>

        {/* Le reste de ton menu (liens Accueil, Bâtiment, etc.) */}
        {/* ... */}
      </div>
    </nav>
  );
};

export default Header;