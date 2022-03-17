const { Model, DataTypes } = require('sequelize');
const db = require('../db'); 


class ProductComment extends Model {}

ProductComment.init(
    {
        comment:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId:{
            type: DataTypes.INTEGER,
            
        },
        userName:{
            type: DataTypes.STRING,
            
         } //  se podra sacar el user name desde el userId ? 
    },
    {
        sequelize: db,
        modelName:'productcomments'
    })

    module.exports = ProductComment;