// Se crean las variables necesarias
const express = require('express');
const path = require('path');
const app = express();

//Se da el permiso para la carpeta public
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Listen en el pueto 3001 localhost:3001
app.listen(3002, () => console.log('Servidor corriendo'));

// Se crea la pagina principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

