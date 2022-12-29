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

// Se crea el log in
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


