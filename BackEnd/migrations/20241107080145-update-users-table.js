'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'banned');
    await queryInterface.addColumn('Users', 'sports_fav', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
    await queryInterface.addColumn('Users', 'localisation', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'banned', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.removeColumn('Users', 'sports_fav');
    await queryInterface.removeColumn('Users', 'localisation');
  }
};