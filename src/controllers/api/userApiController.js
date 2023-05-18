// Se requiere la base de datos de productos
const db = require('../../database/models');

const apiUsers = async (req, res) => {


    const totalUsuarios = await db.Usuarios.count({
        col: 'id',
    });
    // res.json(count)


    db.Usuarios.findAll({ attributes: ['id', 'first_name', 'email'] })
        .then((data) => {
            const users = []
            data.map((e) => {
                const user = {
                    id: e.id,
                    nombre: e.first_name,
                    email: e.email,
                    detailURL: 'http://localhost:3001/api/usuarios/' + e.id
                }
                users.push(user)

            })
            //console.log(users)
            res.json({
                count: totalUsuarios,
                users: users
            });
        })
        .catch((error) => {
            res.send(error)
        })

};

const apiUserDetail = (req, res) => {

    db.Usuarios.findByPk(req.params.id, { include: ['isAd'] })
        .then((datito) => {
            res.status(200).json({
                data: {
                    nombre: datito.first_name,
                    apellido: datito.last_name,
                    email: datito.email,
                    imagenURL: 'http://localhost:3001/images/users/' + datito.avatar,
                    direccion: datito.adress,
                    pais: datito.pais,
                }

            });
        })
        .catch((error) => {
            res.send(error)
        })
};


const apiUserControlador = {
    apiUsers,
    apiUserDetail
}

module.exports = apiUserControlador;