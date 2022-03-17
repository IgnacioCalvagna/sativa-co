const { Model, DataTypes } = require('sequelize')
const db = require('../db')


class ProductValoration extends Model {}

ProductValoration.init(
    {
        valoration:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        userId:{
            type: DataTypes.INTEGER,
            
        },
        userName:{
            type: DataTypes.STRING,
            
         }
    },
    {
        sequelize: db,
        modelName: 'productvaloration'
    })

    module.exports = ProductValoration; 