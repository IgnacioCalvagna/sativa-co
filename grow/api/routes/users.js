const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.post('/login', passport.authenticate('local'), userController.login);
router.post('/register', userController.register);
router.post('/logout', userController.logout);
router.put('/:id', userController.update);
router.get('/me', userController.me);
router.post('/createRole', userController.createRole);
router.get('/getAll/:id', userController.getAll);
//Admin
router.put('/admin/adminPromote', userController.adminPromote);
router.put('/admin/suprAdmin', userController.suprAdmin);
router.get('/allAdmin', userController.allAdmin);

module.exports = router;
