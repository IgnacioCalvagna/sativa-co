const { Model, DataTypes} = require('sequelize'); 
const db = require("../db");


class Address extends Model {}

Address.init(
    {
        complete_address:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize:db,
        modelName: 'address',
    }); 


    module.exports = Address;