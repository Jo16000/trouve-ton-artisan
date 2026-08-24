const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Specialty = require('./Specialty');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: {
    type: DataTypes.STRING
  },
  picture: {
    type: DataTypes.STRING
  },
  top_artisan: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  specialty_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'artisans'
});

// Relations
Specialty.hasMany(Artisan, { foreignKey: 'specialty_id' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialty_id' });

module.exports = Artisan;