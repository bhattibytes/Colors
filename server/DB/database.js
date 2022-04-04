const Sequelize = require('sequelize'); 

const database = new Sequelize('color', 'postgres', 'monkey', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = database;