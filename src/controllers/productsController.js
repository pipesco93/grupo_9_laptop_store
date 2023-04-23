// const productList = require('../database/stock.js');
const fs = require('fs');
const path = require('path');

// Para validaciones 
const { validationResult } = require('express-validator');

// Se requiere la base de datos de productos 
const db = require('../database/models');


const productsFilePath = path.join(__dirname, '../dbJson/productos.json');
const productList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


//---------------------------------- Vista Listado de productos ---------------------------------------------
const products = (req, res) => {
    db.Productos.findAll()
        .then((allProducts) => {
            res.render(path.join(__dirname, '../views/productList'),{'allProducts':allProducts});
            //res.json(datito);
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
        });
    
};

//---------------------------------- Vista Details de productos ---------------------------------------------
const prodDetails = (req,res) => {
    const {id} = req.params;
    db.Productos.findByPk(id)
    .then((product) => {
        res.render(path.join(__dirname, '../views/productDetail'),{product});
    })
    .catch((error) => {
        console.log(error);
    });
}

//---------------------------------- Vista carrito ---------------------------------------------
const cart = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCart.ejs'));
};

//---------------------------------- Vista Editar productos ---------------------------------------------
const productEdit = (req, res) => {
    const { id } = req.params;

    const productEdit = productList.find(elem => elem.id == id);

    res.render(path.join(__dirname, '../views/productEdit'), {productEdit})

};

//---------------------------------- Confirmar edit ---------------------------------------------
const editConfirm =  (req, res) => {

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0){

       // logica del controlador

    }else{
        
        res.render('productEdit', {errores: resultValidation.errors})

    } 
    
};


//---------------------------------- Vista Crear productos ---------------------------------------------
const prodCreate = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCreate'));
};

//---------------------------------- Confirmar creacion de productos ---------------------------------------------
const confirmCreate = (req, res) => {

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0){

        // logica del controlador

    }else{ 

        res.render('productCreate', {errores: resultValidation.errors})
    
    }

};


//---------------------------------- Eliminar productos ---------------------------------------------
const prodDelete = (req, res) => {
    const idDelete = req.body.id;
    const prodDeletedList = productList.filter(e => e.id != idDelete)

    const newProdList = JSON.stringify(prodDeletedList,null, ' ', (err)=>{
        if(err){
            return false
        }
    });


    fs.writeFileSync(path.join(__dirname,"../databaseJson/productos.json"), newProdList)

    res.redirect('/');
};


const pruebaDb  =  (req,res) => {
    db.Productos.findAll({
        include: ['proces', 'pant', 'mem', 'almacen'],
        attributes: []
        
    })
    
        .then((datito) => {
            res.json(datito);
        })
        .catch((error) => {
            res.send(error)
        })
};


//SE exportan las funciones dentro del objeto controller
const controlador = {
    prodDetails,
    cart,
    products,
    productEdit,
    editConfirm,
    prodCreate,
    confirmCreate,
    prodDelete,
    pruebaDb
}

module.exports = controlador;