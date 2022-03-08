const db = require("../db");
const { Model, DataTypes } = require("sequelize");
//const marked = require("marked");

class PaymentDetail extends Model {}

PaymentDetail.init(
  {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    provaider: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  { sequelize: db, modelName: "paymentDetails" }
);

module.exports = PaymentDetail;
