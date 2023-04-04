module.exports = (sequelize, dataTypes) => {
    const Productos = sequelize.define("Productos",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        marca : {
            type: dataTypes.STRING,
        },
        referencia : {
            type: dataTypes.STRING,
        },
        destacado : {
            type: dataTypes.STRING,
        },
        precio : {
            type: dataTypes.INTEGER,
        },
        spec : {
            type: dataTypes.STRING,
        },
        img : {
            type: dataTypes.STRING,
        },
        pantalla : {
            type: dataTypes.INTEGER,
        },
        procesador : {
            type: dataTypes.INTEGER,
        },
        memoria : {
            type: dataTypes.INTEGER,
        },
        almacenamiento : {
            type: dataTypes.INTEGER,
        },
    },
    
    {
    tableName: 'productos',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    Productos.associate = function(models){
        Productos.belongsTo(models.Almacenamiento,{
            as: 'almacen',
            foreignKey: 'almacenamiento'
        });

        Productos.belongsTo(models.Memoria,{
            as: 'mem',
            foreignKey: 'memoria'
        });

        Productos.belongsTo(models.Procesador,{
            as: 'proces',
            foreignKey: 'procesador'
        });

        Productos.belongsTo(models.Pantalla,{
            as: 'pant',
            foreignKey: 'pantalla'
        })

    }

    // Productos.associate = function(models){
    //     Productos.belongsTo(models.Memoria,{
    //         as: 'mem',
    //         foreignKey: 'memoria'
    //     })
    // }

    // Productos.associate = function(models){
    //     Productos.belongsTo(models.Procesador,{
    //         as: 'proces',
    //         foreignKey: 'procesador'
    //     })
    // }

    // Productos.associate = function(models){
    //     Productos.belongsTo(models.Pantalla,{
    //         as: 'pant',
    //         foreignKey: 'pantalla'
    //     })
    // }

    return Productos;
}