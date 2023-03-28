module.exports = (sequelize, dataTypes) => {
    const Pantalla = sequelize.define("Pantalla",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        pantalla : {
            type: dataTypes.STRING,
        }
    },
    {
    tableName: 'pantalla',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return Pantalla;
}