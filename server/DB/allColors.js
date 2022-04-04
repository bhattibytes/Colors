const Sequelize = require('sequelize');
const db = require('./database.js');

const Color = db.define('colors', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lightness: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  RGB: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  HEX: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  HSL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = Color;