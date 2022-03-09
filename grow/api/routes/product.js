const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.get("/", (req, res) => {
  Product.findAll().then((products) => res.send(products));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findOne({ where: { id } }).then((product) => res.send(product));
});

router.post("/add", (req, res) => {
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
});
router.put("/:id", (req, res) => {
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
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.destroy({ where: { id } }).then((data) => res.sendStatus(202));
});

//// Productos I (categoria)

router.get("/category/:category", (req, res) => {
  const { category } = req.params;
  console.log(category);
  Product.findAll({ where: { category } }).then((products) =>
    res.send(products)
  );
});

// router.get('/categori/:name',(req, res)=>{

// })
router.get("/name/:name", (req, res) => {
  const { name } = req.params;
  Product.findAll({ where: { name } }).then(products =>{
      res.send(products);
  });
});
module.exports = router;
