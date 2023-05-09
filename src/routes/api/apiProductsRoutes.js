const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productApiController');



router.get('/products', productApiController.apiProducts);
router.get('/products/:id', productApiController.apiProductDetail);

module.exports = router;