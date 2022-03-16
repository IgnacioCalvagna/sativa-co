const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/",productController.getAll);
router.get("/:id", productController.getById);
router.post("/add", productController.add);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);
//// Productos I (categoria)
router.get("/category/:category", productController.getByCategory);
router.get("/name/:name",productController.getByName);
module.exports = router;
