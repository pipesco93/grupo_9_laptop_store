// Se requieren los modulos necesarios
//const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const modelUser = require('../model/User');


// Se requiere la base de datos de usuarions y se conbienrte en un objeto js
//const usersFilePath = path.join(__dirname, '../database/usuariosdb.json');
//const userList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


//---------------------------------Vista formulario register---------------------------------------------
const register = (req, res) => {
    res.render(path.join('register'));
};

//---------------------------------Vista formulario Login---------------------------------------------
const login = (req, res) => {
    res.render(path.join(__dirname, '../views/login'));
};

//---------------------------------Post Login----------------------------------------------------------
const postLogin = (req, res) => {
    const {
        email,
        password
    } = req.body;

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const userLogin = modelUser.findByField('email', email);
        if (userLogin) {
            const passwd = bcrypt.compareSync(password, userLogin.password);
            if (passwd) {
                req.session.userLogged = userLogin;
                // Redirect a home
                return res.send('Bienvenido ' + userLogin.email);
            } else {
                // Redirect a login 
                return res.send('Contraseña incorrecta');
            }
        }
        // Redirect a login
        res.send('Error, no se encuentra el email');

    } else {
        res.render('login', {
            'errors': errors.array(),
            'prev': req.body
        });
    }
};

//---------------------------------Post Register----------------------------------------------------------
const postRegister = (req, res) => {
    const {
        email,
        password,
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.render('register', { 'errors': errors.array(), 'prev': req.body });
    }

    const userExist = modelUser.findByField('email', email);
    if (!userExist) {
        // Redirect a register
        //return res.render(path.join(__dirname, '../views/register.ejs'))
        return res.send('El usuario se encuentra ya registrado');
    }

    // Se requiere el nombre de la imagen si se adjunto alguna, de lo contrario se le asigna la imagen por defecto
    const avatar = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
    let newImege;

    if (avatar.length > 0) {
        newImege = avatar;
    } else {
        newImege = "generic-user-img.png"
    }

    const obj = {
        ...req.body,
        password: bcrypt.hashSync(password, 10),
        avatar: newImege
    }

    modelUser.create(obj);

    // Redirect a home
    res.redirect("/")
};

//Poner boton de log out

//const logOut = (req, res) => {
//req,session.destroy();
//req.redirect('/login');
//}

const controlador = {
    register,
    login,
    postLogin,
    postRegister,

}

module.exports = controlador;