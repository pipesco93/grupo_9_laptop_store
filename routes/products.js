const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController.js')

routerProducts.get('/products', productsController.products);
routerProducts.get('/products/:id', productsController.prodDetails);
routerProducts.get('/cart', productsController.cart);
routerProducts.get('/product-edit', productsController.prodEdit);

module.exports = routerProducts;