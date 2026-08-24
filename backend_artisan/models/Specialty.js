const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./Category');

const Specialty = sequelize.define('Specialty', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'specialties'
});

// Relations
Category.hasMany(Specialty, { foreignKey: 'category_id' });
Specialty.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Specialty;