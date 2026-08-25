import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Trouve Ton Artisan — Tous droits réservés.</p>
            <small>
                 <Link to="/mentions-legales" className="text-white-50">Mentions légales</Link> 
                  {' | '} 
                  <Link to="/donnees-personnelles" className="text-white-50">Données personnelles</Link>
             </small>
      </div>
    </footer>
  );
};

export default Footer;