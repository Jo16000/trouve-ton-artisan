import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* --- LOGO --- */}
                <Link to="/" className="navbar-brand">
                    <img
                        src={`${process.env.PUBLIC_URL}/Logo.png`}
                        alt="Logo Trouve Ton Artisan"
                        style={{
                            height: '80px',
                            width: 'auto',
                            backgroundColor: 'white',
                            padding: '5px',
                            borderRadius: '8px'
                        }}
                    />
                </Link>

                {/* --- BOUTON MOBILE --- */}
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

                {/* --- LIENS DE NAVIGATION (Routes propres) --- */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/batiment">Bâtiment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/alimentation">Alimentation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fabrication">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;