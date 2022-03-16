const express = require("express");
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

router.get("/:id",shoppingCartController.get);

module.exports = router;