const productList = require('../database/stock.js');
const path = require('path');

const products = (req, res) => {
    res.render(path.join(__dirname, '../views/productList'),{'allProducts':productList});
};

const prodDetails = (req, res) => {
    res.render(path.join(__dirname, '../views/productDetail'));
};

const cart = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCart'));
};


const controlador = {
    prodDetails,
    cart,
    products,
}

module.exports = controlador;