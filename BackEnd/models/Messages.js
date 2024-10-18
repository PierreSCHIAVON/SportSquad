// models/Message.js

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        id_message: {
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
        contenu: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        date_envoi: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
  
    // Associations
    Message.associate = (models) => {
        Message.belongsTo(models.User, { foreignKey: 'expediteur_id', as: 'expediteur' });
        Message.belongsTo(models.User, { foreignKey: 'destinataire_id', as: 'destinataire' });
    };
  
    return Message;
};
