const path = require('path');
const fs = require('fs');
// Se requiere la base de datos de productos 
const db = require('../database/models');

const index = (req, res) => {
    //res.render(path.join('index'),{'allProducts':productList});
    db.Productos.findAll()
        .then((allProducts) => {
            res.render(path.join('index'),{'allProducts':allProducts});
            //res.json(datito);
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
        });
};


const controlador = {
    index,
}

module.exports =controlador;