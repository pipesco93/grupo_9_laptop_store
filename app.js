// Se crean las variables necesarias
const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD
 
//Se da el permiso para la carpeta public
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
 
// Listen en el puerto 3001 localhost:3001
app.listen(3001, () => {
    console.log('Servidor corriendo')
});

// Se crea el log in
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


=======
const morgan = require('morgan');

const port = process.env.PORT || 3001;

//Se da el permiso para la carpeta public
//const publicPath = path.resolve(__dirname, "./public");
//app.use(express.static(publicPath));

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
>>>>>>> develop
