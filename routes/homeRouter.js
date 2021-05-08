const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeController.readAll);

router.get('/productCatalog', homeController.readAllCatalog);

module.exports = router;