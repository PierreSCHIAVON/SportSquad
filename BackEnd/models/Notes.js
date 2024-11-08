// models/Notes.js

module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('Notes', {
        id_notes: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        expediteur_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Fait référence au modèle Users
                key: 'id_user'
            }
        },
        destinataire_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Fait référence au modèle Users
                key: 'id_user'
            }
        },
        id_evenement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Evenements', // Fait référence au modèle Evenements
                key: 'id_evenement'
            }
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description_note: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date_evaluation: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
  
    // Associations
    Notes.associate = (models) => {
        Notes.belongsTo(models.User, { foreignKey: 'expediteur_id', as: 'expediteur' });
        Notes.belongsTo(models.User, { foreignKey: 'destinataire_id', as: 'destinataire' });
        Notes.belongsTo(models.Evenement, { foreignKey: 'id_evenement', as: 'evenement' });
    };
  
    return Notes;
};
