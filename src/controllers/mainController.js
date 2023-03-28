const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../databasesJson/productos.json');
const productList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const index = (req, res) => {
    res.render(path.join('index'),{'allProducts':productList});
};


const controlador = {
    index,
}

module.exports =controlador;