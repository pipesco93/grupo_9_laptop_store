const path = require('path');

const prodDetails = (req, res) => {
    res.render(path.join(__dirname, '../views/productDetail'));
};

const cart = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCart'));
};


const controlador = {
    prodDetails,
    cart,
}

module.exports = controlador;