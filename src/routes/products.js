const express = require('express');
const routerProducts = express.Router();
const productsController = require('../controllers/productsController')
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const isAdmin = require('../middlewares/isAdmin')
const loadUser = require('../middlewares/loadUser')

// Requeris las validaciones de usuario
const { validateCreate, validateEdit } = require('../middlewares/productValidations')

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
// const {userStorage, productStorage} = require('../middlewares/imageMulter')
const upload = multer({storage});

routerProducts.get('/products',loadUser,productsController.products);
routerProducts.get('/products/:id',loadUser,productsController.prodDetails);
routerProducts.get('/cart',loadUser, productsController.cart);
routerProducts.get('/product-create',loadUser, isAdmin ,productsController.prodCreate);
routerProducts.post('/confirm-create',loadUser, upload.single('image'), validateCreate, productsController.confirmCreate);
routerProducts.get('/product-edit/:id',loadUser, productsController.productEdit);
routerProducts.put('/product-edit/:id',loadUser, upload.single('image'),  validateEdit, productsController.editConfirm);
routerProducts.delete('/product-delete/:id',loadUser , productsController.prodDelete);

routerProducts.get('/db',productsController.pruebaDb);
module.exports = routerProducts;