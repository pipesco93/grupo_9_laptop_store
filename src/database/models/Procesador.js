module.exports = (sequelize, dataTypes) => {
    const Procesador = sequelize.define("Procesador",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        procesador : {
            type: dataTypes.STRING,
        }
    },
    {
    tableName: 'procesador',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    Procesador.associate = function(models){
        Procesador.hasMany(models.Productos,{
            as: 'productos',
            foreignKey: 'procesador'
        })
    }

    return Procesador;
}