// const productList = require('../database/stock.js');
const fs = require('fs');
const path = require('path');

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

//---------------------------------- Vista Detalls de productos ---------------------------------------------
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
    
    productList.forEach(elem => {
        const {id} = req.params;

        if(elem.id == id){
            elem.referencia = req.body.referencia;
            elem.marca = req.body.product;
            elem.spec = req.body.description;
            elem.precio = req.body.price;
            elem.procesador = req.body.procesador;
            elem.pantalla = req.body.pantalla;
        };

    })

    const newProdListJson = JSON.stringify(productList,null, ' ', (err)=>{
        if(err){
            return false
        }
    });

    fs.writeFileSync(path.join(__dirname,"../databaseJson/productos.json"), newProdListJson);

    res.redirect('/products');
};


//---------------------------------- Vista Crear productos ---------------------------------------------
const prodCreate = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCreate'));
};

//---------------------------------- Confirmar creacion de productos ---------------------------------------------
const confirmCreate = (req, res) => {
    //Se requiere la informacion obtenida en el formulario
    let {
        referencia,
        spec,
        precio,
        procesador,
        pantalla,
        memoria,
        almacenamiento,
        destacado,
        marca,
    } = req.body

    // Se lee la informacion del archivo imagen (nombre de la imagen) cargada en el formulario
    // y se genera el nombre o ruta para guadrar l aimagen
    const image = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
    let newImege;

    if (image.length > 0){
        newImege = image;
    }

    const objdb = {
        marca,
        referencia,
        precio: parseInt(precio),
        spec,
        img: newImege,
        destacado,
        pantalla: parseInt(pantalla),
        procesador: parseInt(procesador),
        memoria: parseInt(memoria),
        almacenamiento: parseInt(memoria)
    };
    db.Productos.create(objdb)
    res.redirect('/products');
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
    db.Productos.findAll()
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