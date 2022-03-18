const { Product } = require('../models');
const OrderItem = require('../models/OrderItem');

exports.add = (req, res) => {
  const { price, quantity, productId, orderdetailId } = req.body;
  OrderItem.create({ price, quantity, productId, orderdetailId }).then(
    newOrderItem => res.send(newOrderItem)
  );
};
exports.getAll = (req, res) => {
  const { id } = req.params;
  OrderItem.findAll({
    where: { orderdetailId: id },
    include: { model: Product },
  }).then(data => res.send(data));
};
