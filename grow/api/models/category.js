const { Model, DataTypes} = require('sequelize')
const db = require("../db");


class Category extends Model {}


Category.init(
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {   
        sequence: db,
        modelName: "category"
    })



    module.exports = Category; 