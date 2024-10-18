'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nom: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      prenom: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      pseudo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      niveau: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      date_inscription: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      photo: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      banned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};