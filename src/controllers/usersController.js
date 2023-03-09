// Se requieren los modulos necesarios
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const modelUser = require('../model/User');


const productsFilePath = path.join(__dirname, '../database/productos.json');
const productList = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    if (!errors.isEmpty()) {
        return res.render('login', { 'errors': errors.array(), 'prev': req.body });
    }
    const userLogin = modelUser.findByField('email', email);
    //console.log(userLogin)
    if (userLogin) {
        const passwd = bcrypt.compareSync(password, userLogin.password);
        if (passwd) {
            req.session.userLogged = userLogin;
            // Redirect a home
            res.locals.user = userLogin
            return res.redirect('/');
        } else {
            // Redirect a login 
            return res.send('Contraseña incorrecta');
        }
    }
    // Redirect a login
    res.send('Error, no se encuentra el email');

};

//---------------------------------Post Register----------------------------------------------------------
const postRegister = (req, res) => {
    const {
        email,
        password,
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //console.log(errors);
        return res.render('register', {'errors': errors.array(), 'prev': req.body});
    }

    const userExist = modelUser.findByField('email', email);
    if (userExist) {
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
    res.render("/users/" + userExist.id, {"user":userExist})
};

const logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

//Poner boton de log out

//const logOut = (req, res) => {
//req,session.destroy();
//req.redirect('/login');
//}

// const userDetail = (req, res) =>{
//     const {id} = req.params
//     const userDetail = modelUser.findByField('id', id);

// }



const controlador = {
    register,
    login,
    postLogin,
    postRegister,
    logOut

}

module.exports = controlador;