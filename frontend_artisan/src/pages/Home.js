import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    axios.get('https://trouve-ton-artisan-backend-qrmv.onrender.com/api/artisans/top')
      .then(res => setTopArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      {/* Section Comment trouver mon artisan */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <h1 className="display-5 fw-bold">Comment trouver mon artisan ?</h1>
        <ol className="mt-3 fs-5">
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </div>

      {/* Section Artisans du mois */}
      <h2 className="mb-4">Artisans du mois</h2>
      <div className="row">
        {topArtisans.map(artisan => (
          <div className="col-md-4 mb-4" key={artisan.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{artisan.name}</h5>
                <p className="card-text text-muted mb-1">
                  <strong>Spécialité :</strong> {artisan.Specialty?.name}
                </p>
                <p className="card-text text-muted mb-1">
                  <strong>Ville :</strong> {artisan.city}
                </p>
                <p className="card-text">
                  <strong>Note :</strong> {artisan.rating} / 5 ⭐
                </p>
                <Link to={`/artisan/${artisan.id}`} className="btn btn-primary w-100">
                  Voir la fiche
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;