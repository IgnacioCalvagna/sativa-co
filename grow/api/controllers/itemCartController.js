const ItemCart = require('../models/CartItem');
const { Product } = require('../models');

exports.postOrAdd = (req, res) => {
  const { quantity, productId, ShoppingCartId } = req.body;
  console.log(
    'soy el req body que te llegó',
    quantity,
    productId,
    ShoppingCartId
  );
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

exports.delete = (req, res) => {
  const { id } = req.params;
  ItemCart.destroy({
    where: { id },
  }).then(() => res.send(204));
};
