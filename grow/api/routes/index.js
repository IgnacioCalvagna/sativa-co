const express = require('express')
const router = express.Router(); 
const user = require('./users');
const product = require('./product');

const orderDetail = require('./orderDetail');
const orderItem = require('./orderItem');

const shoppingCart = require('./shoppingCart')
const itemCart = require('./itemCart')

const productComment = require('./productComment')

const category = require('./category')


router.use('/user', user)
router.use('/product', product)

router.use('/orderDetail', orderDetail)
router.use('/orderItem', orderItem)

router.use('/shoppingCart', shoppingCart);

router.use('/productComment', productComment);


router.use('/itemCart', itemCart)

router.use('/category', category)


module.exports =router ; 