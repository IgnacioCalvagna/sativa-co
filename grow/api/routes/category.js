const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');


// router.get('/', category.getAll);

router.post('/new', category.newCategory);
router.post('/addRelation', category.addCategoryProduct);

// router.delete('/:id', category.delete);


module.exports = router;
