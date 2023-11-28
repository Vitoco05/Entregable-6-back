const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchase = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
});

module.exports = Purchase;