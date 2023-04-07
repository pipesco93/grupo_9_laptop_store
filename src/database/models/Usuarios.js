module.exports = (sequelize, dataTypes) => {
    const Usuarios = sequelize.define("Usuarios",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        email : {
            type: dataTypes.STRING,
        },
        password : {
            type: dataTypes.STRING,
        },
        first_name : {
            type: dataTypes.STRING,
        },
        last_name : {
            type: dataTypes.STRING,
        },
        adress : {
            type: dataTypes.STRING,
        },
        pais : {
            type: dataTypes.STRING,
        },
        is_admin : {
            type: dataTypes.INTEGER,
        },
        avatar : {
            type: dataTypes.STRING,
        },
    },
    
    {
    tableName: 'usuarios',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    Usuarios.associate = function(models){
        Usuarios.belongsTo(models.IsAdmin,{
            as: 'isAd',
            foreignKey: 'is_admin'
        })
    }

    return Usuarios;
}