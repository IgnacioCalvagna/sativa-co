const ShoppingCart = require('../models/ShoppingCart');

exports.get = (req, res) => {
  const { id } = req.params;
  console.log('soy el id del user', id);

  ShoppingCart.findOrCreate({
    where: { UserId: id },
    defaults: {
      total: 0,
    },
  }).then(shoppingCart => res.send(shoppingCart[0]));
};
