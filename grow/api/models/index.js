const Address = require('./Address');
const CartItem = require('./CartItem');
const Category = require('./Category');
const OrderDetail = require('./OrderDetail');
const OrderItem = require('./OrderItem');
const PaymentDetail = require('./PaymentDetail');
const Product = require('./Product');
const ShoppingCart = require('./ShoppingCart');
const User = require('./User');
const Role = require('./Role');

ShoppingCart.belongsTo(User);
User.hasOne(ShoppingCart);

CartItem.belongsTo(ShoppingCart);
ShoppingCart.hasMany(CartItem);

CartItem.belongsTo(Product);
Product.hasMany(CartItem);

User.belongsTo(Role);

Address.belongsTo(User);
User.hasMany(Address);

OrderItem.belongsTo(Product);
Product.hasMany(OrderItem);

OrderItem.belongsTo(OrderDetail);
OrderDetail.hasMany(OrderItem);

OrderDetail.belongsTo(User);
User.hasMany(OrderDetail);

PaymentDetail.belongsTo(OrderDetail);

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
