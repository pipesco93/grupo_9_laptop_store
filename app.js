// Se crean las variables necesarias
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const port = process.env.PORT || 3001;



//Set ejs
app.set('view engine','ejs');
app.use(express.static('public'));

// Se requiere ysesa el archivo main de la carpeta router, que es dondese encuentran todas las direcciones del sitio
const routerMain = require('./routes/main.js')
app.use(routerMain);

const routerUsers = require('./routes/users.js')
app.use(routerUsers);

const routerProducts = require('./routes/products.js')
app.use(routerProducts);


// Listen en el puerto 3001 localhost:3001
app.listen(port, () => {
    console.log(`Servidor corriendo ${port}`)
});
//prueba
