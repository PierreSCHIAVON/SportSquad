// models/Participation.js

module.exports = (sequelize, DataTypes) => {
    const Participation = sequelize.define('Participation', {
        id_participation: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_users: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
<<<<<<< HEAD
                model: 'Users', // Nom du modèle `User`
=======
                model: 'User', // Nom du modèle `User`
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
                key: 'id_user'
            }
        },
        id_evenement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
<<<<<<< HEAD
                model: 'Evenements', // Nom du modèle `Evenement`
=======
                model: 'Evenement', // Nom du modèle `Evenement`
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
                key: 'id_evenement'
            }
        },
        date_participation: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    
    // Associations
    Participation.associate = (models) => {
      Participation.belongsTo(models.User, { foreignKey: 'id_users', as: 'participant' });
      Participation.belongsTo(models.Evenement, { foreignKey: 'id_evenement', as: 'evenement' });
    };
  
    return Participation;
};
  