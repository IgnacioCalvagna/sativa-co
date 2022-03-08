const { Model, DataTypes} = require('sequelize'); 
const db = require("../db");


class Order_item extends Model {}

Order_item.init(
    {
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize:db,
        modelName: 'order_item',
    }); 


    module.exports = Order_item;