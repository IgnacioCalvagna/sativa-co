const express = require("express");
const router = express.Router();
const {OrderItem}= require("../models")


router.post('/add',(req, res)=>{
    const {price,quantity, productId ,orderdetailId} = req.body
    OrderItem.create({price,quantity,productId ,orderdetailId}).then(newOrderItem => res.send(newOrderItem))
})




router.get('/getAll/:id',(req, res)=>{
    const{id} = req.params;
    OrderItem.findAll({where:{orderdetailId:id}})
    .then(data => res.send(data)); 
});

module.exports = router ;