const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController.js')

// ******************* Se  configura Multer **********************
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../public/images/"));
    },

    filename: (req, file, cb) => {
        const newFile = `prod-${Date.now()}-img${path.extname(file.originalname)}`//date now milisegundos desde 1970, un numero muy grande,
        // path.extname me trae la extension del archivo original 
        cb(null,newFile);
    }
});

const upload = multer({storage})


routerProducts.get('/products', productsController.products);
routerProducts.get('/products/:id', productsController.prodDetails);
routerProducts.get('/cart', productsController.cart);
routerProducts.get('/product-edit', productsController.prodEdit);
routerProducts.get('/product-create', productsController.prodCreate);
routerProducts.post('/confirm-create', upload.single('image') ,productsController.confirmCreate);

module.exports = routerProducts;