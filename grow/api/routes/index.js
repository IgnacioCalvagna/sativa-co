const express = require('express')
const router = express.Router(); 
const user = require('./users');
const product = require('./product');
const orderDetail = require('./orderDetail');
const orderItem = require('./orderItem');


router.use('/user', user)
router.use('/product', product)
router.use('/orderDetail', orderDetail)
router.use('/orderItem', orderItem)




module.exports =router ; 