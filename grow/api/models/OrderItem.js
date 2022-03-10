const { Model, DataTypes } = require('sequelize');
const db = require('../db');

class OrderItem extends Model {}

OrderItem.init(
  {
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'orderitems',
  }
);

module.exports = OrderItem;
