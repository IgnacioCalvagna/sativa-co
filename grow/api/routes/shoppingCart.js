const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

router.get('/:id', shoppingCartController.get);
router.put('/total', shoppingCartController.update);
router.delete('/:id', shoppingCartController.destroy);

module.exports = router;
