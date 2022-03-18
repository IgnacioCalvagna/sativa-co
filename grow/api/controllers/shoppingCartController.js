const ShoppingCart = require('../models/ShoppingCart');

exports.get = (req, res) => {
  const { id } = req.params;
  ShoppingCart.findOrCreate({
    where: { UserId: id },
    defaults: {
      total: 0,
    },
  }).then(shoppingCart => res.send(shoppingCart[0]));
};

exports.update = (req, res) => {
  const { id, total } = req.body;

  ShoppingCart.update({ total }, { where: { id } }).then(() =>
    res.sendStatus(200)
  );
};

exports.destroy = (req, res) => {
  const { id } = req.params;

  ShoppingCart.destroy({ where: { id } }).then(() => res.sendStatus(202));
};
