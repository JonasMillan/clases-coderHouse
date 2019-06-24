const Sequelize = require('sequelize');
const connection = require('../sql')

const User = connection.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
  })

module.exports = User