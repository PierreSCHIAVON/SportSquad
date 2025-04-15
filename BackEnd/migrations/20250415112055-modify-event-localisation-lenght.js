'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Evenements', 'localisation', {
      type: Sequelize.STRING(250),
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Evenements', 'localisation', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  }
};
