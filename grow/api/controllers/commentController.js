const ProductComment = require('../models/ProductComment')


exports.addComment=(req, res) => {
    const {userId,productId,userName,comment} = req.body
    ProductComment.create({userId,productId,userName,comment})
    .then(newComment => res.send(newComment)); 
  };

exports.getAllComments=(req, res) => {
    const {productId} =req.params
    ProductComment.findAll({where:{productId}})
    .then(comments => res.send(comments));
}


