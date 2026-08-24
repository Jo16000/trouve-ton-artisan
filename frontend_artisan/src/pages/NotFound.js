import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page non trouvée</h2>
      <p className="lead mb-4">
        Oups ! La page que tu cherches n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;