const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('Connexion à MySQL réussie avec Sequelize !'))
  .catch((err) => console.error('Impossible de se connecter à la BDD :', err));

module.exports = sequelize;