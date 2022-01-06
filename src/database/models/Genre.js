module.exports = (sequelize,dataTypes) => {


    let alias = 'Genre';

    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true,
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : '1'
        }
    }
    let confing = {
        tsbleName : "genres",
        timestamps : true,
        createdAt: 'created_at',
        updatedAt : 'updated_at',
        deletedAt : false
    }

    const Genre = sequelize.define(alias,cols,confing)
    return Genre;
}