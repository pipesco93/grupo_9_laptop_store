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
    body('email').isEmail().withMessage('Invalid mail'),
    body('password').notEmpty().withMessage('Enter a password')
];

const validateRegister = [
    body('email').isEmail().withMessage('Invalid mail'),
    body('password').notEmpty().withMessage('Enter a password'),
    body('firstName').notEmpty().withMessage('Enter a name'),
    body('lastName').notEmpty().withMessage('Enter a sirname'),
    body('adress').notEmpty().withMessage('Enter an adress'),
];


routerUsers.get('/register', userController.register);
routerUsers.get('/login', userController.login);

routerUsers.post('/log-in', validateLogin, userController.postLogin);
routerUsers.post('/confirm-register',upload.single('avatar'), validateRegister, userController.postRegister);

module.exports = routerUsers;