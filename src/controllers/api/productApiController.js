// Se requiere la base de datos de productos
const db = require('../../database/models');

const apiProducts = async (req, res) => {

    const count = await db.Productos.count({col: 'id'})
    const destacado = await db.Productos.count({where: { destacado: "si" }})
    const noDestacado = await db.Productos.count({where: { destacado: "no" }})
    
    const data = {
        count : count,
        countByCategory: {
            destacado: destacado,
            noDestacado: noDestacado
        },
        products: await db.Productos.findAll(
            { attributes: ['id', 'Referencia', 'spec'] },
            { include: ['proces', 'pant', 'mem', 'almacen'] }
        )
    }

    res.json(data)
};

const apiProductDetail = (req, res) => {
    db.Productos.findByPk(req.params.id, { include: ['proces', 'pant', 'mem', 'almacen'] })
        .then((datito) => {
            res.status(200).json({
                data: {
                    nombre: datito.referencia,
                    marca: datito.marca,
                    caracteristicas: datito.spec,
                    imagenURL: 'http://localhost:3001/images/products/'+datito.img,
                    pantalla: datito.pant.pantalla,
                    procesador: datito.proces.procesador,
                    memoria: datito.mem.memoria,
                    almacenamiento: datito.almacen.almacenamiento
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