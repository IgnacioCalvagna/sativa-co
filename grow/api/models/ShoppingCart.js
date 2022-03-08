const { Model, DataTypes } = require('sequelize');
const db = require('../db');

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },

  { sequelize: db, tableName: 'shoppingCart' }
);

module.exports = ShoppingCart;
