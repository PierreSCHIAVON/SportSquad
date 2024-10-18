'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Evenements', {
      id_evenement: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
        }
      },
      sport: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      niveau_requis: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      localisation: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nb_max_participants: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_debut: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_fin: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description_event: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      etat: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('Evenements');
  } 
};
