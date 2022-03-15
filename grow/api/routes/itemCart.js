const express = require('express');
const router = express.Router();
const itemCart = require('../controllers/itemCartController');

router.post('/', itemCart.postOrAdd);

router.get('/:id', itemCart.getAll);

module.exports = router;
