const { Model, DataTypes } = require('sequelize');
const db = require('../db');

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  { sequelize: db, tableName: 'shoppingcarts' }
);

module.exports = ShoppingCart;
