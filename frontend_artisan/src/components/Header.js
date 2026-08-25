import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* --- LOGO AVEC FOND BLANC POUR LA LISIBILITÉ ET GRANDE TAILLE --- */}
        <Link to="/" className="navbar-brand">
          <img 
            src={`${process.env.PUBLIC_URL}/Logo.png`} 
            alt="Logo Trouve Ton Artisan" 
            style={{ 
              height: '80px', 
              width: 'auto', 
              backgroundColor: 'white', // Fond blanc pour contraster
              padding: '5px',         // Un peu de marge autour
              borderRadius: '8px'     // Coins légèrement arrondis
            }} 
          />
        </Link>

        {/* --- BOUTON HAMBURGER POUR MOBILE (Optionnel mais recommandé) --- */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- TES LIENS DE DROITE (Qui vont revenir ici) --- */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artisans?categorie=batiment">Bâtiment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artisans?categorie=alimentation">Alimentation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artisans?categorie=fabrication">Fabrication</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artisans?categorie=services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;