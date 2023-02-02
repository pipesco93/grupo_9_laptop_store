// const productList = require('../database/stock.js');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../database/productos.json');
const productList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const products = (req, res) => {
    res.render(path.join(__dirname, '../views/productList'),{'allProducts':productList});
};

const prodDetails = (req,res) => {
    const {id} = req.params;
    const product = productList.find(elem => elem.id == parseInt(id));
    if(product){
        //res.send(user);
        res.render(path.join(__dirname,'../views/productDetail'),{product})
    }else{
        res.send("Not found");
    }
}

const cart = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCart'));
};

const prodEdit = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productEdit'));
};

const prodCreate = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCreate'));
};

const confirmCreate = (req, res) => {
    const {
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

    const newId = productList[productList.length - 1].id + 1;

    const image = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
    let newImege;

    if (image.length > 0){
        newImege = `images/${image}`
    }

    const obj = {
        id: newId,
        marca,
        referencia,
        precio,
        spec,
        img: newImege,
        destacado,
        pantalla,
        procesador,
        memoria,
        almacenamiento
    };

    //console.log(obj);
    productList.push(obj);
    const newProdJson = JSON.stringify(productList);
    fs.writeFileSync("./database/productos.json", newProdJson)
	console.log(newProdJson)

    res.redirect('/products');
};

const controlador = {
    prodDetails,
    cart,
    products,
    prodEdit,
    prodCreate,
    confirmCreate,
}

module.exports = controlador;