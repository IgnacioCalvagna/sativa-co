const fakeData = require("./Product.json");
const db = require("./db");
const { Product } = require("./models");
const { Role } = require("./models");

const setupSeed = () => {
  const fake = [];
  for (let i = 0; i < fakeData.productos.length; i++) {
    fake.push(fakeData.productos[i]);
  }
  const admin = [{ role: "Client" }, { role: "Admin" }, { role: "SuperAdmin" }];
  Product.bulkCreate(fake)
    .then((product) => console.log(product))
    .then(() => {
      Role.bulkCreate(admin).then((roles) => console.log(roles));
    });
};

db.sync().then(setupSeed);
