const Sequelize = require('sequelize');

const connection = new Sequelize('coderHouse', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = connection 