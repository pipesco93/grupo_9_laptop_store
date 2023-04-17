const express = require('express');
const routerMain = express.Router();
const maincontroller = require('../controllers/mainController.js')
const loadUser = require('../middlewares/loadUser')


routerMain.get('/', loadUser, maincontroller.index);

module.exports = routerMain;