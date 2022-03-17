const express = require("express");
const router = express.Router();
const {OrderItem}= require("../models")
const orderIntemController = require("../controllers/orderItemController")


router.post('/add', orderIntemController.add)
router.get('/getAll/:id',orderIntemController.getAll);

module.exports = router ;