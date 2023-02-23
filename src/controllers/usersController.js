const path = require('path');

const register = (req, res) => {
    res.render(path.join(__dirname, '../views/register'));
};

const login = (req, res) => {
    res.render(path.join(__dirname, '../views/login'));
};


const controlador = {
    register,
    login,
}

module.exports = controlador;