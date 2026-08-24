import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Trouve Ton Artisan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/artisans?category=1">Bâtiment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/artisans?category=2">Alimentation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/artisans?category=3">Fabrication</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/artisans?category=4">Services</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;