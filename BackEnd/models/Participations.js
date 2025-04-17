// models/Participation.js

module.exports = (sequelize, DataTypes) => {
  const Participation = sequelize.define("Participation", {
    id_participation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User", // Nom du modèle `User`
        key: "id_user",
      },
    },
    id_evenement: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Evenement", // Nom du modèle `Evenement`
        key: "id_evenement",
      },
    },
    date_participation: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  // Associations
  Participation.associate = (models) => {
    Participation.belongsTo(models.User, {
      foreignKey: "id_user",
      as: "participant",
    });
    Participation.belongsTo(models.Evenement, {
      foreignKey: "id_evenement",
      as: "evenement",
    });
  };

  return Participation;
};
