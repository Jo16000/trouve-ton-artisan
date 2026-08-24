import React from 'react';

function LegalNotice() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Mentions Légales</h1>
      
      <h5>Éditeur du site</h5>
      <p>
        Région Auvergne-Rhône-Alpes<br />
        101 Cours Charlemagne, 69002 Lyon<br />
        Téléphone : 04 26 73 40 00
      </p>

      <h5>Hébergement</h5>
      <p>
        Ce site est hébergé à des fins de démonstration technique.
      </p>

      <h5>Propriété intellectuelle</h5>
      <p>
        L'ensemble des contenus présents sur ce site (textes, images, logos) est protégé par le droit d'auteur.
      </p>
    </div>
  );
}

export default LegalNotice;