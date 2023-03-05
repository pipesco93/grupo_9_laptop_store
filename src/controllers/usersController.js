// Se requieren los modulos necesarios
const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

// Se requiere la base de datos de usuarions y se conbienrte en un objeto js
const usersFilePath = path.join(__dirname, '../database/usuariosdb.json');
const userList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


//---------------------------------Vista formulario register---------------------------------------------
const register = (req, res) => {
    res.render(path.join(__dirname, '../views/register'));
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

//---------------------------------Post Register----------------------------------------------------------
const postRegister = (req,res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        adress,
        pais,
    } = req.body;

    const errors = validationResult(req);
    // npm run devconsole.log(errors)

    if (errors.isEmpty()) {
        
        const userExist = userList.find((e) => e['email'] == email);;
        if(userExist){
            // Redirect a register 
            res.send('El usuario se encuentra ya registrado');

        }else{
            //Se crea el nuevo id teniendo como base el ultimo id de la array de objetos userList
            let newId;
            if (userList.length > 0){
                newId = userList[userList.length - 1].id + 1;
                console.log(newId);
            }else{
                newId = 1
            }

            // Se lee la informacion del archivo imagen (nombre de la imagen) cargada en el formulario
            // y se genera el nombre o ruta para guadrar l aimagen
            const avatar = req.file ? req.file.filename : ''; //si file no es vacio ponle el nombre creado con filename sino vacio
            let newImege;

            if (avatar.length > 0){
                newImege = avatar;
            }else{
                newImege =  "generic-user-img.png"
            }

            

            newUserObj = {
                id: newId,
                email,
                password: bcrypt.hashSync(password, 10),
                firstName,
                lastName,
                adress,
                pais,
                avatar: newImege
            }
           // console.log(newUserObj);

            userList.push(newUserObj);
            //Agregando null ' ' y el cb err hace que el JSOn quede organizado 
            const newUserJson = JSON.stringify(userList,null, ' ', (err)=>{
                if(err){
                    return false
                }
            });
            fs.writeFileSync(path.join(__dirname,"../database/usuariosdb.json"), newUserJson)

            // Redirect a home
            res.redirect("/")
        }
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