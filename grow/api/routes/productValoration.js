const express = require('express');
const router = express.Router();
const valorationController = require('../controllers/valorationController')


router.post('/add',valorationController.add);
router.get('/getAll',valorationController.getAll);

module.exports = router






