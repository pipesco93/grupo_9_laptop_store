// Validaciones

const { body } = require('express-validator');

const validateLogin = [
    body('email').isEmail().withMessage('Email invalido'),
    body('password').notEmpty().withMessage('Se debe ingresar una contraseña')
];

const validateRegister = [
    body('email').isEmail().withMessage('El email no es valido'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('Debes ingresar una contraseña'),
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre'),
    body('lastName').notEmpty().withMessage('Debes ingesar un apellido'),
    body('adress').notEmpty().withMessage('Debes ingresar una dirección'),
];

const userValidations = {
    validateLogin,
    validateRegister
}

module.exports = userValidations;