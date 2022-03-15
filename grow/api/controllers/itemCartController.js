const ItemCart = require('../models/CartItem');
const { Product } = require('../models');

exports.postOrAdd = (req, res) => {
  const { quantity, productId, ShoppingCartId } = req.body;

  ItemCart.findOrCreate({
    where: { productId, ShoppingCartId },
    defaults: { quantity },
  })
    .then(itemCart => {
      return ItemCart.update(
        { quantity },
        {
          where: { id: itemCart[0].id },
          returning: true,
          plain: true,
        }
      );
    })
    .then(data => {
      console.log(data);
      res.send(data[1]);
    });
};

exports.getAll = (req, res) => {
  const { id } = req.params;

  ItemCart.findAll({
    where: { ShoppingCartId: id },
    include: { model: Product },
  }).then(data => {
    res.send(data);
  });
};
