module.exports = (sequelize,dataTypes) => {


    let alias = 'Movie';

    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : '0'
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }
    let confing = {
        tsbleName : "movies",
        timestamps : true,
        createdAt: 'created_at',
        updatedAt : 'updated_at',
        deletedAt : false
    }

    const Movie = sequelize.define(alias,cols,confing)
    return Movie;
}