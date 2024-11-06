module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    pseudo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
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
    banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    }, {
        tableName: 'Users',
        timestamps: false,
    });

    return User;
};
  