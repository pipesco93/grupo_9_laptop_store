// Se requiere la base de datos de productos
const db = require('../../database/models');

const apiProducts = async (req, res) => {

    const count = await db.Productos.count({
        col: 'id',
    });
    res.json(count)

    // db.Productos.findAll({attributes: ['id','Referencia','spec']}, { include: ['proces', 'pant', 'mem', 'almacen']})
    // .then((datito) => {
    //     res.status(200).json({
    //         count: {
    //             totalProductos: datito.length,
    //         },
    //         countByCategoty: {
    //             destacado: 10,
    //             noDestacadi: 4,
    //         },
    //         products: datito
    //     });
    // })
    // .catch((error) => {
    //     res.send(error)
    // })
};

const apiProductDetail = (req, res) => {
    db.Productos.findByPk(req.params.id,{ include: ['proces', 'pant', 'mem', 'almacen'] })
    .then((datito) => {
        res.status(200).json({
            meta: {
                status: 200,
                url: 'api/products/'+req.params.id
            },
            data: {
                nombre: datito.referencia
            }
            
        });
    })
    .catch((error) => {
        res.send(error)
    })
};


const apiControlador = {
    apiProducts,
    apiProductDetail
}

module.exports = apiControlador;