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
    tableName: 'laptop_store',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return Productos;
}