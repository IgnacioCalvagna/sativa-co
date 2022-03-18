const OrderDetail = require('../models/OrderDetail');

exports.add = (req, res) => {
  const { UserId, total } = req.body;
  console.log('MIREQ.BODY', req.body);
  OrderDetail.create({ UserId, total, status: 'pending' }).then(
    newOrderDetail => {
      res.send(newOrderDetail);
    }
  );
};

exports.update = (req, res) => {
  const { id } = req.params;
  OrderDetail.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then(result => {
    const user = result[1];
    res.status(201).json({
      user,
    });
  });
};

exports.getAll = (req, res) => {
  const { UserId } = req.params;
  OrderDetail.findAll({ where: { UserId } }).then(orders => res.send(orders));
};

exports.getOne = (req, res) => {
  const { id } = req.params;

  console.log('soy el id', id);
  OrderDetail.findOne({ where: { id } }).then(order => res.send(order));
};
