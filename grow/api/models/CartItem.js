const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class CartItem extends Model {}

CartItem.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  { sequelize: db, tableName: "cartitems" }
);

module.exports = CartItem;
