const path = require('path');

const prodDetails = (req, res) => {
    res.render(path.join(__dirname, '../views/productDetail'));
};

const cart = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCart'));
};

const prodEdit = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productEdit'));
};

const controlador = {
    prodDetails,
    cart,
    prodEdit,
}

module.exports = controlador;