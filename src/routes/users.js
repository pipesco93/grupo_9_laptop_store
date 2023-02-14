const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/usersController.js')


routerUsers.get('/register', userController.register);
routerUsers.get('/login', userController.login);

module.exports = routerUsers;