module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        prenom: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        pseudo: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        niveau: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        date_inscription: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        photo: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        sports_fav: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        localisation: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, {
        tableName: 'Users',
        timestamps: true,
    });

    User.associate = function(models) {
        User.hasMany(models.Evenement, {
            foreignKey: 'id_user',
            as: 'evenements',
        });
    };

    return User;
};