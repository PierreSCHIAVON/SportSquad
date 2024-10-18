// migrations/20241016113000-create-notes-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notes', {
      id_notes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      expediteur_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
        },
        onDelete: 'CASCADE'
      },
      destinataire_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
        },
        onDelete: 'CASCADE'
      },
      id_evenement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Evenements',
          key: 'id_evenement'
        },
        onDelete: 'CASCADE'
      },
      note: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description_note: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      date_evaluation: {
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
    await queryInterface.dropTable('Notes');
  }
};
