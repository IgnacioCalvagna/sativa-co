const fakeData = require('./Product.json');
const db = require('./db');
const { Product } = require('./models');

const setupSeed = () => {
  const fake = [];
  for (let i = 0; i < fakeData.productos.length; i++) {
    fake.push(fakeData.productos[i]);
  }
  Product.bulkCreate(fake).then(product => console.log(product));
};

db.sync().then(setupSeed);