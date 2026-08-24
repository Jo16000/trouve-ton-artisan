import React from 'react';

function PersonalData() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Données Personnelles (RGPD)</h1>
      
      <h5>Gestion des données</h5>
      <p>
        Les informations recueillies via le formulaire de contact sont transmises directement à l'artisan concerné afin d'apporter une réponse à votre demande.
      </p>

      <h5>Vos droits</h5>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
      </p>
    </div>
  );
}

export default PersonalData;