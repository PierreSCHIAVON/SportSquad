'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Participations', 'id_users', 'id_user');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Participations', 'id_user', 'id_users');
  }
};
