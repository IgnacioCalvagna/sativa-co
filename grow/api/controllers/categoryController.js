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
      product.setCategorias(addcategoryIdsArr)})    
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
