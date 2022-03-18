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
    },
    {
        sequelize: db,
        modelName: 'productvaloration'
    })

    module.exports = ProductValoration; 