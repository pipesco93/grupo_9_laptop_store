const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/usersController.js');
const { body } = require('express-validator');
const loadUser = require('../middlewares/loadUser')

// Requeris las validaciones de usuario
const { validateLogin, validateRegister } = require('../middlewares/userValidations')

// Configuraciones de multer
const path = require('path');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users/'))

    },
    filename: (req, file, cb) => {
        const newUserImg = `user-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newUserImg)
    }
})

// Instancio multer
const upload = multer({ storage });


routerUsers.get('/register',loadUser, userController.register);
routerUsers.get('/login', userController.login);
routerUsers.get('/logout', userController.logOut);
routerUsers.get('/users/:id',loadUser ,userController.userDetail);
routerUsers.post('/log-in',validateLogin, userController.postLogin);
routerUsers.post('/confirm-register', upload.single('avatar'), validateRegister, userController.postRegister);

module.exports = routerUsers;