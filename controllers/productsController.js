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

const productEdit = (req, res) => {
    const { id } = req.params;
    
    const productEdit = productList.find(elem => elem.id == id);
    
    res.render(path.join(__dirname, '../views/productEdit'), {productEdit})
    
    }
    
const editConfirm =  (req, res) => {
    productList.forEach(elem => {
        if(elem.id == req.body.id){
            elem.referencia = req.body.referencia;
            elem.marca = req.body.product;
            elem.spec = req.body.description;
            elem.precio = req.body.price;
            elem.procesador = req.body.procesador;
            elem.pantalla = req.body.pantalla;
            console.log(elem)
        }

       // const image = req.file ? req.file.filename : '';
        //let editImage 
       // if(image.length > 0){
         //   editImage = `images/${image}`
      //  }
    })

    res.redirect('/products');
};

const controlador = {
    prodDetails,
    cart,
    products,
    productEdit,
    editConfirm,
}

module.exports = controlador;