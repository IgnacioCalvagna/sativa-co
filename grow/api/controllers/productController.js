const Product = require('../models/Product');

exports.getAll = (req, res) => {
  Product.findAll().then(products => res.send(products));
};

exports.getById = (req, res) => {
  const { id } = req.params;
  Product.findOne({ where: { id } }).then(product => res.send(product));
};

exports.add = (req, res) => {
  const { name, description, category, price, stock, img } = req.body;
  Product.findOrCreate({
    where: { name },
    defaults: {
      name,
      description,
      category,
      price,
      stock,

      img,
    },
  }).then(product => res.send(product));
};

exports.addValoration = (req, res) => {
  const { id } = req.params;

  Product.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then(result => {
    const valoracion = result[1];
    res.status(201).json({
      valoracion,
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  Product.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then(result => {
    const product = result[1];
    res.status(201).json({
      product,
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Product.destroy({ where: { id } }).then(data => res.sendStatus(202));
};

//// Productos I (categoria)

exports.getByCategory = (req, res) => {
  const { id } = req.params;

  Category.findByPk(id)
    .then(category => {
      return category.getProductos();
    })
    .then(data => {
      res.send(data);
    });
};

exports.getByName = (req, res) => {
  const { name } = req.params;
  Product.findAll({ where: { name } }).then(products => {
    res.send(products);
  });
};
