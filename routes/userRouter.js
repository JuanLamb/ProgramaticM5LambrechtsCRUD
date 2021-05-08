const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/productCart', userController.shopCart);

router.get('/productCart2', userController.shopCart2);

router.get('/productForm', userController.adminCreate);

router.get('/productEdit', userController.adminEdit);

module.exports = router;