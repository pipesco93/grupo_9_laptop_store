const path = require('path');

const index = (req, res) => {
    res.render(path.join(__dirname, '../views/index'));
};


const controlador = {
    index,
}

module.exports =controlador;