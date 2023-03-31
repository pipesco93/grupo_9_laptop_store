module.exports = (sequelize, dataTypes) => {
    const Memoria = sequelize.define("Memoria",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        memoria : {
            type: dataTypes.STRING,
        }
    },
    {
    tableName: 'memoria',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    Memoria.associate = function(models){
        Memoria.hasMany(models.Productos,{
            as: 'productos',
            foreignKey: 'memoria'
        })
    }

    return Memoria;
}