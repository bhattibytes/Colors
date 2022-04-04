const Sequelize = require('sequelize'); // Import Sequelize

const database = new Sequelize('color', 'postgres', 'monkey', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = database;