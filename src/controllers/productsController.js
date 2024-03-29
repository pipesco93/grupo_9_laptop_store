// const productList = require('../database/stock.js');
const path = require('path');

// Se requiere la base de datos de productos
const db = require('../database/models');

const { validationResult } = require('express-validator');

//---------------------------------- Vista Listado de productos ---------------------------------------------
const products = (req, res) => {
    db.Productos.findAll()
        .then((allProducts) => {
            res.render(path.join(__dirname, '../views/productList'), { 'allProducts': allProducts });
            //res.json(datito);
        })
        .catch((error) => {
            //res.send(error)
            console.log(error);
        });
};

//---------------------------------- Vista Detalls de productos ---------------------------------------------
const prodDetails = (req, res) => {
    const { id } = req.params;
    db.Productos.findByPk(id, { include: ['proces', 'pant', 'mem', 'almacen'] })
        .then((product) => {
            res.render(path.join(__dirname, '../views/productDetail'), { product });
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
    console.log(id)
    db.Productos.findByPk(id, { include: ['proces', 'pant', 'mem', 'almacen'] })
        .then((productEdit) => {
            //console.log(productEdit.dataValues)
            //res.json(productEdit)
            res.render(path.join(__dirname, '../views/productEdit'), { productEdit });
        })
        .catch((error) => {
            console.log(error);
        });
};

//---------------------------------- Confirmar edit ---------------------------------------------
const editConfirm = (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        const { id } = req.params;
        console.log(1)
        db.Productos.findByPk(id, { include: ['proces', 'pant', 'mem', 'almacen'] })
            .then((productEdit) => {

    
                console.log(2)
                return res.render(path.join(__dirname, '../views/productEdit'), { 'errors': errors.array(), 'productEdit': productEdit });
            })
    }else{


    const id = parseInt(req.params.id);

    const image = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
    let newImege;

    if (image.length > 0) {
        newImege = image;
    }

    db.Productos.update(
        {
            referencia: req.body.referencia,
            marca: req.body.product,
            spec: req.body.description,
            precio: parseInt(req.body.price),
            procesador: parseInt(req.body.procesador),
            img: newImege,
            pantalla: parseInt(req.body.pantalla),
        },
        {
            where: { id: id }
        }
    )
    res.redirect('/products');
}
};


//---------------------------------- Vista Crear productos ---------------------------------------------
const prodCreate = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCreate'));
};

//---------------------------------- Confirmar creacion de productos ---------------------------------------------
const confirmCreate = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('productCreate', { 'errors': errors.array(), 'prev': req.body });
    }

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

    if (image.length > 0) {
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
        .then(() => res.redirect('/products'))
        .catch((error) => res.send(error))
};


//---------------------------------- Eliminar productos ---------------------------------------------
const prodDelete = (req, res) => {
    const idDelete = parseInt(req.body.id);
    db.Productos.destroy({
        where: { id: idDelete }
    })
    res.redirect('/');
};



//prueba de base de datos
const pruebaDb = (req, res) => {
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