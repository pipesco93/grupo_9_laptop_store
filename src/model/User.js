const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const User = {

    filename : path.join(__dirname, '../database/usuariosdb.json'),

    getAlluser : () => {
        return JSON.parse(fs.readFileSync(User.filename, 'utf-8'))
    },

    newId : () => {
        const allUsers = User.getAlluser();

        if (allUsers.length){
            return(allUsers[allUsers.length - 1].id) + 1;
        }else{
            return 1;
        }
    },

    create : (data) => {
        const users = User.getAlluser();

        const newUser = {
            id : User.newId(),
            ...data
        }

        users.push(newUser);

        fs.writeFile(User.filename, JSON.stringify(users, null, ' '), (error) => {
            if(error){
                return false
            }
        });

        return newUser.id;
    },

    findByPk : (id) => {
        return User.getAlluser().find((e) => e.id == id);
    },

    findByField : (field, text) => {
        return User.getAlluser().find((e) => e[field] == text);
    },

}



module.exports = User;