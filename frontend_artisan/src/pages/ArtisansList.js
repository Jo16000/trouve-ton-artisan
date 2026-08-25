import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const ArtisansList = () => {
  const [artisans, setArtisans] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('category');

  useEffect(() => {
    let url = `https://trouve-ton-artisan-backend-qrmv.onrender.com/api/artisans`;
    const params = [];
    if (categoryId) params.push(`category=${categoryId}`);
    if (search) params.push(`search=${search}`);
    if (params.length > 0) url += `?${params.join('&')}`;

    axios.get(url)
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, [categoryId, search]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Liste des artisans</h2>

      {/* Barre de recherche */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un artisan par nom..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {artisans.length > 0 ? (
          artisans.map(artisan => (
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
                  <Link to={`/artisan/${artisan.id}`} className="btn btn-outline-primary w-100">
                    Voir la fiche
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun artisan trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default ArtisansList;