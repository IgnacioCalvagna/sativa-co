const ProductValoration= require("../models/ProductValoration");


exports.add=(req, res) => {
  const {productId} = req.params
    const {userId,valoration} = req.body
    // console.log("USER",userId)
    // console.log("PRODUCTO ",productId)
    ProductValoration.create({userId,valoration,productId})
    .then(newValoration => res.send(newValoration)); 
  };

exports.getAll=(req, res) => {
    const {productId} =req.params
    ProductValoration.findAll({where:{productId}})
    .then(result => res.send(result));
}

