import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryPage({ categoryName }) {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // On appelle ta route backend dédiée aux catégories
        fetch(`https://trouve-ton-artisan-backend-qrmv.onrender.com/api/artisans/category/${categoryName}`)
            .then(res => res.json())
            .then(data => {
                setArtisans(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur de chargement :", err);
                setLoading(false);
            });
    }, [categoryName]);

    return (
        <div className="container my-4">
            <h1 className="mb-4 text-capitalize">Artisans - {categoryName}</h1>
            
            {loading ? (
                <p>Chargement des artisans...</p>
            ) : artisans.length === 0 ? (
                <p>Aucun artisan trouvé dans cette catégorie.</p>
            ) : (
                <div className="row">
                    {artisans.map(artisan => (
                        <div className="col-md-4 mb-4" key={artisan.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{artisan.name}</h5>
                                    <p className="card-text"><strong>Spécialité :</strong> {artisan.Specialty?.name}</p>
                                    <p className="card-text"><strong>Ville :</strong> {artisan.city}</p>
                                    <p className="card-text"><strong>Note :</strong> {artisan.rating} / 5 ⭐</p>
                                    <Link to={`/artisan/${artisan.id}`} className="btn btn-primary btn-sm">
                                        Voir la fiche
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryPage;