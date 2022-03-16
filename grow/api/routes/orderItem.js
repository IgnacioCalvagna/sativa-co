const express = require("express");
const router = express.Router();
const {OrderItem}= require("../models")


router.post('/add',(req, res)=>{
    const {price,quantity, productId ,orderdetailId} = req.body
    OrderItem.create({price,quantity,productId ,orderdetailId}).then(newOrderItem => res.send(newOrderItem))
})



module.exports = router ;