const productList = require('../database/stock.js');
const path = require('path');

const index = (req, res) => {
    res.render(path.join(__dirname, '../views/index'),{'allProducts':productList});
};


const controlador = {
    index,
}

module.exports =controlador;