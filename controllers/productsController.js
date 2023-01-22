const productList = require('../database/stock.js');
const path = require('path');

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


const controlador = {
    prodDetails,
    cart,
    products,
}

module.exports = controlador;