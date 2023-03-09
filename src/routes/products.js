const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController')
const path = require('path');
const multer = require('multer');
const isAdmin = require('../middlewares/isAdmin')

// Configuraciones de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products/'))

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
routerProducts.get('/product-create', isAdmin ,productsController.prodCreate);
routerProducts.post('/confirm-create', upload.single('image') ,productsController.confirmCreate);
routerProducts.get('/product-edit/:id' , productsController.productEdit);
routerProducts.put('/product-edit/:id' , productsController.editConfirm);
routerProducts.delete('/product-delete/:id' , productsController.prodDelete);

module.exports = routerProducts;