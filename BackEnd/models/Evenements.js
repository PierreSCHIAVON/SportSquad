// models/Evenement.js

module.exports = (sequelize, DataTypes) => {
  const Evenement = sequelize.define('Evenement', {
    id_evenement: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nom du modèle User
        key: 'id_user'
      }
    },
    sport: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    niveau_requis: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    localisation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nb_max_participants: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_debut: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description_event: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etat: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });

  Evenement.associate = (models) => {
    Evenement.belongsTo(models.User, { foreignKey: 'id_users', as: 'organisateur' });
  };

  return Evenement;
};
