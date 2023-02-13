const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController.js')
const path = require('path');
const multer = require('multer');
const { pathToFileURL } = require('url');

// Configuraciones de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images'))

    },
    filename: (req, file, cb) => {
        const newProductEdit = `product-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newProductEdit)
    }
})

// Instancio multer
const upload = multer({storage});

routerProducts.get('/products', productsController.products);
routerProducts.get('/products/:id', productsController.prodDetails);
routerProducts.get('/cart', productsController.cart);
routerProducts.get('/product-edit/:id' , productsController.productEdit);
routerProducts.put('/product-edit/:id' , productsController.editConfirm);
routerProducts.delete('/product-delete/:id' , productsController.prodDelete);

module.exports = routerProducts;