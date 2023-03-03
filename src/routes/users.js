const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/usersController.js');
const { body } = require('express-validator');

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
    body('pais').notEmpty().withMessage('Enter a country'),
    body('avatar').notEmpty().withMessage('Enter an image'),

];


routerUsers.get('/register', userController.register);
routerUsers.get('/login', userController.login);

routerUsers.post('/log-in', validateLogin, userController.postLogin);
routerUsers.post('/register', validateRegister, userController.postRegister);

module.exports = routerUsers;