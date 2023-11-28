const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection.js');

const Category = sequelize.define('category', {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Category;