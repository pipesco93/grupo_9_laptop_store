const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController.js')


routerProducts.get('/prod-details', productsController.prodDetails);
routerProducts.get('/cart', productsController.cart);
routerProducts.get('/product-edit', productsController.prodEdit);

module.exports = routerProducts;