const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.get('/',userController.getAll)
router.post('/login', passport.authenticate('local'), userController.login);
router.post('/register',userController.register );
router.post('/logout', userController.logout);
router.put('/:id', userController.update);
router.get('/me', userController.me);
//Admin
router.put('/adminCreate/:id', userController.adminCreate);
router.delete('/suprAdmin/:id', userController.suprAdmin);
router.get('/allAdmin', userController.allAdmin);
router.post('/createRole', userController.createRole);

module.exports = router;
