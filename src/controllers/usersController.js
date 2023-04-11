// Se requieren los modulos necesarios
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

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

    db.Usuarios.findOne({ where: { email: email } })
    .then((usuarioLogIn => {
        if (usuarioLogIn) {
            const passwd = bcrypt.compareSync(password, usuarioLogIn.password);
            if (passwd) {
               // console.log(userLogin);
                req.session.userLogged = usuarioLogIn;
                // Redirect a home
                res.locals.user = usuarioLogIn
                return res.redirect('/');
            } else {
                // Redirect a login
                return res.send('Contraseña incorrecta');
            }
        }
        // Redirect a login
        res.send('Error, no se encuentra el email');
    }))

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
        return res.render('register', { 'errors': errors.array(), 'prev': req.body });
    }

    db.Usuarios.findAll({ where: { email: email } },{
        include: ['isAd']
    })
        .then((dato) => {
            if (dato.length > 0) {
                //return res.render(path.join(__dirname, '../views/register.ejs'))
                return res.send('El usuario se encuentra ya registrado');
            }

            console.log('El usuario no esta registrado puede continuar')

            // Se requiere el nombre de la imagen si se adjunto alguna, de lo contrario se le asigna la imagen por defecto
            const avatar = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
            let newImege;

            if (avatar.length > 0) {
                newImege = avatar;
            } else {
                newImege = "generic-user-img.png"
            }

            db.Usuarios.create({
                email: req.body.email,
                password: bcrypt.hashSync(password, 10),
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                adress: req.body.adress,
                pais: req.body.pais,
                is_admin: parseInt(req.body.isAdmin),
                avatar: newImege
            }).then((usuario) => {
                console.log(usuario.id)
                req.session.userLogged = usuario;
                res.locals.user = usuario;
                res.redirect(`/`)
            })

        })
        .catch((error) => {
            res.send(error)
        })
};

const logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

//----------------------------------- Vista Usuario ------------------------------------

const userDetail = (req,res) => {
    const {id} = req.params;
    db.Usuarios.findByPk(id, {include: ['isAd']})
    .then((user) => {
        //res.json(user)

        res.render(path.join(__dirname,'../views/users'),{user})
    })
    .catch((error) => {
        console.log(error);
    });
}

const controlador = {
    register,
    login,
    postLogin,
    postRegister,
    logOut,
    userDetail

}

module.exports = controlador;