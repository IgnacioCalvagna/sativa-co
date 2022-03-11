const Product = require("../models/Product");

exports.getAll = (req, res) => {
  
};

exports.getById = (req, res) => {
  const { id } = req.params;
  Product.findOne({ where: { id } }).then((product) => res.send(product));
};

exports.add = (req, res) => {
  const { name, description, category, price, stock } = req.body;
  Product.findOrCreate({
    where: { name },
    defaults: {
      name,
      description,
      category,
      price,
      stock,
    },
  }).then((product) => res.send(product));
};

exports.update = (req, res) => {
  const { id } = req.params;
  Product.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then((result) => {
    const user = result[1];
    res.status(201).json({
      user,
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Product.destroy({ where: { id } }).then((data) => res.sendStatus(202));
};

//// Productos I (categoria)

exports.getByCategory = (req, res) => {
  const { category } = req.params;
  console.log(category);
  Product.findAll({ where: { category } }).then((products) =>
    res.send(products)
  );
};

exports.getByName = (req, res) => {
  const { name } = req.params;
  Product.findAll({ where: { name } }).then((products) => {
    res.send(products);
  });
};
