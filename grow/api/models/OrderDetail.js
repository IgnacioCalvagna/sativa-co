const db = require('../db');
const { Model, DataTypes } = require('sequelize');
//const marked = require("marked");

class OrderDetail extends Model {}

OrderDetail.init(
  {
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending'
    },
  },
  {
    sequelize: db,
    modelName: 'orderdetails',
  }
);

module.exports = OrderDetail;
