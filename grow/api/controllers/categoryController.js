const { useParams } = require("react-router");
const Category = require("../models/Category");
const Product = require("../models/Product");

exports.addCategoryProduct = (req, res) => {
  const { productId, categoryId } = req.body;
  Product.findByPk(productId)
    .then((product) => {
      product.addCategoria(categoryId);
    })
    .then(() => {
      res.sendStatus(200);
    });
};

exports.addmanyRelations = (req, res) => {
  const { productId, objCategoryId } = req.body;
  const newcategoryIdsArr = [];
  for (const categId in objCategoryId) {
    if (objCategoryId[categId]) newcategoryIdsArr.push(categId);
    // else removecategoryIdsArr.push(categId);
  }
  Product.findByPk(productId)
    .then((product) => {
      product.addCategorias(newcategoryIdsArr);
    })
    .then((result) => {
      res.send(result);
    });
};

exports.deleteRelation = (req, res) => {
  const { productId, categoryId } = req.body;
  Product.findByPk(productId)
    .then((product) => {
      product.removeCategoria(categoryId);
    })
    .then((result) => res.send(result));
};

exports.updateRelation = (req, res) => {
  const { productId, objCategoryId } = req.body;
  //categoryId es un array
  const addcategoryIdsArr = [];
  //   const removecategoryIdsArr = [];
  for (const categId in objCategoryId) {
    if (objCategoryId[categId]) addcategoryIdsArr.push(categId);
    // else removecategoryIdsArr.push(categId);
  }
  //crear arr de categoryIds
  Product.findByPk(productId)
    .then((product) => {
      product.setCategorias(addcategoryIdsArr);
    })
    .then((result) => res.send(result));
};

exports.newCategory = (req, res) => {
  const { name, description } = req.body;
  Category.findOrCreate({ where: { name }, defaults: { description } }).then(
    (category) => res.send(category)
  );
};

exports.getAll = (req, res) => {
  Category.findAll().then((result) => res.send(result));
};

exports.getCatsByProdId = (req, res) => {
  const { id } = req.params;
  console.log(`id es`, id);
  Product.findByPk(id)
    .then((product) => {
      return product.getCategorias();
    })
    .then((data) => {
      res.send(data);
    });
};

exports.deleteByCategId = (req, res) => {
  const { id } = req.params;
  Category.destroy({ where: { id } }).then((data) => res.sendStatus(202));
};

exports.updateByCategId = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  console.log(`name es`, name)
  Category.update(req.body, { where: { id } }).then((data) =>
    res.sendStatus(201)
  );
};

exports.getByCategId = (req, res) => {
  const {id} = req.params;
  Category.findByPk(id).then(
    category=>res.send(category)
  )
}