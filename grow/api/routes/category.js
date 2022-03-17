const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');


// router.get('/', category.getAll);

router.post('/new', category.newCategory);
router.post('/addRelation', category.addCategoryProduct);
router.post('/addmanyRelations', category.addmanyRelations);

router.delete('/deleteRelation',  category.deleteRelation)
router.put('/updateRelation',  category.updateRelation)
router.get('/getAll', category.getAll)
router.get('/productcategories/:id', category.getCatsByProdId)

// router.delete('/:id', category.delete);


module.exports = router;
