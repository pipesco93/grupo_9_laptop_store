
const path = require('path');
const multer = require('multer');

// Cinfiguracion Multer registro usuarios

const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users/'))

    },
    filename: (req, file, cb) => {
        const newUserImg = `user-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newUserImg)
    }
});

// Configuraciones de multer
const producStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products/'))

    },
    filename: (req, file, cb) => {
        const newProductEdit = `product-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newProductEdit)
    }
})




const imageMulter = {
    userStorage,
    producStorage
}

module.exports = imageMulter;