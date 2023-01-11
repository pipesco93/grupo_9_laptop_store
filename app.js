// Se crean las variables necesarias
const express = require('express');
const path = require('path');
const app = express();

//Se da el permiso para la carpeta public
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Listen en el puerto 3001 localhost:3001
app.listen(3001, () => {
    console.log('Servidor corriendo')
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/prod-details', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

