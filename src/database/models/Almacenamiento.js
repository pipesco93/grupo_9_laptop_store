module.exports = (sequelize, dataTypes) => {
    
    const Almacenamiento = sequelize.define("Almacenamiento",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        almacenamiento : {
            type: dataTypes.STRING,
        }
    },
    {
    tableName: 'almacenamiento',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return Almacenamiento;
}