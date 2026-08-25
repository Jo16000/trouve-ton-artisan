USE trouve_ton_artisan;

INSERT INTO categories (id, name) VALUES 
(1, 'Bâtiment'),
(2, 'Services'),
(3, 'Fabrication'),
(4, 'Alimentation');

INSERT INTO specialties (id, name, categoryId) VALUES 
(1, 'Plombier', 1),
(2, 'Électricien', 1),
(3, 'Fleuriste', 2),
(4, 'Boulanger', 4);

INSERT INTO artisans (name, specialtyId, location, note, about, email, phone, website, isTop) VALUES 
('Artisan Plomberie Lyon', 1, 'Lyon (69002)', 4.5, 'Spécialiste en dépannage urgent et rénovation.', 'contact@plomberie-lyon.fr', '0478000000', 'https://www.plomberie-lyon.fr', 1),
('Elec Confort', 2, 'Clermont-Ferrand (63000)', 4.8, 'Installation et mise aux normes électriques.', 'contact@elec-confort.fr', '0473000000', 'https://www.elec-confort.fr', 1),
('Les Fleurs du Sancy', 3, 'Grenoble (38000)', 4.2, 'Créations florales pour tous vos événements.', 'contact@fleurs-sancy.fr', '0476000000', 'https://www.fleurs-sancy.fr', 1);