const db = require("../db");
const { Model, DataTypes } = require("sequelize");
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
    },
  },
  { 
    sequelize: db,
    modelName: "orderDetails" 
  }
);

module.exports = OrderDetail;
