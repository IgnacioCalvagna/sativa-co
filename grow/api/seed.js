const fakeData = require('./Product.json');
const db = require('./db');
const {Product} = require('./models');

const setupSeed = async () => {

    const fake = [];
    for(let i = 0; i < fakeData.length; i++) {
        fake.push(fakeData[i]);
           
    }
}
const product = await Product.bulkCreate(fake)

db.sync()
.then(setupSeed)
