const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../database/productos.json');
const productList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const index = (req, res) => {
    res.render(path.join(__dirname, '../views/index'),{'allProducts':productList});
};


const controlador = {
    index,
}

module.exports =controlador;