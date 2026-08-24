import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Trouve Ton Artisan — Tous droits réservés.</p>
        <small><a href="/mentions-legales" className="text-white-50">Mentions légales</a> | <a href="/donnees-personnelles" className="text-white-50">Données personnelles</a></small>
      </div>
    </footer>
  );
};

export default Footer;