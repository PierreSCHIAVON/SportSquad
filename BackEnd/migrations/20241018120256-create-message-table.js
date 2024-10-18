// migrations/20241016120000-create-message-table.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id_message: {
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
      contenu: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      date_envoi: {
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
    await queryInterface.dropTable('Messages');
  }
};
