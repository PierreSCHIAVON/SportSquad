module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING(100), // Augmenté à 100
      allowNull: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING(50), // Remettre à 50 si rollback
      allowNull: false,
    });
  }
};
