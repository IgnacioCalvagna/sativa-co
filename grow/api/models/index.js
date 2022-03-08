const User = require ("./User")
const Product = require ("./Product")

//Favourites.belongsTo(Users, { as: "idFav" });

module.exports = { User, Product };