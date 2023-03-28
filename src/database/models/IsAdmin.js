module.exports = (sequelize, dataTypes) => {
    const IsAdmin = sequelize.define("IsAdmin",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        is_admin : {
            type: dataTypes.STRING,
        }
    },
    {
    tableName: 'is_admin',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return IsAdmin;
}