'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'sports_fav', {
      type: Sequelize.STRING(250), 
      allowNull: true,
    });
    await queryInterface.changeColumn('Users', 'localisation', {
      type: Sequelize.STRING(250), 
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'sports_fav', {
      type: Sequelize.STRING(50), 
      allowNull: true,
    });
    await queryInterface.changeColumn('Users', 'localisation', {
      type: Sequelize.STRING(50), 
      allowNull: true,
    });
  }
};
