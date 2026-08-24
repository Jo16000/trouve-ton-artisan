import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants de structure (En-tête et Pied de page)
import Header from './components/Header';
import Footer from './components/Footer';

// Pages de l'application
import Home from './pages/Home';
import ArtisansList from './pages/ArtisansList';
import ArtisanDetail from './pages/ArtisanDetail';
import LegalNotice from './pages/LegalNotice';
import PersonalData from './pages/PersonalData';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* En-tête / Navigation */}
        <Header />

        {/* Contenu principal */}
        <main className="flex-grow-1">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Liste globale et filtrage par catégorie */}
            <Route path="/artisans" element={<ArtisansList />} />

            {/* Page de détail d'un artisan */}
            <Route path="/artisan/:id" element={<ArtisanDetail />} />

            {/* Pages légales */}
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/donnees-personnelles" element={<PersonalData />} />

            {/* Page d'erreur 404 (Route par défaut si l'URL n'existe pas) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;