const Address = require('./Address');
const CartItem = require('./CartItem');
const Category = require('./Category');
const OrderDetail = require('./OrderDetail');
const OrderItem = require('./OrderItem');
const PaymentDetail = require('./PaymentDetail');
const Product = require('./Product');
const ShoppingCart = require('./ShoppingCart');
const User = require('./User');

ShoppingCart.belongsTo(User);
User.hasOne(ShoppingCart);

CartItem.belongsTo(ShoppingCart);
ShoppingCart.hasMany(CartItem);

//Product.hasMany(CartItem);
CartItem.belongsTo(Product);

module.exports = {
  User,
  Product,
  Address,
  CartItem,
  Category,
  OrderDetail,
  OrderItem,
  PaymentDetail,
  ShoppingCart,
};
