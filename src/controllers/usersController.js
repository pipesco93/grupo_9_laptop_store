const path = require('path');
const {validationResult} = require('express-validator');

const modelUser = require('../model/User');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
    res.render(path.join(__dirname, '../views/register'));
};

const login = (req, res) => {
    res.render(path.join(__dirname, '../views/login'));
};

const postLogin = (req, res) => {
    const {
        email,
        password
    } = req.body;

    const errors  = validationResult(req);
    if (errors.isEmpty()){
        const userLogin = modelUser.findByField('email', email);
        if(userLogin){
            const passwd = bcrypt.compareSync(password, userLogin.password);
            if(passwd){
                req.session.userLogged = userLogin;
                // Redirect a home
                return res.send('Bienvenido ' + userLogin.email);
            }else{
                // Redirect a login 
                return res.send('Contraseña incorrecta');

            }
        }
        // Redirect a login
        res.send('Error, no se encuentra el email');

    }else{
        res.render('login', {
            'errors': errors.array(),
            'prev': req.body
        })
    }
}

const postRegister = (req,res) => {
    const {
        email, 
        password,
        firstName,
        lastName,
        adress, 
        pais, 
        avatar,
    } = req.body;

    const errors = validationResult(req);

    if (errors.isEmpty()) {
       const userExist = modelUser.findByField('email', email);
       if(userExist){
        // Redirect a register 
        res.send('El usuario se encuentra ya registrado');

       }else{
        const obj = {
            ...req.body,
            password: bcrypt.hashSync(password, 10)
        }
        modelUser.create(obj);
        // Redirect a home
        res.send('Good job');
        
       }
    }else{
        res.render('register', {
            'errors': errors.array(),
            'prev': req.body
        })
    }
}

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