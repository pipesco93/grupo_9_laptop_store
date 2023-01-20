const express = require('express');
const routerMain = express.Router();
const maincontroller = require('../controllers/mainController.js')


routerMain.get('/', maincontroller.index);

module.exports = routerMain;