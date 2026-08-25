import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`https://trouve-ton-artisan-backend-qrmv.onrender.com/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi d'email pour l'instant
    setStatus('Votre message a bien été envoyé ! L\'artisan vous répondra sous 48h.');
    setFormData({ name: '', subject: '', message: '' });
  };

  if (!artisan) {
    return <div className="container my-5 text-center">Chargement des données...</div>;
  }

  return (
    <div className="container my-4">
      {/* En-tête de la fiche */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{artisan.name}</h2>
          <p className="card-text">
            <strong>Spécialité :</strong> {artisan.Specialty?.name || 'Non renseignée'}<br />
            <strong>Catégorie :</strong> {artisan.Specialty?.Category?.name || 'Non renseignée'}<br />
            <strong>Ville :</strong> {artisan.city}<br />
            <strong>Note :</strong> {artisan.rating} / 5 ⭐️
          </p>
          {artisan.about && (
            <div className="mt-3">
              <h5>À propos</h5>
              <p>{artisan.about}</p>
            </div>
          )}
          {artisan.website && (
            <a href={artisan.website} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
              Visiter le site web
            </a>
          )}
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3">Contacter {artisan.name}</h4>
          
          {status && <div className="alert alert-success">{status}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Votre nom</label>
              <input
                type="text"
                name="name"
                className="form-value form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Objet</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Votre message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer le message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ArtisanDetail;