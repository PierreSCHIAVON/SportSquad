// migrations/20241016110000-create-participation-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Participations', {
      id_participation: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Fait référence à la table Users
          key: 'id_user'
        },
        onDelete: 'CASCADE' // Supprime la participation si l'utilisateur est supprimé
      },
      id_evenement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Evenements', // Fait référence à la table Evenements
          key: 'id_evenement'
        },
        onDelete: 'CASCADE' // Supprime la participation si l'événement est supprimé
      },
      date_participation: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Participations');
  }
};
