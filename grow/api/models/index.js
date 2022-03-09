const Address = require("./Address");
const CartItem = require("./CartItem");
const Category = require("./Category");
const OrederDetail = require("./OrderDetail");
const OrderItem = require("./OrderItem");
const PaymentDetail = require("./PaymentDetail");
const Product = require("./Product");
const ShoppingCart = require("./ShoppingCart");
const User = require("./User");

//Favourites.belongsTo(Users, { as: "idFav" });

module.exports = {
  User,
  Product,
  Address,
  CartItem,
  Category,
  OrederDetail,
  OrderItem,
  PaymentDetail,
  ShoppingCart,
};
