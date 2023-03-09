const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/usersController.js');
const { body } = require('express-validator');

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
const upload = multer({storage});


// Validaciones

const validateLogin = [
    body('email').isEmail().withMessage('Email invalido'),
    body('password').notEmpty().withMessage('Debes entrar tu contraseña')
];

const validateRegister = [
    body('email').isEmail().withMessage('El email no es valido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre'),
    body('lastName').notEmpty().withMessage('Debes ingesar un apellido'),
    body('adress').notEmpty().withMessage('Debes ingresar una dirección'),
];


routerUsers.get('/register', userController.register);
routerUsers.get('/login', userController.login);
routerUsers.get('/logout', userController.logOut);

routerUsers.post('/log-in', validateLogin, userController.postLogin);
routerUsers.post('/confirm-register',upload.single('avatar'), validateRegister, userController.postRegister);

module.exports = routerUsers;