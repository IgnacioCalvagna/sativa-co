const express = require('express')
const router = express.Router(); 
const user = require('./users');
const product = require('./product');
const shoppingCart = require('./shoppingCart')
const itemCart = require('./itemCart')


router.use('/user', user)
router.use('/product', product)
router.use('/shoppingCart', shoppingCart);
router.use('/itemCart', itemCart)




module.exports =router ; 