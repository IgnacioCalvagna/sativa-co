const { Model, DataTypes } = require('sequelize');
const db = require('../db');

class CartItem extends Model {}

CartItem.init(
  {
    quantity: {
      type: DataTypes.INT,
      allowNull: false,
    },
  },

  { sequelize: db, tableName: 'cartItem' }
);

module.exports = CartItem;
