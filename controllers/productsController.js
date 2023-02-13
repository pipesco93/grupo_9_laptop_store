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
    
};
    
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

       // const image = req.file ? req.file.filename : '';
        //let editImage 
       // if(image.length > 0){
         //   editImage = `images/${image}`
      //  }
    })
    const newProdListJson = JSON.stringify(productList,null, ' ', (err)=>{
        if(err){
            return false
        }
    });

    fs.writeFileSync("./database/productos.json", newProdListJson)

    res.redirect('/products');
};

const prodDelete = (req, res) => {
    const idDelete = req.body.id;
    const prodDeletedList = productList.filter(e => e.id != idDelete)

    const newProdList = JSON.stringify(prodDeletedList,null, ' ', (err)=>{
        if(err){
            return false
        }
    });


    fs.writeFileSync("./database/productos.json", newProdList)

    res.redirect('/');
};

const prodCreate = (req, res) => {
    res.render(path.resolve(__dirname, '../views/productCreate'));
};

const confirmCreate = (req, res) => {
    //Se requiere la informacion obtenida en el formulario
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

    //Se crea el nuevo id teniendo como base el ultimo id de la array de objetos productList
    const newId = productList[productList.length - 1].id + 1;

    // Se lee la informacion del archivo imagen (nombre de la imagen) cargada en el formulario 
    // y se genera el nombre o ruta para guadrar l aimagen
    const image = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
    let newImege;

    if (image.length > 0){
        newImege = `../images/${image}`
    }

    //Se crea el objeto que se va a agregar al archivo JSON
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
    //Agregando null ' ' y el cb err hace que el JSOn quede organizado 
    const newProdJson = JSON.stringify(productList,null, ' ', (err)=>{
        if(err){
            return false
        }
    });
    fs.writeFileSync("./database/productos.json", newProdJson)
	//console.log(newProdJson)

    res.redirect('/products');
};

const productDelete = (req, res) => {
    
}


//SE exportan las funciones dentro del objeto controller
const controlador = {
    prodDetails,
    cart,
    products,
    prodEdit,
    prodCreate,
    confirmCreate,
    prodDelete,
}

module.exports = controlador;