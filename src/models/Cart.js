const sequelize = require('../utils/connection.js');
const { DataTypes } = require('sequelize')

const Cart = sequelize.define('cart', {
  
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = Cart;